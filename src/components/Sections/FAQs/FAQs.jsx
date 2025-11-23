import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box py={{ xs: 8, md: 12 }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Typography
          color="primary.main"
          fontWeight={600}
          textAlign="center"
          fontSize={{ xs: 14, md: 16 }}
          mb={1}
        >
          Get Your Answer
        </Typography>

        <Typography
          textAlign="center"
          fontWeight={700}
          variant="h2"
          fontSize={{ xs: 28, md: 36 }}
          mb={{ xs: 5, md: 8 }}
          color="#1B3C74"
        >
          Frequently Asked Questions
        </Typography>

        <Grid container alignItems="center" spacing={{ xs: 4, md: 8 }}>
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={faqBanner}
              sx={{
                width: "100%",
                maxWidth: 520,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>

          {/* Right Accordion */}
          <Grid item xs={12} md={6}>
            <Box maxWidth={520} mx="auto">
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
