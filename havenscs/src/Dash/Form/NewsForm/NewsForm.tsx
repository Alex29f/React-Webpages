import React, { useEffect, useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Ensure you have this CSS
import "./quill.custom.css"; // Your custom dark theme overrides

import { useApiContext } from "../../../Contexts/ApiContext";

interface News {
  id?: number; // optional id field for editing
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string; // Rich text content
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
    }
  }, [setValue]);

  useEffect(() => {
    if (quillRef.current && initialData?.content) {
      const quill = new Quill(quillRef.current);
      quill.clipboard.dangerouslyPasteHTML(initialData.content);
    }
  }, [initialData]);

  const handleFormSubmit = async (data: News) => {
    try {
      if (isEditing && initialData?.id) {
        await editNews(initialData.id, data); // Edit existing news
      } else {
        await addNews(data); // Add new news
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
