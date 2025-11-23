import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <Box py={{ xs: 6, md: 10 }} bgcolor="#fff">
      <Container maxWidth="xl">

        <Typography
          color="primary.main"
          fontWeight={600}
          textAlign="center"
          fontSize={14}
          mb={1}
        >
          Blog & News
        </Typography>

        <Typography
          textAlign="center"
          fontWeight={700}
          fontSize={{ xs: 24, md: 32 }}
          mb={6}
          color="#1B3C74"
        >
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
