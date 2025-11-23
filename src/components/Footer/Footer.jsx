import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" py={8}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo + Social Icons */}
          <Grid item xs={12} md={3}>
            <Stack spacing={3}>
              <Box component="img" src={logo} height={36} />

              <Stack direction="row" spacing={2}>
                <Box component="img" src={fb} height={28} />
                <Box component="img" src={twitter} height={28} />
                <Box component="img" src={yt} height={28} />
                <Box component="img" src={pinterest} height={28} />
              </Stack>
            </Stack>
          </Grid>

          {/* Column 1 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Ophthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Support</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Terms & Conditions</FooterLink>
              <FooterLink>Help Center</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={6}
          textAlign="center"
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
