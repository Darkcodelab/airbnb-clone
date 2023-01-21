import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// icons
import {
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  UserCircleIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Header({ placeholder }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsCount, setGuestsCount] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchQuery("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchQuery,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestsCount,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 p-3 grid grid-cols-3 bg-white shadow-md md:px-10">
      {/* left section */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          placeholder={placeholder || "Start your search..."}
          className="pl-2 bg-transparent outline-none grow text-sm text-gray-600 placeholder-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
      {searchQuery && (
        <div className="col-span-3 text-center mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            staticRanges={[]}
            inputRanges={[]}
          />
          <div className="flex items-center max-w-[500px] mx-auto border-t border-b py-4">
            <h2 className="text-xl text-left flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg font-bold outline-none text-red-400"
              min={1}
              value={guestsCount}
              onChange={(e) => setGuestsCount(e.target.value)}
            />
          </div>
          <div className="flex py-2 pt-4 items-center">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-grow text-red-400"
              onClick={search}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
