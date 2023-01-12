import React from "react";

// Components
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";
import Button from "../components/Buttons/button";

// Icons
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Card from "../components/Cards/card";

const Home = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero section */}
        <section className="h-screen" id="hero">
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

        {/* Testimonials section */}
        <section className="w-full md:h-screen bg-black-900" id="testimonials">
          <div className="flex items-center justify-center h-full py-16 md:py-0">
            <div className="relative px-6 space-y-12 md:px-0 lg:max-w-3xl">
              <div className="relative h-fit">
                <h2 className="ml-4 text-4xl font-bold text-white font-second md:text-7xl lg:text-[5rem]">
                  By far the best interviewer I&apos;ve ever had.
                </h2>

                <span className="absolute top-0 left-0 w-1 h-full bg-white"></span>
              </div>

              <div className="relative right-0 text-right text-white">
                <h3 className="mb-2 font-bold ">Charlie de Russett</h3>
                <p className="italic">Founder: Idea Drop, Yellowball</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section className="relative w-full h-full">
          <div className="w-full h-full mb-24">
            <div className="mt-24 mb-16 text-center">
              <h1 className="px-6 mx-auto mb-12 text-4xl font-black text-white max-w-7xl md:text-6xl lg:text-7xl">
                There&apos;s no shortcut to understanding your customers. With
                us
                <span className="gradient-text"> you won&apos;t need one</span>.
              </h1>
              <p className="max-w-3xl px-8 mx-auto mb-10 font-semibold text-md md:text-xl text-black-200">
                For teams that have{" "}
                <span className="text-white">
                  lent on intuition for too long
                </span>
                , and{" "}
                <span className="text-white">don&apos;t know the why</span>{" "}
                behind customer actions.
              </p>
            </div>

            {/* Cards container */}
            <div className="grid gap-3 px-4 md:grid-cols-3 md:gap-8 lg:px-8">
              <Card styles="lg:p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Save your political capital
                </h3>
                <p className="text-[#8a8f98] mb-2">
                  Don&apos;t spend your political capital to do what your gut
                  tells you is right. Get the rest of the business on your side
                  with qualitative data and a real understanding of your
                  customer.
                </p>

                <a className="inline-flex items-center cursor-pointer gap-2 text-md text-[#7381ff] group">
                  Learn more{" "}
                  <ArrowRightIcon className="w-[1.2rem] h-[1.2rem] duration-300 group-hover:translate-x-2" />
                </a>
              </Card>

              <Card styles="lg:p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Deliver value, quickly
                </h3>
                <p className="text-[#8a8f98] mb-2">
                  In a rush? We can start tomorrow. We can make sure you&apos;re
                  not left waiting while you hire a permanent team member, or
                  pick up the slack when you can&apos;t justify a hire. Ramp up
                  our services with your needs, and ramp back down again as the
                  rush subsides.
                </p>

                <a className="inline-flex items-center cursor-pointer gap-2 text-md text-[#7381ff] group">
                  Learn more{" "}
                  <ArrowRightIcon className="w-[1.2rem] h-[1.2rem] duration-300 group-hover:translate-x-2" />
                </a>
              </Card>

              <Card styles="lg:p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Best practices not best of luck
                </h3>
                <p className="text-[#8a8f98] mb-2">
                  Don&apos;t leave it to chance. We bring years of experience in
                  the best practices, using frameworks like Jobs to be Done and
                  Continuous User Discovery.
                </p>

                <a className="inline-flex items-center cursor-pointer gap-2 text-md text-[#7381ff] group">
                  Learn more{" "}
                  <ArrowRightIcon className="w-[1.2rem] h-[1.2rem] duration-300 group-hover:translate-x-2" />
                </a>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
