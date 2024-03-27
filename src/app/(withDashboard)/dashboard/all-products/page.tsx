import DashboardTable from "@/components/UI/DashboardPage/AllProducts/Table";

const DashboardAllProductPage = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/products`);
  const { data } = await res.json();

  return (
    <div>
      <DashboardTable product={data} />
    </div>
  );
};

export default DashboardAllProductPage;
