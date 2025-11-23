import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

export default function PatientCaring() {
  return (
    <Box
      py={{ xs: 8, md: 12 }}
      sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              sx={{
                width: "100%",
                maxWidth: 520,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              fontSize={{ xs: 14, md: 16 }}
              mb={1}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>

            <Typography
              fontWeight={700}
              fontSize={{ xs: 28, md: 36 }}
              mb={1}
              color="#1B3C74"
            >
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>

            <Typography
              color="#77829D"
              fontSize={{ xs: 14, md: 16 }}
              lineHeight={1.8}
              mb={3}
              maxWidth={500}
            >
              Our goal is to deliver quality of care in a courteous,
              respectful, and compassionate manner. We hope you will allow us
              to care for you and strive to be the first and best choice for
              healthcare.
            </Typography>

            {/* Bullets */}
            <List>
              {[
                "Stay Updated About Your Health",
                "Check Your Results Online",
                "Manage Your Appointments",
              ].map((text, i) => (
                <ListItem key={i} disableGutters sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box
                      component="img"
                      src={tick}
                      height={22}
                      width={22}
                      sx={{ objectFit: "contain" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: { xs: 14, md: 18 },
                      color: "#1B3C74",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
