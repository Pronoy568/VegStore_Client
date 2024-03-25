import { Box, Container, Stack, Typography } from "@mui/material";
import broccoli1 from "@/assets/broccoli1.jpg";
import carrot1 from "@/assets/carrot1.jpg";
import tomato6 from "@/assets/tomato6.jpg";
import pepper6 from "@/assets/pepper6.jpg";
import Image from "next/image";

const Categories = () => {
  return (
    <Box my={20}>
      <Container>
        <Stack direction={"column"}>
          <Box textAlign={"center"}>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Top Categories
            </Typography>
            <Typography
              component="p"
              width={{
                md: 700,
              }}
              margin={"0 auto"}
            >
              It is a cruciferous vegetable known for its dense clusters of
              green florets. It is high in fiber, vitamins, and antioxidants and
              can be steamed, roasted, stir-fried, or eaten raw.
            </Typography>
          </Box>
          <Box>
            <div className="md:grid grid-cols-12 grid-rows-2 grid-flow-col gap-8 mt-10 space-y-5 md:space-y-0">
              <div className=" h-[513px] rounded-2xl col-span-4 lg:col-span-4 row-span-2">
                <Image
                  src={pepper6}
                  height={513}
                  width={300}
                  alt="mensPolo"
                  className="object-cover h-full w-full rounded-lg"
                />
                <Typography
                  component="p"
                  sx={{
                    mt: -6,
                    ml: 2,
                    fontSize: 30,
                  }}
                >
                  Pepper
                </Typography>
              </div>

              <div className=" h-[240px] rounded-2xl col-span-4 lg:col-span-4 row-span-1">
                <Image
                  src={broccoli1}
                  height={513}
                  width={300}
                  alt="mensPolo"
                  className="object-cover h-full w-full rounded-lg"
                />
                <Typography
                  component="p"
                  sx={{
                    mt: -6,
                    ml: 2,
                    fontSize: 30,
                  }}
                >
                  Broccoli
                </Typography>
              </div>
              <div className=" h-[240px] rounded-2xl col-span-4 lg:col-span-4 row-span-1">
                <Image
                  src={carrot1}
                  height={513}
                  width={300}
                  alt="mensPolo"
                  className="object-cover h-full w-full rounded-lg"
                />
                <Typography
                  component="p"
                  sx={{
                    mt: -6,
                    ml: 2,
                    fontSize: 30,
                    color: "gray",
                  }}
                >
                  Carrot
                </Typography>
              </div>

              <div className=" h-[513px] rounded-2xl col-span-4 lg:col-span-4 row-span-2">
                <Image
                  src={tomato6}
                  height={513}
                  width={300}
                  alt="mens"
                  className="object-cover h-full w-full rounded-lg"
                />
                <Typography
                  component="p"
                  sx={{
                    mt: -6,
                    ml: 2,
                    fontSize: 30,
                  }}
                >
                  Tomato
                </Typography>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Categories;
