// src/Pages/IndividualBlogPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import BlogPosts from '../Components/BlogPosts'; // This should be an array of all blog posts

const IndividualBlogPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blogPost = BlogPosts.find(post => post.id.toString() === blogId);

  if (!blogPost) {
    return <Typography>Blog post not found.</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">{blogPost.title}</Typography>
      {/* Render other blog post details */}
      <Typography variant="body1">{blogPost.content}</Typography>
      {/* Add more content as needed */}
    </Container>
  );
};

export default IndividualBlogPage;
