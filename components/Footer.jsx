import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-100 ">
      <footer className="grid grid-cols-1 max-w-[1200px] mx-auto space-y-10 py-10 px-3 md:space-y-0 md:grid-cols-4">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            fill
            alt="Airbnb"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>
        <div className="space-y-4 text-gray-800 text-sm">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works?</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-gray-800 text-sm">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>Robocop</p>
          <p>Airbnb community</p>
          <p>Scorpion</p>
        </div>

        <div className="space-y-4 text-gray-800 text-sm">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Trust</p>
          <p>Privacy</p>
          <p>Support</p>
          <p>Care</p>
          <p>Data</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
