import Image from "next/image";
import project1 from "../../../assets/images/img4.jpg";
import project2 from "../../../assets/images/img5.jpg";
import Button from "../../ui/button";

export const Investments = () => {
  const projectData = [
    {
      image: project2,
      title: "Modern Minimalist",
      description:
        "A light-filled modern space that celebrates form and function.",
      propertyType: "Penthouse Apartment",
      totalCost: "R8.5M",
      propertyClass: "Luxury",
    },
    {
      image: project1,
      title: "Elegant Heritage",
      description:
        "A timeless design that balances tradition with contemporary luxury.",
      propertyType: "Colonial Villa",
      totalCost: "R12M",
      propertyClass: "Heritage Estate",
    },
    // Add more projects here as needed
  ];

  return (
    <section className="space-y-6 px-4 py-16 md:px-10 md:py-24 lg:space-y-16 xl:space-y-32">
      <div className="space-y-6 lg:max-w-xl">
        <h3 className="font-body text-black">INVESTMENTS</h3>
        <h3 className="font-display text-4xl">
          Performance-driven real estate investment
        </h3>
        <p className="font-body">
          We are passionate about creating spaces that inspire and uplift...
        </p>
        <Button text="Learn more about us" />
      </div>

      <div className="space-y-6">
        <div className="relative grid grid-cols-1 items-start gap-x-18 gap-y-10 md:grid-cols-2">
          {/* Divider Line */}
          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 transform bg-gray-300 md:block" />

          {projectData.map((project, index) => (
            <div key={index} className="space-y-4">
              {/* Image */}
              <div>
                <Image
                  src={project.image}
                  alt={`Interior design project ${index + 1}`}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>

              {/* Title and Description */}
              <div className="grid gap-y-6 md:grid-cols-2">
                <h3 className="font-display text-4xl">{project.title}</h3>
                <p>{project.description}</p>
              </div>

              {/* Property Info */}
              <div className="space-y-4 divide-y divide-gray-400">
                <div className="flex justify-between pb-4">
                  <span>Property Type:</span>
                  <span className="text-right">{project.propertyType}</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Total Cost:</span>
                  <span className="text-right">{project.totalCost}</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span>Property Class:</span>
                  <span className="text-right">{project.propertyClass}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
