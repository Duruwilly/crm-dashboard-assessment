import { Loader } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-hscreen">
      <Loader className="h-6 w-6 animate-spin text-brand-primary" />
    </div>
  );
};

export default Spinner;
