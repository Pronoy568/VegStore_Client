import VegCard from "@/components/UI/HomePage/VegCard";
import { TProduct } from "@/types/global";
import { Box, Checkbox, Container, Stack, Typography } from "@mui/material";

const ProductsPage = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/products`);
  const { data } = await res.json();
  return (
    <Box pt={15} mb={10}>
      <Container>
        <Stack
          direction={{
            md: "row",
          }}
          gap={{
            md: 5,
          }}
        >
          <Box
            sx={{
              width: {
                md: 300,
              },
            }}
          >
            <Box
              sx={{
                border: "2px solid gray",
                padding: "40px 20px",
                borderRadius: 2,
              }}
            >
              <Typography
                component="p"
                fontSize={25}
                borderLeft="5px solid black"
                padding={"0 10px"}
              >
                Price range
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>৳ 20.00 - ৳ 50.00</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>৳ 60.00 - ৳ 90.00</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>৳ 100.00 - ৳ 130.00</Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                border: "2px solid gray",
                padding: "40px 20px",
                borderRadius: 2,
                mt: 3,
              }}
            >
              <Typography
                component="p"
                fontSize={25}
                borderLeft="5px solid black"
                padding={"0 10px"}
              >
                Ratings
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>1 star</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>2 star</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>3 star</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>4 star</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox />
                <Typography>5 star</Typography>
              </Stack>
            </Box>
          </Box>

          <Box
            mt={{
              xs: 4,
              md: 0,
            }}
          >
            <Typography variant="h4" component="h1" fontWeight={600}>
              Our Collection Of Products
            </Typography>
            <Typography component="p" fontWeight={600} mt={2}>
              Show 1-{data?.length} of {data?.length} item(s)
            </Typography>
            <Typography
              component="p"
              width={{
                md: "70%",
              }}
            >
              For a limited time only, we are offering unbeatable discounts on
              select items at Veggie Delight!
            </Typography>
            <Box mt={3}>
              <div className="grid md:grid-cols-3 gap-5">
                {data?.map((product: TProduct) => (
                  <VegCard key={product._id} product={product} />
                ))}
              </div>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsPage;
