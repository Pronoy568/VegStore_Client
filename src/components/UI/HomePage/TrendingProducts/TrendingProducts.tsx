import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { TProduct } from "@/types/global";
import Link from "next/link";
import VegCard from "../VegCard";

const TrendingProducts = async () => {
  const res = await fetch(
    `https://veg-store-server.vercel.app/api/v1/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data } = await res.json();

  const trendingProducts = data.sort(
    (a: TProduct, b: TProduct) => b.rating - a.rating
  );

  return (
    <Box my={20}>
      <Container>
        <Box>
          <Stack
            direction={{
              md: "row",
            }}
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" component="h1" fontWeight={600}>
                Trending products
              </Typography>
              <Typography
                component="p"
                width={{
                  md: "50%",
                }}
                mt={2}
              >
                Vegetables are a diverse category of vegetables that grow
                underground and are known for their nutrient-rich qualities.
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 2,
                }}
                component={Link}
                href="/products"
              >
                See All <ArrowCircleRightOutlinedIcon />
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box mt={5}>
          <div className="grid md:grid-cols-4 gap-10 ">
            {trendingProducts?.slice(0, 8)?.map((product: TProduct) => (
              <VegCard key={product._id} product={product} />
            ))}
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingProducts;
