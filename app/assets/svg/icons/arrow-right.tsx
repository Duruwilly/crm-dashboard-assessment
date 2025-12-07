const ArrowRight = (props: IconType) => (
  <svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12L10 8L6 4"
      stroke={props.color || "#9197B3"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowRight;
