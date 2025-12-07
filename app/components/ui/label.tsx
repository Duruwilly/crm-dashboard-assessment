const Label = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-row items-center mb-2">
      <p className="text-sm font-medium text-[#02033a]">{label}</p>
    </div>
  );
};

export default Label;
