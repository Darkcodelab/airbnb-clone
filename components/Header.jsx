import Image from "next/image";

// icons
import {
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 p-3 grid grid-cols-3 bg-white shadow-md md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="Airbnb"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      {/* middle section */}
      <div className="flex items-center border rounded-full py-2 md:border">
        <input
          type="text"
          placeholder="Start your search..."
          className="pl-2 bg-transparent outline-none grow text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 mx-auto cursor-pointer md:inline-flex md:mx-2" />
      </div>
      {/* right section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer">
        <p className="hidden md:inline">Become a host</p>
        <GlobeEuropeAfricaIcon className="h-6" />
        <div className="flex border rounded-full p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
export default Header;
