import { Grid } from '@mui/material';
import React from "react";

interface BlogSectionProps {
    children: React.ReactNode[]|React.ReactNode
    backgroundColor?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ children, backgroundColor }) => (
    <Grid container spacing={2} style={{ padding: '16px', backgroundColor:backgroundColor??'transparent'}}>
        {children}
    </Grid>
);

export default BlogSection;
