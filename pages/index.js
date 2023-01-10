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
          <div className="h-full text-center mt-12">
            <h1 className="text-3xl font-bold px-6 text-white mb-12">
              Heads of Product hire us to do continuous user discovery, so they
              can
              <span className="gradient-text">
                {" "}
                focus on all the other fires
              </span>
              .
            </h1>

            <p className="text-md font-semibold text-black-200 px-8 mb-10">
              Partner with us. Give your product team superpowers. Start
              tomorrow and stop whenever.
            </p>

            <div className="flex justify-center items-center">
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
