import Image from "next/image";

// Type definitions for the SportButton props
type SportButtonProps = {
  sport: string;
  iconSrc: string;
  buttonClassName: string;
};

// Reusable SportButton component
const SportButton = ({ 
  sport, 
  iconSrc, 
  buttonClassName 
}: SportButtonProps) => {
  return (
    <button className={buttonClassName}>
      <Image src={iconSrc} alt={sport} width={38} height={38} />
      <span className="font-poppins font-semibold text-[18px] leading-[28px] text-white">{sport}</span>
    </button>
  );
};

const SportSelectionOptions = () => {
  return (
    <div className="w-[600px] flex-shrink-0 p-[36px] flex flex-col items-center mt-[16px]">
      {/* Title */}
      <p className="text-[#101828] font-poppins font-semibold text-[20px] leading-[32px] tracking-[-0.06px] text-center">
        Choose Your Sport:
      </p>

      {/* Buttons */}
      <div className="mt-[24px] flex gap-6">
        {/* Football Button */}
        <SportButton 
          sport="Football"
          iconSrc="/icons/common/football__icon__white.svg"
          buttonClassName="flex items-center gap-[16px] w-[186px] px-[8px] py-[8px] pr-[8px] bg-[#1EBB67] text-white rounded-[60px] border border-[#1CB061] shadow-md transition hover:bg-[#4FE394] focus:bg-[#1EBB67] focus:border-[#D9FDE0] focus:ring-6 focus:ring-[#D9FDE0] outline-none"
        />

        {/* Basketball Button */}
        <SportButton 
          sport="Basketball"
          iconSrc="/icons/common/basketball__icon__white.svg"
          buttonClassName="flex items-center gap-[16px] w-[186px] px-[8px] py-[8px] pr-[8px] bg-[#F4501E] text-white rounded-[60px] border border-[#C33509] shadow-md transition hover:bg-[#F88D6D] focus:bg-[#F4501E] focus:border-[#FDD9CE] focus:ring-6 focus:ring-[#FDD9CE] outline-none"
        />
      </div>
    </div>
  );
};

export default SportSelectionOptions;