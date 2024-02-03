import React, { useEffect, useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Ensure you have this CSS
import "./quill.custom.css"; // Custom Quill editor styles
import { useApiContext } from "../../../Contexts/ApiContext";

// Updated News interface to have date as a string
interface News {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
  date: string; // Date now a string
}
function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is 0-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
interface NewsFormProps {
  isEditing: boolean;
  initialData: News | null;
}

const NewsForm = ({ isEditing, initialData }: NewsFormProps) => {
  const { addNews, editNews, newsError } = useApiContext();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<News>({ defaultValues: initialData || {} });
  const quillRef = useRef<any>(null);

  // Toolbar options for Quill
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
      });
      quill.on("text-change", () => {
        setValue("content", quill.root.innerHTML);
      });

      if (isEditing && initialData?.content) {
        quill.clipboard.dangerouslyPasteHTML(initialData.content);
      }
    }
  }, [setValue, initialData, isEditing]);

  
  const handleFormSubmit = async (data: News) => {
    // Ensuring date is always a string, even when initialData is null or doesn't have a date
    const formattedDate = isEditing && initialData?.date ? formatDate(initialData.date) : formatDate(new Date().toISOString());
  
    const newsData = {
      ...data,
      date: formattedDate,
    };
  
    try {
      if (isEditing && initialData?.id) {
        await editNews(initialData.id, newsData); // Edit existing news
      } else {
        await addNews(newsData); // Add new news
      }
      reset();
    } catch (error) {
      console.error("Error submitting the form: ", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{ width: "100%" }}
    >
      {newsError && (
        <Typography variant="h6">Error: {newsError.message}</Typography>
      )}

      <TextField
        fullWidth
        label="ID"
        {...register("id", { required: "ID is required" })}
        error={!!errors.id}
        helperText={errors.id?.message}
        sx={{ mb: 2 }}
        disabled={isEditing} // Disable editing the ID when editing an existing news item
      />

      <TextField
        fullWidth
        label="Title"
        {...register("title", { required: "Title is required" })}
        error={!!errors.title}
        helperText={errors.title?.message}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Short Description"
        {...register("shortDescription", {
          required: "Short description is required",
        })}
        error={!!errors.shortDescription}
        helperText={errors.shortDescription?.message}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Image URL"
        {...register("imageUrl", { required: "Image URL is required" })}
        error={!!errors.imageUrl}
        helperText={errors.imageUrl?.message}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Article Content
      </Typography>
      <div style={{ height: 300 }} ref={quillRef}></div>

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        {isEditing ? "Update" : "Submit"}
      </Button>
    </Box>
  );
};

export default NewsForm;
