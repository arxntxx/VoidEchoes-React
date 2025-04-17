import { Button } from "../components/ui/button";
import Elior from "../assets/Elior.png";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full lg:h-[500px] xl:h-[800px] overflow-hidden">
      <div className="flex flex-row items-center justify-between lg:gap-4">
        <div className="relative lg:w-[600px] lg:h-[600px] mt-[50px] lg:mt-[100px]">
          <div className="absolute w-[600px] h-[600px] top-[50px] left-[50px] bg-[#08191b] rounded-[250px/250px] blur-[50px]" />
          <motion.img
            className="absolute w-full h-full top-0 left-0 object-cover"
            alt="Game character"
            src={Elior}
            animate={{
              y: ["-10px", "10px", "-10px"], // Movimiento más suave (menos rango)
              scale: [1, 1.05, 1], // Escala más sutil
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "easeOut", 
              },
              scale: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "easeOut", 
              },
            }}
          />
        </div>

        <div className="relative flex-1">
          <img
            className="w-full max-w-[800px] lg:max-w-[800px] h-[400px] object-cover"
            alt="Game logo"
            src={Logo}
          />
          <div className="flex justify-end mr-[200px]">
            <Button
              variant="outline"
              className="w-[250px] h-[65px] rounded-[23px] border-2 border-solid border-[#858585] bg-transparent"
            >
              <span className="font-['Poppins-Regular',Helvetica] font-normal text-[#858585] text-lg tracking-[3.60px] leading-normal">
                WISHLIST ON STEAM
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
