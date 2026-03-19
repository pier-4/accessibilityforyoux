// components/layout/Container.tsx
export default function Container({ children, className = "" }) {
  return (
    <main
      className={`
      min-h-screen w-full 
      bg-main-bg  
      text-primary-foreground 
      px-6 py-12 md:px-12 
      transition-colors duration-300
      ${className}
    `}
    >
      <div className="max-w-7xl lg:px-6 mx-auto">{children}</div>
    </main>
  );
}
