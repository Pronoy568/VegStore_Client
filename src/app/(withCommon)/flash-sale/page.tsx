import VegCard from "@/components/UI/HomePage/VegCard";
import { TProduct } from "@/types/global";
import { Box, Container, Typography } from "@mui/material";

const FlashSalePage = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/products`);
  const { data } = await res.json();

  const flashSale = data?.filter((item: TProduct) => item.sale);

  return (
    <Box pt={15} mb={10}>
      <Container>
        <Box>
          <Box>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Flash sale
            </Typography>
            <Typography component="p" fontWeight={600} mt={2}>
              Show 1-{data?.length} of {flashSale?.length} item(s)
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
          </Box>
        </Box>
        <Box mt={5}>
          <div className="grid md:grid-cols-4 gap-10 ">
            {flashSale?.map((product: TProduct) => (
              <VegCard key={product._id} product={product} />
            ))}
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default FlashSalePage;
