const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center p-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-left">
            <div className="flex justify-end md:justify-start mb-4">
              <p className="text-base sm:text-lg">Bogor, Indonesia</p>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 md:mb-8">
              Faturahman
              <br />
              / Saputra
            </h1>
            <div className="flex justify-start">
              <p className="text-sm sm:text-base md:text-lg max-w-xs">
                interest in technology, especially programming and still learning!
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="./Foto.png"
              className="w-68 h-auto sm:w-84 sm:h-auto md:w-100 md:h-auto object-cover "
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;