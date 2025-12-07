import type { Route } from "./+types";
import Stats from "./components/stats";
import CustomerTable from "./components/table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Users" },
    { name: "description", content: "List of all users." },
  ];
}

const Customers = () => {
  return (
    <div className="flex flex-col gap-10">
      <Stats />
      <CustomerTable />
    </div>
  );
};

export default Customers;
