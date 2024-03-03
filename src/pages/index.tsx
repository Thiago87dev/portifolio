import { skillList, bestMovieData, carHubData, blogData } from "@/Data";
import { Alegreya } from "next/font/google";
import Skills from "@/components/Skills";
import Featured from "@/components/Featured";
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import foto2 from "@/assets/img/foto2.jpeg";
import { SiGithub } from "react-icons/si";

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

  const handleClick = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "boleto.pdf";
    link.click();
  };

  return (
    <div className={`${alegreya.className}`}>
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-0">
        <div className="md:w-1/2">
          <h1 className={`text-base text-colorPrimary font-semibold`}>
            Olá, meu nome é <span className="text-xl ">Thiago Alves</span>
          </h1>
          <h2 className="text-colorWhite text-5xl md:text-7xl font-bold">
            Eu crio Websites
          </h2>
          <p className="text-colorWhite mt-8 text-2xl tracking-wide mb-4">
            Estudante apaixonado por Análise e Desenvolvimento de Sistemas,
            capacitado na arte de criar websites. Transformando códigos em
            experiências digitais envolventes, meu entusiasmo está em construir
            soluções web impactantes.
          </p>
          <Link className="text-colorPrimary text-3xl border-b-4 hover:rounded-lg hover:text-colorThird hover:bg-colorWhite " href="/contact">Contato</Link>
        </div>
        <div className="md:w-1/2 flex flex-col items-center gap-4">
          <Image
            className="bg-colorWhite rounded-full"
            alt="foto 2"
            src={foto2}
            width={250}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className="bg-colorWhite rounded-lg p-2 w-60 md:w-28 font-semibold hover:scale-90"
              type="button"
              onClick={handleClick}
            >
              Download CV
            </button>
            <Link
              target="_blank"
              className="flex  items-center justify-center text-colorWhite bg-colorThird gap-2 font-semibold rounded-lg p-2 hover:scale-90"
              href="https://github.com/Thiago87dev"
            >
              GitHub <SiGithub />
            </Link>
          </div>
        </div>
      </div>
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
      <div className="mt-20  ">
        <h2 className="text-colorPrimary  text-4xl font-bold ">
          Projetos em destaque
        </h2>
        <p className="text-colorWhite text-2xl">
          Alguns dos melhores projetos que eu criei.
        </p>
        <div className="mt-16 " ref={containerRef}>
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
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Featured data={blogData} />
          </motion.div>
        </div>
      </div>
      <div className="text-colorWhite flex justify-end text-4xl my-8  ">
        <Link href="/projects">
          <h3 className="hover:text-colorPrimary hover:scale-110 hover:translate-x-2 flex items-center gap-2 cursor-pointer">
            Veja mais projetos <FaArrowRightLong />
          </h3>
        </Link>
      </div>
    </div>
  );
}
