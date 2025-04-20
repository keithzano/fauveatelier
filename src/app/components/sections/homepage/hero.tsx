export const Hero = () => {
  return (
    <section className="relative -mt-16 h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col justify-between px-4 py-28 text-white lg:px-10 2xl:py-32">
        <h1 className="font-display text-4xl text-white sm:text-6xl md:text-7xl lg:max-w-7xl lg:text-8xl">
          Fauve Atelier is a full-house interior service firm
        </h1>
        <p className="font-body text-lg md:max-w-xl md:text-xl">
          As Nate Berkus once said, "Your home should tell a story of who you
          are and be a collection of what you love." This philosophy is at the
          heart of what we do...
        </p>
      </div>
    </section>
  );
};
