import Image from "next/image";
import houses from "../../../assets/images/img3.jpg";
import Button from "../../ui/button";
export const Philosophy = () => {
  return (
    <section className="bg-teal-mine space-y-6 rounded-2xl px-4 py-16 md:px-10 md:py-24 lg:space-y-16 xl:space-y-32">
      <div className="space-y-6">
        <h2 className="font-body font-bold text-white">Our Philosophy</h2>
        <h3 className="font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl">
          We specialize in creating beautiful and functional spaces.
        </h3>
        <Button text="Learn more about us" />
      </div>

      {/* Grid Section */}
      <div className="grid-flow-col grid-cols-3 grid-rows-3 divide-gray-500 lg:grid lg:gap-x-6 lg:divide-x-1">
        <div className="space-y-6">
          <h3 className="font-body font-bold text-white">Who We Serve</h3>
          <p className="font-body text-white">
            We work with a diverse range of clients, including homeowners,
            developers, and businesses. Our team is dedicated to understanding
            your unique needs and creating spaces that reflect your vision.
          </p>
        </div>

        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>

        <div className="col-start-2 row-start-2 space-y-6">
          <h3 className="font-body font-bold text-white">
            Investment Philosophy
          </h3>
          <p className="font-body text-white">
            We believe that investing in your home is one of the most important
            decisions you can make. That's why we take a thoughtful and
            strategic approach to every project, ensuring that your investment
            pays off in the long run.
          </p>
        </div>

        <div className="col-start-3 row-start-3 space-y-6">
          <h3 className="font-body font-bold text-white">Our Process</h3>
          <p className="font-body text-white">
            Our process is designed to be collaborative and transparent. We work
            closely with you every step of the way, from initial consultation to
            final installation, ensuring that your vision is realized.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src={houses}
          alt="Collection of interior design projects"
          className="max-h-[100vh] w-full object-cover"
        />
      </div>

      {/* Stats Section */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="top-24 h-fit space-y-8 lg:sticky">
          <h3 className="font-display text-3xl text-white md:text-6xl lg:max-w-2xl">
            Over 10 years of consistent returns
          </h3>
          <p className="font-body text-white lg:max-w-xl">
            We are passionate about creating spaces that inspire and uplift. Our
            team of experienced designers and architects work closely with you
            to understand your vision and bring it to life. Whether you're
            looking to renovate your home, design a new space, or create a
            unique commercial environment, we are here to help.
          </p>
        </div>
        <div className="space-y-6 divide-y-1 divide-gray-500">
          {[
            { stat: "65.8%", label: "Client Satisfaction Rate" },
            { stat: "68%", label: "Project Level IPR" },
            { stat: "655", label: "Completed Projects" },
          ].map((item, index) => (
            <div key={index} className="space-y-6 py-6">
              <h3 className="font-display text-4xl text-white md:text-7xl">
                {item.stat}
              </h3>
              <p className="font-body text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
