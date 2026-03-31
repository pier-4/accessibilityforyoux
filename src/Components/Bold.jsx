// Components/Bold.jsx
export const Bold = ({ children, className = "" }) => (
  <span className={`font-[550]  dark:font-semibold ${className}`}>
    {children}
  </span>
);
