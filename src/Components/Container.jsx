// components/layout/Container.tsx
export default function Container({ children, className = "" }) {
  //remove transition-color and transition-300, (swap from light to dark mode)
  return (
    <main
      className={`
      min-h-screen w-full 
      bg-main-bg  
      text-primary-foreground 
      transition-no-background
      px-6 py-12 md:px-12 
      ${className}
    `}
    >
      <div className="max-w-7xl lg:px-6 mx-auto">{children}</div>
    </main>
  );
}
