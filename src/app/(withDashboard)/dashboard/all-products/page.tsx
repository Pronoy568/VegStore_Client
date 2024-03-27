import DashboardTable from "@/components/UI/DashboardPage/AllProducts/Table";

const DashboardAllProductPage = async () => {
  const res = await fetch(
    `https://veg-store-server.vercel.app/api/v1/products`
  );
  const { data } = await res.json();

  return (
    <div>
      <DashboardTable product={data} />
    </div>
  );
};

export default DashboardAllProductPage;
