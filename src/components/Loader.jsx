import { Image } from "@nextui-org/react";
import circle from "assets/circle.png";

export default function Loader() {
  return (
    <div className="flex bg-base dark flex-col items-center justify-center absolute w-screen h-screen gap-10">
      <Image src={circle} className="animate-spin w-20" />
      <h2 className="animate-pulse">CARGANDO...</h2>
    </div>
  );
}
