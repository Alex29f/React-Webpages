import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Modal,
  Box,
  Grid, // Import Grid
} from "@mui/material";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import BlogPost1 from "../BlogPosts/Blog1";
import BlogPost2 from "../BlogPosts/Blog2";
import BlogPost3 from "../BlogPosts/Blog3";


interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  BlogPost1,
  BlogPost2,
  BlogPost3
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxWidth: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  maxHeight: "90vh",
};

const Blogs: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
 // Function to handle navigation to blog detail page
 const handleNavigate = (blogId: number) => {
  navigate(`/blogs/${blogId}`); // Navigate to blog post detail page
};
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const handleOpen = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      {/* ... other component code */}
      <Grid container spacing={2}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id} onClick={() => handleNavigate(post.id)}>
            <Card sx={{ 
              height: "100%", 
              mb: 2,
              ":hover": {
                borderColor: "purple",
                borderWidth: 2,
                borderStyle: "solid",
                boxShadow: "0 3px 5px 2px rgba(128, 0, 128, .3)",
              },
            }}>
              <CardMedia
                component="img"
                height="140"
                image={post.imageUrl}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* No need for Modal if you're navigating away */}
    </Container>
  );
};

export default Blogs;