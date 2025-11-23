import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

export default function DownloadApp() {
  return (
    <Box
      py={{ xs: 8, md: 10 }}
      sx={{
        background: "linear-gradient(#E7F0FF, #E8F1FF)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* LEFT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={mobile}
              sx={{
                width: "100%",
                maxWidth: 420,        // 💯 Medify size
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>

          {/* RIGHT TEXT & FORM */}
          <Grid item xs={12} md={6}>
            <Box position="relative" mb={{ xs: 4, md: 0 }}>
              <Typography
                variant="h2"
                fontSize={{ xs: 28, md: 36 }}
                fontWeight={700}
                mb={2}
                color="#1B3C74"
              >
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify
                </Box>{" "}
                App
              </Typography>

              <Box
                component="img"
                src={arrow}
                sx={{
                  width: { xs: 26, md: 40 },
                  position: "absolute",
                  left: -20,
                  top: 40,
                }}
              />

              <SmsForm />

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                mt={3}
              >
                <Button
                  sx={{
                    bgcolor: "#222",
                    color: "#fff",
                    py: 1.4,
                    px: 3,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={playstore} height={22} />}
                  variant="contained"
                >
                  Google Play
                </Button>

                <Button
                  sx={{
                    bgcolor: "#222",
                    color: "#fff",
                    py: 1.4,
                    px: 3,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={apple} height={22} />}
                  variant="contained"
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
