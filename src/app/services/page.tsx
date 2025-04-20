import Image from "next/image";
import house from "../assets/images/img3.jpg";
import house1 from "../assets/images/img4.jpg";
import house2 from "../assets/images/img5.jpg";
import house3 from "../assets/images/img2.jpg";
import house4 from "../assets/images/img1.jpg";
export default function Services() {
  const services = [
    {
      image: house,
      title: "Concept Design & Development",
      desc: "We specialize in creating unique and innovative design concepts that reflect your vision and style. Our team works closely with you to develop a comprehensive design plan that meets your needs and exceeds your expectations.",
    },
    {
      image: house1,
      title: "Floor Planning & Layout Design",
      desc: "Our team of experts will help you optimize your space with thoughtful floor planning and layout design. We consider factors such as flow, functionality, and aesthetics to create a harmonious environment.",
    },
    {
      image: house2,

      title: "2D Plans",
      desc: "We provide detailed 2D plans that outline the layout and design of your space. These plans serve as a blueprint for your project, ensuring that every detail is accounted for.",
    },
    {
      image: house3,
      title: "Furniture & Fixture Selection",
      desc: "We assist you in selecting the perfect furniture and fixtures to complement your design. Our team will curate a selection of items that align with your style and budget.",
    },
    {
      image: house4,
      title: "Finishes & Decor Curation",
      desc: "We help you choose the right finishes and decor elements to enhance your space. From paint colors to textiles, we ensure that every detail contributes to the overall design vision.",
    },
  ];

  return (
    <section className="space-y-6 px-4 py-16 md:px-10 md:py-24 lg:space-y-16 xl:space-y-32 xl:py-32">
      <div className="max-w-2xl space-y-6">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <p className="font-body text-lg md:max-w-xl md:text-xl">
          We offer a wide range of services to meet your interior design needs,
          including residential and commercial design, space planning, and
          project management. Our team is dedicated to creating spaces that are
          not only beautiful but also functional and tailored to your unique
          lifestyle.
        </p>
      </div>
      <section className="space-y-16 divide-y-1 divide-gray-500">
        {services.map((service, index) => (
          <div key={index} className="pb-16 lg:grid lg:grid-cols-3 lg:gap-32">
            <div className="round-2xl max-h-[300px]">
              <Image
                src={service.image}
                alt="Interior design project showcase"
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl">{service.title}</h3>
            </div>
            <div>
              <p className="font-body text-lg">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
