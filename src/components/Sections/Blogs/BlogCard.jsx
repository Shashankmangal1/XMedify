import { Box, Stack, Typography } from "@mui/material";
import featured from "../../../assets/blog.png";
import person from "../../../assets/person.png";

export default function BlogCard() {
  return (
    <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2} overflow="hidden">
      <Box
        component="img"
        src={featured}
        width="100%"
        height={{ xs: 180, sm: 200, md: 220 }}
        sx={{ objectFit: "cover" }}
      />

      <Box p={2}>
        <Typography color="#77829D" fontWeight={500} mb={1} fontSize={{ xs: 12, md: 14 }}>
          Medical | March 31, 2022
        </Typography>

        <Typography
          component="h3"
          color="#1B3C74"
          fontSize={{ xs: 14, md: 18 }}
          fontWeight={600}
          lineHeight={1.3}
          mb={1.5}
        >
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Box component="img" src={person} height={32} width={32} borderRadius="50%" />
          <Typography color="#1B3C74" fontSize={{ xs: 12, md: 14 }}>
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
