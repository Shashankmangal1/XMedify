import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../../assets/lesley.png";
import img2 from "../../../assets/ahmad.png";
import img3 from "../../../assets/heena.png";
import img4 from "../../../assets/ankur.png";
import img5 from "../../../assets/ahmad-stevens.png";
import SpecialistCard from "./SpecialistCard";

export default function Specialists() {
  const specialist_data = [
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopedic" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];

  return (
    <Box py={{ xs: 6, md: 10 }} bgcolor="#fff">
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          textAlign="center"
          mb={{ xs: 4, md: 6 }}
          fontSize={{ xs: 26, md: 36 }}
          fontWeight={700}
          color="#1B3C74"
        >
          Our Medical Specialists
        </Typography>

        <Swiper
          loop={true}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {specialist_data.map((doc, index) => (
            <SwiperSlide key={index}>
              <SpecialistCard
                img={doc.img}
                title={doc.title}
                designation={doc.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
