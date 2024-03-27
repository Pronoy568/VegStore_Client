import { TProduct } from "@/types/global";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

type TProps = {
  params: {
    productId: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://veg-store-server.vercel.app/api/v1/products"
  );
  const { data } = await res.json();
  return data.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};

const SingleProductPage = async ({ params }: TProps) => {
  const res = await fetch(
    `https://veg-store-server.vercel.app/api/v1/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const { data } = await res.json();

  const { image, price, description, rating, title, salePrice, sale } = data;

  return (
    <Box my={15}>
      <Container>
        <Stack
          direction={{
            md: "row",
          }}
          gap={5}
        >
          <Box>
            <Image src={image} width={500} height={500} alt="product image" />
          </Box>
          <Box
            width={{
              md: 500,
            }}
          >
            <Stack>
              <Box borderBottom={"2px solid lightgray"} pb={5}>
                <Box>
                  <Typography component="h2" fontSize={30} fontWeight={600}>
                    {title}
                  </Typography>
                </Box>
                <Stack direction={"row"} gap={1}>
                  <Box borderRight={"2px solid lightgray"} pr={1}>
                    {sale ? (
                      <Stack direction={"row"} gap={1}>
                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                          fontSize={25}
                          component={"p"}
                        >
                          ৳ {price}{" "}
                        </Typography>
                        <Typography component={"p"} fontSize={25}>
                          ৳ {salePrice}{" "}
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography component={"p"} fontSize={25}>
                        ৳ {price}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <Rating name="simple-controlled" value={rating} />
                  </Box>
                </Stack>
              </Box>

              <Typography component={"p"} mt={2}>
                {description}
              </Typography>
              <Box mt={2}>
                <Typography component={"p"} mt={2}>
                  <LocalShippingIcon /> Delivery inside dhaka ৳ 45 / outside
                  dhaka ৳ 120
                </Typography>
                <Typography component={"p"} mt={2}>
                  <HomeRepairServiceIcon /> Delivers in: 3-7 Working Days
                  Shipping & Return
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack>
          <Box bgcolor={"ghostwhite"} mt={10} p={2}>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Description
            </Typography>
            <Typography component={"p"} mt={2}>
              {description}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleProductPage;
