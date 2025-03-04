const SportSelectionText = () => {
    return (
      <>
        {/* First Row: SEEK・CHALLENGE・PLAY */}
        <p className="
          text-[#101828] font-poppins 
          text-[14px] font-medium tracking-[0.5px] leading-[22px]
          sm:text-[18px] sm:font-bold sm:tracking-[1.55px] sm:leading-[26px]
          uppercase
        ">
          SEEK・CHALLENGE・PLAY
        </p>
  
        {/* Second Row: "Your Pickup Game Starts Here" */}
        <h1 className="
          text-[#141548] font-poppins font-extrabold 
          text-[30px] leading-[36px] tracking-[-0.225px] w-[331px]
          sm:text-[48px] sm:leading-[58px] sm:tracking-[-0.024px] sm:w-auto
          text-center self-stretch mt-[24px]
        ">
          Your Pickup Game Starts Here
        </h1>
  
        {/* Third Row: "Everyone gets a Wallet, a Map, Chat and a PlayerProfile." */}
        <p className="
          text-[#101828] font-poppins font-semibold 
          text-[16px] leading-[26px] tracking-[-0.06px] w-[320px]
          sm:text-[20px] sm:leading-[32px] sm:w-[530px]
          text-center mt-[16px]
        ">
          Everyone gets a Wallet, a Map, Chat and a PlayerProfile.
        </p>
      </>
    );
  };
  
  export default SportSelectionText;