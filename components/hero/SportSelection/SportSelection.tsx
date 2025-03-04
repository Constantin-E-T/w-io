import SportSelectionBackground from "./SportSelectionBackground";
import SportSelectionContainer from "./SportSelectionContainer";
import SportSelectionOptions from "./SportSelectionOptions"; 

const SportSelection = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <SportSelectionBackground />

            <SportSelectionContainer className="mt-[28.1px]">
                {/* First Row: SEEK・CHALLENGE・PLAY */}
                <p className="text-[#101828] font-poppins font-bold text-[18px] uppercase tracking-[1.55px] leading-[26px]">
                    SEEK・CHALLENGE・PLAY
                </p>

                {/* Second Row: "Your Pickup Game Starts Here" */}
                <h1 className="text-[#141548] font-poppins font-extrabold text-[48px] leading-[58px] tracking-[-0.024px] text-center self-stretch mt-[24px]">
                    Your Pickup Game Starts Here
                </h1>

                {/* Third Row: "Everyone gets a Wallet, a Map, Chat and a PlayerProfile." */}
                <p className="text-[#101828] font-poppins font-semibold text-[20px] leading-[32px] tracking-[-0.06px] text-center w-[530px] mt-[16px]">
                    Everyone gets a Wallet, a Map, Chat and a PlayerProfile.
                </p>
                {/* New Component for the Sports Selection */}
                <SportSelectionOptions />
            </SportSelectionContainer>

        </div>
    );
};

export default SportSelection;
