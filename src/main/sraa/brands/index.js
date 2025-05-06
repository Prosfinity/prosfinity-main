import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-4xl md:text-[45px]">
          Certificates
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-scroll flex items-center justify-center whitespace-nowrap py-[15px] gap-10">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
          {brandsData.map((brand, index) => (
            <SingleBrand key={`duplicate-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="relative min-w-[180px] flex justify-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={name} className="h-24" />
    </a>
  );
};
