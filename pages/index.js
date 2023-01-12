import React from "react";

// Components
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";
import Button from "../components/Buttons/button";

// Icons
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Home = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero section */}
        <section className="min-h-screen" id="hero">
          <div className="h-full mt-12 text-center md:mt-16 lg:mt-28">
            <h1 className="px-6 mb-12 text-4xl font-black text-white md:text-5xl lg:text-6xl">
              Heads of Product hire us to do continuous user discovery, so they
              can
              <span className="gradient-text">
                {" "}
                focus on all the other fires
              </span>
              .
            </h1>

            <p className="px-8 mb-10 font-semibold text-md md:text-lg lg:text-xl text-black-200">
              Partner with us. Give your product team superpowers. Start
              tomorrow and stop whenever.
            </p>

            <div className="flex items-center justify-center">
              <Button styles="flex items-center gap-2 gradient-bg py-3 px-[18px] rounded-full font-bold">
                Start now <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
