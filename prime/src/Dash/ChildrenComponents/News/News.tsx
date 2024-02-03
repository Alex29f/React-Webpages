import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BasicModal from "../../Modal/BasicModal/BasicModal";
import NewsForm from "../../Form/NewsForm/NewsForm";
import { useApiContext } from "../../../Contexts/ApiContext";
import NewsTable from "../../Table/NewsTable";

// Update the structure of a news item
interface News {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
  date: string; // Changed to string
}

const News = () => {
  const [open, setOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const { getAllNews, news, deleteNews } = useApiContext();

  useEffect(() => {
    getAllNews();
  }, []);

  const handleOpen = (newsItem: News | null = null) => {
    setEditingNews(newsItem);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingNews(null);
    setOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box width="80%">
        <Box
          mb={5}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography alignSelf="start" variant="h2">
            Jaunumi
          </Typography>
          <Button onClick={() => handleOpen()} variant="contained">
            Pievienot Jaunumus
          </Button>
        </Box>
        {news?.length ? (
          <NewsTable
            data={news as News[]}
            onEdit={(item: News) => handleOpen(item)}
            onDelete={(item: News) => deleteNews(item.id)}
          />
        ) : (
          <Typography variant="h6">Nav Jaunumi</Typography>
        )}
      </Box>
      <BasicModal
        title={editingNews ? "Edit News" : "Add News"}
        open={open}
        handleOpen={() => handleOpen()}
        handleClose={handleClose}
      >
        <NewsForm
          isEditing={!!editingNews}
          initialData={editingNews}
        />
      </BasicModal>
    </Box>
  );
};

export default News;
