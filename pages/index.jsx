import Head from "next/head";

// components
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb Clone | Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroBanner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData &&
              exploreData.map((data, index) => (
                <SmallCard
                  key={index}
                  img={data.img}
                  location={data.location}
                  distance={data.distance}
                />
              ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
            {cardsData &&
              cardsData.map((data, index) => (
                <MediumCard key={index} img={data.img} title={data.title} />
              ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Whitelists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: { exploreData, cardsData },
  };
}
