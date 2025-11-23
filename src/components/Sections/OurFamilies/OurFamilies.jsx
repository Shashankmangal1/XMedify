import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../../assets/our-families-banner.png";

export default function OurFamilies() {
  return (
    <Box
      py={{ xs: 8, md: 12 }}
      sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          spacing={{ xs: 4, md: 10 }}
        >
          {/* Left Text */}
          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              fontSize={{ xs: 14, md: 16 }}
              mb={1}
            >
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>

            <Typography
              variant="h2"
              fontSize={{ xs: 28, md: 36 }}
              fontWeight={700}
              mb={2}
              color="#1B3C74"
            >
              Our Families
            </Typography>

            <Typography
              color="#77829D"
              fontSize={{ xs: 14, md: 16 }}
              lineHeight={1.8}
              maxWidth={520}
            >
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist,
              we can provide referrals or advice about the type of practitioner
              you require. We treat all enquiries sensitively and in the
              strictest confidence.
            </Typography>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
