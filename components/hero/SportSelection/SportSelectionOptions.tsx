import AnimatedSportButton from '@/components/hero/SportSelection/AnimatedSportButton';

const SportSelectionOptions = () => {
  return (
    <div className="
      w-[320px] 
      sm:w-[530px] 
      md:w-[600px] 
      flex-shrink-0 
      p-[20px] sm:p-[28px] md:p-[36px] 
      flex flex-col items-center 
      mt-[16px]
    ">
      {/* Title */}
      <p className="
        text-[#101828] font-poppins 
        text-[16px] sm:text-[18px] md:text-[20px] 
        leading-[24px] sm:leading-[28px] md:leading-[32px] 
        tracking-[-0.06px] 
        font-semibold 
        text-center
      ">
        Choose Your Sport:
      </p>

      {/* Buttons */}
      <div className="
        mt-[16px] sm:mt-[20px] md:mt-[24px] 
        flex flex-col sm:flex-row 
        gap-4 sm:gap-6
      ">
        {/* Football Button */}
        <AnimatedSportButton
          sport="Football"
          iconSrc="/icons/common/football__icon__white.svg"
          buttonClassName="
            flex items-center 
            gap-[12px] sm:gap-[16px] 
            w-full 
            px-[8px] py-[8px] pr-[8px] 
            bg-[#1EBB67] text-white rounded-[60px] 
            border border-[#1CB061] shadow-md transition 
            hover:bg-[#4FE394] 
            focus:bg-[#1EBB67] focus:border-[#D9FDE0] focus:ring-6 focus:ring-[#D9FDE0] outline-none
          "
        />

        {/* Basketball Button */}
        <AnimatedSportButton
          sport="Basketball"
          iconSrc="/icons/common/basketball__icon__white.svg"
          buttonClassName="
            flex items-center 
            gap-[12px] sm:gap-[16px] 
            w-full sm:w-[186px] 
            px-[8px] py-[8px] pr-[8px] 
            bg-[#F4501E] text-white rounded-[60px] 
            border border-[#C33509] shadow-md transition 
            hover:bg-[#F88D6D] 
            focus:bg-[#F4501E] focus:border-[#FDD9CE] focus:ring-6 focus:ring-[#FDD9CE] outline-none
          "
        />
      </div>
    </div>
  );
};

export default SportSelectionOptions;