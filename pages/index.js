import React from "react";

// Next image component
import Image from "next/image";

// Components
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/footer";
import Button from "../components/Buttons/button";
import Card from "../components/Cards/card";

// Images
import PortfolioCollectiveLogo from "../public/assets/images/the-portfolio-collective.svg";
import InfarmLogo from "../public/assets/images/infarm1.svg";
import FitbitLogo from "../public/assets/images/Fitbit_logo16.svg";
import SenicLogo from "../public/assets/images/SENIC-logo-rgb-W_720x.webp";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Userhive - Continuous User Discovery, on tap.</title>
        <meta name="description" content="A website made with Typedream." />
        <link rel="icon" type="image/x-icon" href="./logo-light.svg" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className="overflow-hidden">
        {/* Hero section */}
        <section className="h-screen" id="hero">
          <div className="h-full mt-[4.5rem] text-center md:mt-16 lg:mt-28">
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
              <Button
                href="#"
                styles="flex items-center gap-2 gradient-bg py-3 px-[18px] rounded-full font-bold group"
              >
                Start now{" "}
                <i class="bx bx-right-arrow-alt text-[1.25rem] duration-300 group-hover:translate-x-2"></i>
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
        <section className="relative w-full h-full" id="services">
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

                <a className="inline-flex items-center cursor-pointer gap-1 text-md text-[#7381ff] group">
                  Learn more{" "}
                  <i class="bx bx-right-arrow-alt text-[1.25rem] duration-300 group-hover:translate-x-2"></i>
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

                <a className="inline-flex items-center cursor-pointer gap-1 text-md text-[#7381ff] group">
                  Learn more{" "}
                  <i class="bx bx-right-arrow-alt text-[1.25rem] duration-300 group-hover:translate-x-2"></i>
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

                <a className="inline-flex items-center cursor-pointer gap-1 text-md text-[#7381ff] group">
                  Learn more{" "}
                  <i class="bx bx-right-arrow-alt text-[1.25rem] duration-300 group-hover:translate-x-2"></i>
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* Logos section */}
        <section
          className="bg-black-900 lg:h-screen lg:flex lg:justify-center lg:items-center"
          id="logos"
        >
          <div className="py-24 pl-6 lg:pt-0 lg:pl-12 lg:py-0">
            <div>
              <h2 className="text-[1.75rem] font-extrabold text-white mb-12 lg:text-3xl xl:text-4xl">
                <span className="gradient-text">Trusted</span> by big and small
              </h2>

              {/* Logos */}
              <div className="grid gap-6 place-items-center sm:grid-cols-2 md:grid-cols-4">
                <Image
                  src={PortfolioCollectiveLogo}
                  alt=""
                  className="h-16"
                  loading="lazy"
                />
                <Image
                  src={InfarmLogo}
                  alt=""
                  className="h-32"
                  loading="lazy"
                />
                <Image
                  src={FitbitLogo}
                  alt=""
                  className="w-56"
                  loading="lazy"
                />
                <Image
                  src={SenicLogo}
                  alt=""
                  className="w-48 mt-8 sm:mt-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How we work section */}
        <section className="relative w-full h-full" id="work">
          <div className="px-6 py-24">
            <div className="mb-12">
              <h2 className="max-w-2xl mb-8 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl lg:max-w-4xl">
                A <span className="turn-key">turn-key</span> approach to
                continuous user discovery
              </h2>
              <p className="font-semibold text-black-200 md:text-lg">
                You&apos;ve got a lot to take on, so we take user research off
                your plate.
              </p>
            </div>

            {/* how we work block */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">
                How we work
              </h3>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="hover:bg-[#2c2c30] p-3 hover:rounded-lg hover:cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6968F7] rounded-full">
                    <i className="text-xl text-white bx bx-fast-forward"></i>
                  </div>

                  <h3 className="mt-4 mb-2 font-bold text-white">
                    Continuous discovery
                  </h3>
                  <p className="text-black-100">
                    We do users interviews with your customers or prospectives
                    each week, so your team get constant input to their
                    decisions. If a new question pops up, you will start getting
                    answers from customers in less than a week.
                  </p>
                </div>

                <div className="hover:bg-[#2c2c30] p-3 hover:rounded-lg hover:cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6968F7] rounded-full">
                    <i class="text-xl text-white bx bx-intersect"></i>
                  </div>

                  <h3 className="mt-4 mb-2 font-bold text-white">
                    Partnership
                  </h3>
                  <p className="text-black-100">
                    We don&apos;t deliver a report and walk away. We work hand
                    in hand with your team, meeting regularly to understand the
                    newest changes in direction and burning questions that need
                    answering.
                  </p>
                </div>

                <div className="hover:bg-[#2c2c30] p-3 hover:rounded-lg hover:cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6968F7] rounded-full">
                    <i class="text-xl text-white bx bx-run"></i>
                  </div>

                  <h3 className="mt-4 mb-2 font-bold text-white">No hurdles</h3>
                  <p className="text-black-100">
                    Know how much it&apos;ll cost before you even email us. Pay
                    with your credit card, or we can send an invoice. Pause the
                    engagement with as little as an email. We want it to be as
                    easy as possible to work with us.
                  </p>
                </div>

                <div className="hover:bg-[#2c2c30] p-3 hover:rounded-lg hover:cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6968F7] rounded-full">
                    <i class="text-xl text-white bx bx-heart"></i>
                  </div>

                  <h3 className="mt-4 mb-2 font-bold text-white">
                    Build customer empathy
                  </h3>
                  <p className="text-black-100">
                    Empathy with your customers doesn&apos;t happen in a day.
                    Our work creates an ever-deepening understanding of your
                    customers within your product teams. We produce artefacts
                    that your teams will refer to and share again and again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get moving section... */}
        <section className="bg-black-900" id="moving">
          <div className="pt-24">
            <div>
              <h2 className="mb-24 text-4xl font-extrabold text-center text-white sm:text-5xl md:text-6xl">
                Let&apos;s get <span className="moving">moving</span>
              </h2>

              <div className="px-6">
                <div className="bg-[#131415] p-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                  <Card styles="special-card text-white md:p-8">
                    <h3 className="mb-4 text-3xl font-extrabold lg:text-4xl">
                      Small
                    </h3>
                    <p>Best for partnering with a single product team</p>

                    <div className="my-10">
                      <p className="">4 User insight packages each month</p>
                      <ul className="pl-6 list-disc">
                        <li>interviews with 4 users</li>
                        <li>Expert analysis of each interview</li>
                        <li>
                          Monthly team call to review and consolidate
                          understanding
                        </li>
                        <li>Summary shared as an interview snapshot</li>
                      </ul>
                    </div>

                    <h4 className="mb-8 text-2xl font-extrabold">
                      €1199 per month
                    </h4>

                    <div className="text-center">
                      <div className="inline-block rounded-full shadow-lg">
                        <Button
                          href="#"
                          styles="px-7 py-3 bg-[#5E5DF0] rounded-full duration-300 hover:bg-white hover:text-[#5E5DF0]"
                        >
                          Let&apos;s go
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card styles="text-white md:p-8">
                    <h3 className="mb-4 text-3xl font-extrabold lg:text-4xl">
                      Medium
                    </h3>
                    <p>Best for partnering with multiple product teams</p>

                    <div className="my-10">
                      <p className="">8 User insight packages each month</p>
                      <ul className="pl-6 list-disc">
                        <li>interviews with 8 users</li>
                        <li>Expert analysis of each interview</li>
                        <li>
                          Monthly team call to review and consolidate
                          understanding
                        </li>
                        <li>Summary shared as an interview snapshot</li>
                      </ul>
                    </div>

                    <h4 className="mb-8 text-2xl font-extrabold">
                      €2149 per month
                    </h4>

                    <div className="text-center">
                      <div className="inline-block rounded-full shadow-lg">
                        <Button
                          href="#"
                          styles="px-7 py-3 bg-[#5E5DF0] rounded-full hover:bg-white hover:text-[#5E5DF0]"
                        >
                          Let&apos;s go
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card styles="text-white md:p-8">
                    <h3 className="mb-4 text-3xl font-extrabold lg:text-4xl">
                      Large
                    </h3>

                    <div className="my-10">
                      <p className="mb-3">
                        Looking for even more of the good stuff?
                      </p>
                      <p>We can work on a custom engagement, just reach out.</p>
                    </div>

                    <div className="text-center pt-44 lg:pt-[13.4rem]">
                      <div className="inline-block rounded-full shadow-lg">
                        <Button
                          href="#"
                          styles="px-7 py-3 bg-[#5E5DF0] rounded-full hover:bg-white hover:text-[#5E5DF0]"
                        >
                          Let&apos;s go
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
