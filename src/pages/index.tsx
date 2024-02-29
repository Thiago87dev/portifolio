import { skillList, bestMovieData, carHubData, blogData } from "@/Data";
import { Alegreya } from "next/font/google";
import Skills from "@/components/Skills";
import Featured from "@/components/Featured";
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function Home() {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControl = useAnimation();

  const containerRef2 = useRef(null);
  const isInView2 = useInView(containerRef2, { once: true });
  const mainControl2 = useAnimation();

  const containerRef3 = useRef(null);
  const isInView3 = useInView(containerRef3, { once: true });
  const mainControl3 = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  useEffect(() => {
    if (isInView2) {
      mainControl2.start("visible");
    }
  }, [isInView2, mainControl2]);

  useEffect(() => {
    if (isInView3) {
      mainControl3.start("visible");
    }
  }, [isInView3, mainControl3]);

  return (
    <div className={`${alegreya.className}`}>
      <h1 className={`text-base text-colorPrimary font-semibold`}>
        Olá, meu nome é <span className="text-xl ">Thiago Alves</span>
      </h1>
      <h2 className="text-colorWhite text-5xl md:text-7xl font-bold">
        Eu crio Websites
      </h2>
      <p className="text-colorWhite mt-8 text-2xl tracking-wide ">
        Estudante apaixonado por Análise e Desenvolvimento de Sistemas,
        capacitado na arte de criar websites. Transformando códigos em
        experiências digitais envolventes, meu entusiasmo está em construir
        soluções web impactantes.
      </p>

      <div className="flex flex-col text-center md:text-left mt-20 items-center md:items-start ">
        <h2 className="text-colorPrimary  text-4xl font-bold ">Habilidades</h2>
        <p className="text-colorWhite text-2xl">
          Minha caixa de ferramentas e coisas que posso fazer
        </p>
        <div className="flex justify-center md:justify-start flex-wrap mt-6 ">
          {skillList.map((item) => (
            <Skills key={item.name} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-colorPrimary  text-4xl font-bold ">
          Projetos em destaque
        </h2>
        <p className="text-colorWhite text-2xl">
          Alguns dos melhores projetos que eu criei.
        </p>
        <div className="mt-16" ref={containerRef}>
          <motion.div
            animate={mainControl}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Featured data={carHubData} />
          </motion.div>
        </div>
        <div className="mt-16" ref={containerRef2}>
          <motion.div
            animate={mainControl2}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Featured data={bestMovieData} />
          </motion.div>
        </div>
        <div className="mt-16" ref={containerRef3}>
          <motion.div
            animate={mainControl3}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x:20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Featured data={blogData} />
          </motion.div>
        </div>
      </div>
      <div className="text-colorWhite flex justify-end text-4xl my-4  ">
        <Link href="/projects"><h3 className="hover:text-colorPrimary hover:scale-110 hover:translate-x-2 flex items-center gap-2 cursor-pointer">Veja mais projetos <FaArrowRightLong /></h3></Link>
        
      </div>
    </div>
  );
}
