import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody, Image, Divider } from "@nextui-org/react";
import dots from "assets/dots.png"; // Asegúrate de que la ruta a las imágenes es correcta
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
          className="absolute w-[130%]"
          style={{
            translateX: -offsetY * 0.5, // Ajusta la velocidad del efecto parallax aquí
            translateY: offsetY,
          }}
        >
          <Image src={dots} alt="dots" disableSkeleton />
        </motion.div>

        <motion.div className="grid place-items-center  gap-4 z-20">
          <h1 className="text-white text-center text-3xl font-bold border-b-1 border-primary">
            REAL LABS
          </h1>
          <Card className="bg-primary/20">
            <CardBody>
              <p className="text-xs font-bold font-quicksand text-white">
                Innovación y Eficiencia en Cada Línea de Código. En Real,
                transformamos desafíos complejos en soluciones tecnológicas
                avanzadas. Impulsando el progreso, un proyecto a la vez.
              </p>
            </CardBody>
          </Card>

          <Button
            variant="solid"
            color="secondary"
            size="md"
            onClick={scrollToAboutUs}
            className="font-bold mt-20 p-6"
          >
            DESCUBRE NUESTRAS <br /> SOLUCIONES
          </Button>
        </motion.div>

        <motion.div
          className="hidden absolute -right-[60%] w-[100%]"
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
