const SportSelectionContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <div
        className={`w-[758px] h-[508px] flex-shrink-0 rounded-[15px] border border-white/34 bg-white/25 backdrop-blur-[6.3px] shadow-lg p-[50px] flex flex-col items-center ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export default SportSelectionContainer;
  