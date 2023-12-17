import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import dots from "assets/dots.png"; // Asegúrate de que la ruta a las imágenes es correcta
import logo_big from "assets/logo_big.png";
import AboutUs from "../about/AboutUs";

export default function Landing() {
  const [offsetY, setOffsetY] = useState(0);

  // Controlador de eventos para el desplazamiento de scroll
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAboutUs = () => {
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="p-10 flex flex-col gap-10 items-center relative h-screen">
        <motion.div
          className="absolute -left-96 w-[60%]"
          style={{
            translateX: -offsetY * 0.5, // Ajusta la velocidad del efecto parallax aquí
            translateY: offsetY,
          }}
        >
          <Image src={dots} alt="dots" disableSkeleton />
        </motion.div>

        <motion.div className="grid">
          <Image src={logo_big} alt="logo" width={400} height={400} />
          <Button
            variant="solid"
            color="secondary"
            size="lg"
            onClick={scrollToAboutUs}
          >
            DESCUBRINOS
          </Button>
        </motion.div>

        <motion.div
          className="absolute -right-96 w-[60%]"
          style={{
            translateX: offsetY * 0.5, // Ajusta la velocidad del efecto parallax aquí
            translateY: offsetY,
          }}
        >
          <Image src={dots} alt="dots2" disableSkeleton />
        </motion.div>
      </section>
      <AboutUs />
    </main>
  );
}
