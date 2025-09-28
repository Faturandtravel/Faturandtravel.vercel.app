const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-white mt-[-5rem]">
      {/* Bagian Teks */}
      <div className="w-full text-base">

        {/* Kontainer Flexbox untuk membagi teks menjadi 2 kolom */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Kolom Kiri */}
          <div className="md:w-1/2">
            <p className="mb-4 text-lg text-justify">
              <span className="text-2xl font-bold">My journey!</span> began with a deep curiosity for how technology works. This curiosity led me to dive deep into the world of web development, where I weave logic and creativity to build everything from static websites to dynamic applications.
            </p>
          </div>
          
          {/* Kolom Kanan */}
          <div className="md:w-1/2">
            <p className="mb-4 text-lg text-justify">
              Now, that same curiosity has taken me further, leading me to experiment with the Internet of Things (IoT) and its limitless potential. I live by the principle that learning is an endless adventure. Interested in starting a new project adventure together? <span className="text-2xl font-bold">Let's connect!</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;