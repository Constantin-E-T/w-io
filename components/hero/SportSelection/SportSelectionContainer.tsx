const SportSelectionContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <div
        className={`
          mt-[-30px] sm:mt-6 ${className}
          w-[381px] h-[494px] 
          sm:w-[610px] sm:h-[510px] 
          md:w-[758px] md:h-[508px] 
          flex-shrink-0 rounded-[15px] 
          border border-white/34 
          bg-white/25 backdrop-blur-[6.3px] 
          shadow-lg p-[30px] sm:p-[40px] md:p-[50px]
          flex flex-col items-center 
          ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export default SportSelectionContainer;