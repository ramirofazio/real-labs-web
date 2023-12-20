import { Button, Image, Link } from "@nextui-org/react";
import React, { Suspense, lazy } from "react";
import Loader from "src/components/Loader";
const NavBar = lazy(() => import("src/components/NavBar"));
const Footer = lazy(() => import("src/components/Footer"));
import circle from "assets/circle.png";
import gradientCircle from "assets/gradientCircle.png";
import dots from "assets/dots.png";

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <NavBar />
      <main>{children}</main>
      <Footer /> */}
      <main className="bg-base w-screen h-screen !overflow-hidden grid place-content-between justify-center  xl:place-items-center relative py-10 text-center">
        <div className="grid place-items-center ">
          <Image
            src={circle}
            className="w-[30%] mx-auto animate-spinner-ease-spin"
          />
          <h1 className="text-white text-4xl md:text-5xl mt-6 font-bold">
            REAL LABS
          </h1>
          <p className="-mt-1 text-sm md:text-lg">SOLUCIONES TECNOLOGICAS</p>
        </div>

        <div className="grid place-items-center gap-6 px-4">
          <h2 className="text-white border-b-1 border-secondary font-tt-lakes-neue font-bold text-sm sm:text-xl">
            WEB EN CONSTRUCCIÓN
          </h2>
          <p className="text-white/50 z-20 text-sm sm:text-lg w-[60%] xl:w-[40%] font-semibold">
            Estamos afinando los detalles para brindarte una experiencia
            completa. Si tenes una necesidad{" "}
            <spam className="text-secondary animate-pulse font-bold">
              URGENTE
            </spam>
            , no dudes en contactarnos por el medio que prefieras.
          </p>
        </div>
        <Image
          src={dots}
          className="absolute left-[70vw] w-[70vw] md:w-[50vw] xl:w-[60vw] xl:left-[70vw] animate-appearance-in"
          disableSkeleton
        />
        <Image
          src={dots}
          className="absolute right-[70vw] top-[50vh] w-[70vw] md:w-[50vw] xl:w-[70vw] xl:top-auto animate-appearance-in"
          disableSkeleton
        />
        <Image
          src={gradientCircle}
          className="absolute left-[70vw] top-[80vh] w-[70vw] md:w-[50vw] xl:w-[40vw] xl:hidden animate-appearance-in"
          disableSkeleton
        />

        <div className="flex justify-center items-center gap-4">
          <Button
            as={Link}
            variant="solid"
            size="lg"
            color="secondary"
            className="button-gradient"
            href="https://forms.visme.co/formsPlayer/90p4rqzg-expert-blog-subscription"
          >
            ¡CONTACTANOS!
          </Button>
          <a href="https://www.instagram.com/reallabs.dev" target="_blank">
            <i className="icons ri-instagram-line button-gradient text-5xl !font-normal !bg-clip-text text-transparent" />
          </a>
        </div>
      </main>
    </Suspense>
  );
};

export default Layout;
