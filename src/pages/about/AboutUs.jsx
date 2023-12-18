import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.main
      animate={{ opacity: 1 }}
      className="grid items-center justify-center h-screen"
      id="about-us"
    >
      <h1 className="text-white text-4xl font-bold border-b-1 border-primary">
        REAL LABS
      </h1>
    </motion.main>
  );
}
