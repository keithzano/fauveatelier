import house from "../../../assets/images/img1.jpg";
import Image from "next/image";

export const About = () => {
  const section = [
    {
      title: "Who We Serve",
      desc: "We work with a diverse range of clients, including homeowners, developers, and businesses...",
    },
    {
      title: "Investment Philosophy",
      desc: "We believe that investing in your home is one of the most important decisions you can make...",
    },
    {
      title: "Our Process",
      desc: "Our process is designed to be collaborative and transparent. We work closely with you...",
    },
  ];
  return (
    <article className="space-y-6 px-4 py-16 md:px-10 md:py-24 lg:space-y-16 xl:space-y-32">
      <section className="space-y-6">
        <h2 className="font-body font-bold">About Us</h2>
        <h3 className="font-display text-4xl text-black sm:text-6xl md:text-7xl lg:leading-normal">
          We are a full-house architectural firm based in South Africa. We
          specialize in creating beautiful and functional spaces...
        </h3>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {section.map((item, i) => (
          <div key={i} className="divide-teal-mine space-y-6 divide-y-1">
            <h3 className="font-body pb-6 font-bold">{item.title}</h3>
            <p className="font-body">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 max-h-[70vh] overflow-hidden rounded-2xl">
          <Image
            src={house}
            alt="Interior design project showcase"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div className="space-y-6 self-center">
          <p className="font-body">
            We are passionate about creating spaces that inspire and uplift. Our
            team of experienced designers and architects work closely with you
            to understand your vision and bring it to life. Whether you're
            looking to renovate your home, design a new space, or create a
            unique commercial environment, we are here to help.
          </p>
          <button className="hover:border-teal-mine rounded-md border border-gray-500 px-4 py-3 transition-colors">
            Learn more about us
          </button>
        </div>
      </section>
    </article>
  );
};
