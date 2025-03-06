import AnimatedSportButton from '@/components/hero/SportSelection/AnimatedSportButton';
import { useSportTheme, SportType } from "@/lib/contexts/SportContext";

interface SportSelectionOptionsProps {
  onSportSelected?: () => void;
}


const SportSelectionOptions = ({ onSportSelected }: SportSelectionOptionsProps) => {

  const { changeSport } = useSportTheme();

  const handleSportSelection = (sport: SportType) => {
    changeSport(sport);
    if (onSportSelected) {
      onSportSelected();
    }
  };

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
        Choose Your Sport
      </p>

     {/* Buttons */}
     <div className="
      mt-4 sm:mt-5 md:mt-6
      flex flex-col sm:flex-row 
      gap-4 sm:gap-6
      items-center sm:items-start
    ">
      {/* Football Button - with extra right padding */}
      <AnimatedSportButton
        sport="Football"
        iconSrc="/icons/common/football__icon__white.svg"
        buttonClassName="
          flex items-center 
          gap-3 sm:gap-4
          w-auto
          pl-2 pr-6 py-2
          bg-green-500 text-white rounded-full
          border border-green-600 shadow-md transition 
          hover:bg-green-400
          outline-none
        "
        onClick={() => handleSportSelection("FOOTBALL")}
      />

      {/* Basketball Button - with extra right padding */}
      <AnimatedSportButton
        sport="Basketball"
        iconSrc="/icons/common/basketball__icon__white.svg"
        buttonClassName="
          flex items-center 
          gap-3 sm:gap-4
          w-auto
          pl-2 pr-6 py-2
          bg-orange-600 text-white rounded-full
          border border-orange-700 shadow-md transition 
          hover:bg-orange-400
          outline-none
        "
        onClick={() => handleSportSelection("BASKETBALL")}
      />
    </div>
    </div>
  );
};

export default SportSelectionOptions;