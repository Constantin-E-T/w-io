const SportSelectionBackground = () => {
  return (
    <div className="fixed inset-0 w-full min-h-screen overflow-hidden">
      {/* Gradient Background (Shows First) */}
      <div className="absolute inset-0 -z-10" 
        style={{ background: "linear-gradient(138deg, #D2D3DA 35.03%, #D8D8EE 94.63%)" }}>
      </div>
      
      {/* Image Background (Loads Over Gradient) */}
      <div className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover sm:bg-[url('/backgroundImages/cloudsSM.jpg')] lg:bg-[url('/backgroundImages/cloudsXL.jpg')] bg-[url('/backgroundImages/cloudsXS.jpg')]">
      </div>
    </div>
  );
};

export default SportSelectionBackground;