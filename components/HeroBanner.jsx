import Image from "next/image";

function HeroBanner() {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt=""
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m Flexible
        </button>
      </div>
    </section>
  );
}
export default HeroBanner;
