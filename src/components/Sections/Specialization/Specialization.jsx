import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from "../../IconCard/IconCard";
import icon1 from "../../../assets/Drugstore.png";
import icon2 from "../../../assets/primary-care.png";
import icon3 from "../../../assets/cardiology.png";
import icon4 from "../../../assets/mri.png";
import icon5 from "../../../assets/blood-test.png";
import icon6 from "../../../assets/piscologist.png";
import icon7 from "../../../assets/X-Ray.png";

export default function Specialization() {
  const data = [
    { icon: icon1, title: "Dentistry" },
    { icon: icon2, title: "Primary Care" },
    { icon: icon3, title: "Cardiology" },
    { icon: icon4, title: "MRI Resonance" },
    { icon: icon5, title: "Blood Test" },
    { icon: icon6, title: "Psychologist" },
    { icon: icon1, title: "Laboratory" },
    { icon: icon7, title: "X-Ray" },
  ];

  return (
    <Box
      py={{ xs: 6, md: 10 }}
      sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        {/* Section Title */}
        <Typography
          variant="h2"
          fontSize={{ xs: 26, md: 36 }}
          fontWeight={700}
          mb={{ xs: 4, md: 6 }}
          color="#1B3C74"
        >
          Find by specialisation
        </Typography>

        {/* Icon Grid */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          mb={{ xs: 4, md: 6 }}
          justifyContent="center"
        >
          {data.map((item) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={3}
              key={item.title}
              display="flex"
              justifyContent="center"
            >
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor="#ffffff"
                shadow
              />
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          View All
        </Button>
      </Container>
    </Box>
  );
}
