
import TestImage from '../Assets/BlogIm/Blog/test.png';
import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import BlogPosts from "../Components/BlogPosts"; // Assuming this is an array of blog posts

const AllBlogsPage = () => {
  return (
    <>
      {/* Removed Container to allow Box and Grid to stretch full width */}
      <Box
        sx={{
          backgroundImage: `url(${TestImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          p: 6,
          mb: 4,
          width: '100vw', // Stretch to the full viewport width
        }}
      >
        <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'common.white' }}>
          Our Latest Blogs
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ px: 3 }}> {/* Add some padding to the sides */}
        {BlogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ height: "100%", mb: 2, transition: "0.3s", ':hover': { boxShadow: 6 } }}>
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
    </>
  );
};

export default AllBlogsPage;
