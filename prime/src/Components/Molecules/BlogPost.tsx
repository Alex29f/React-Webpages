import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

interface BlogPostProps {
    title: string;
    excerpt: string;
    imageUrl: string;
    onClick: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, imageUrl, onClick }) => (
    <Grid item xs={12} sm={6} md={3}>
        <Card>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {excerpt}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
);

export default BlogPost;
