import type { Route } from "./+types";
import ProductTable from "./components/table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product" },
    { name: "description", content: "List of all products." },
  ];
}

const Products = () => {
  return (
    <div>
      <ProductTable />
    </div>
  );
};

export default Products;
