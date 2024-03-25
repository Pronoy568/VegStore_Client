import { Box, Container, Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import brand1 from "@/assets/footer/brand1.jpg";
import brand2 from "@/assets/footer/brand2.jpg";
import brand3 from "@/assets/footer/brand3.jpg";
import brand4 from "@/assets/footer/brand4.jpg";
import brand5 from "@/assets/footer/brand5.jpg";
import brand6 from "@/assets/footer/brand6.jpg";
import brand7 from "@/assets/footer/brand7.jpg";
import brand8 from "@/assets/footer/brand8.jpg";
import brand9 from "@/assets/footer/brand9.jpg";
import brand10 from "@/assets/footer/brand10.jpg";

const Footer = () => {
  return (
    <Box>
      <Box bgcolor={"lightgray"} py={2}>
        <Marquee direction="right">
          <Image
            src={brand1}
            height={60}
            width={60}
            alt="brand"
            className="mx-14"
          />
          <Image
            src={brand2}
            height={60}
            width={60}
            alt="brand"
            className="mx-14"
          />
          <Image
            src={brand3}
            height={60}
            width={60}
            alt="brand"
            className="mx-14"
          />
          <Image
            src={brand4}
            height={60}
            width={60}
            alt="brand"
            className="mx-14"
          />
          <Image
            src={brand5}
            height={60}
            width={60}
            alt="brand"
            className="mx-14"
          />
          <Image
            src={brand6}
            height={60}
            width={60}
            alt="brand"
            className="mx-14"
          />
          <Image
            src={brand7}
            height={60}
            width={60}
            alt="brand7"
            className="mx-14"
          />
          <Image
            src={brand8}
            height={60}
            width={60}
            alt="brand8"
            className="mx-14"
          />
          <Image
            src={brand9}
            height={60}
            width={60}
            alt="brand9"
            className="mx-14"
          />
          <Image
            src={brand10}
            height={60}
            width={60}
            alt="brand10"
            className="mx-14"
          />
        </Marquee>
      </Box>
      <Box bgcolor={"secondary.main"}>
        <Container>
          <Stack
            py={6}
            direction={{ md: "row" }}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography component="p" fontWeight={600} color={"white"} py={4}>
                Products
              </Typography>

              <div className="space-y-4">
                <Typography component="p" color={"lightgray"}>
                  Healthy veg
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Refresh item
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Cheap
                </Typography>
              </div>
            </Box>

            <Box>
              <Typography component="p" fontWeight={600} color={"white"} py={4}>
                Categories
              </Typography>

              <div className="space-y-4">
                <Typography component="p" color={"lightgray"}>
                  Carrots
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Tomato
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Spinach
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Broccoli
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Potato
                </Typography>
              </div>
            </Box>

            <Box>
              <Typography component="p" fontWeight={600} color={"white"} py={4}>
                About Us
              </Typography>

              <div className="space-y-4">
                <Typography component="p" color={"lightgray"}>
                  Our Story
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Community build
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Sustainability Food
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Quality Guarantee
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Product Involvement
                </Typography>
              </div>
            </Box>

            <Box>
              <Typography component="p" fontWeight={600} color={"white"} py={4}>
                Contact Us
              </Typography>

              <div className="space-y-4">
                <Typography component="p" color={"lightgray"}>
                  Email
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Phone Number
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Contact Form
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Live Chat
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Visit Us (Address)
                </Typography>
              </div>
            </Box>

            <Box>
              <Typography component="p" fontWeight={600} color={"white"} py={4}>
                Customer Care
              </Typography>

              <div className="space-y-4">
                <Typography component="p" color={"lightgray"}>
                  Refresh Food
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Waste Returns
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Best Information
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  Health Care
                </Typography>
                <Typography component="p" color={"lightgray"}>
                  FAQs
                </Typography>
              </div>
            </Box>
          </Stack>
        </Container>
        <div className="border border-dashed border-gray-600"></div>
        <Typography
          component="p"
          textAlign={"center"}
          color={"lightgray"}
          py={2}
        >
          Copyright © 2024 Veg Store{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
