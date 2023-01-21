import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function search({ searchResult }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { location, startDate, endDate, guestsCount } = router.query;

  const formatDate = (isoString) => {
    return isoString && format(new Date(isoString), "dd MMMM yy");
  };

  const range = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestsCount}`} />
      <main className="flex pt-10">
        <section className="px-2 mx-auto container">
          <p className="text-xs">
            300+ Stays | {range} | for {guestsCount} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="flex flex-wrap items-center mb-6">
            <p className="filter-button ml-0">Cancellation Flexibility</p>
            <p className="filter-button">Type of Place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More Filters</p>
          </div>
          {searchResult &&
            searchResult.map(
              (
                { img, location, title, description, star, price, total },
                idx
              ) => {
                return (
                  <InfoCard
                    img={img}
                    location={location}
                    key={idx}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                );
              }
            )}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] h-[100vh]">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: {
      searchResult,
    },
  };
}
