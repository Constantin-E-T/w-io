const SportSelectionBackground = () => {
  return (
    <div className="fixed inset-0 w-full min-h-screen overflow-hidden">
      {/* Background Image with Correct Aspect Ratio & Full Width */}
      <div className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover sm:bg-[url('/backgroundImages/cloudsSM.jpg')] lg:bg-[url('/backgroundImages/cloudsXL.jpg')] bg-[url('/backgroundImages/cloudsXS.jpg')]"></div>
    </div>
  );
};

export default SportSelectionBackground;
