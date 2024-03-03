import Link from "next/link";
import { Alegreya } from "next/font/google";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import foto1 from "@/assets/img/foto1.png";
import Image from "next/image";

const alegreya = Alegreya({ subsets: ["latin"] });

const navigation = [
  { title: "Home", href: "/" },
  { title: "Projetos", href: "/projects" },
  { title: "Sobre", href: "/" },
  { title: "Contato", href: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }

  function clomeMenu() {
    setActive(false);
  }

  return (
    <div className={`${alegreya.className} h-16 mt-4`}>
      <nav className="flex justify-between">
        <Link
          href="/"
          className="hidden md:flex gap-2 items-center p-5 text-colorWhite hover:text-colorSecundary cursor-pointer"
        >
          <Image
            className="bg-colorWhite rounded-full"
            alt="foto 1"
            src={foto1}
            width={30}
          />
          <p className="text-sm font-semibold relative group overflow-hidden">
            Thiago Alves
          </p>
          <FaCircleCheck className="text-blue-500" />
        </Link>
        <div className="hidden md:flex justify-end gap-8 p-5 text-colorWhite ">
          {navigation.map((item) => (
            <Link
              className="text-sm uppercase font-semibold relative group overflow-hidden"
              key={item.title}
              href={item.href}
            >
              {item.title}
              <span className="w-full h-[3px] bg-colorPrimary absolute inline-block left-0 bottom-0 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
      </nav>
      <div className="md:hidden flex justify-between p-4">
        {!active ? (
          <div className="flex justify-between w-full items-center h-16">
            <div>
              <Link
                href="/"
                className=" flex gap-2 items-center p-5 text-colorWhite hover:text-colorSecundary cursor-pointer"
              >
                <Image
                  className="bg-colorWhite rounded-full"
                  alt="foto 1"
                  src={foto1}
                  width={30}
                />
                <p className="text-sm font-semibold relative group overflow-hidden">
                  Thiago Alves
                </p>
                <FaCircleCheck className="text-blue-500" />
              </Link>
            </div>
            <IoMenu
              className="text-4xl cursor-pointer text-colorWhite"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center ">
            <div className="flex justify-end items-center h-16">
              <IoClose
                className="text-4xl cursor-pointer text-colorWhite"
                onClick={toggleMenu}
              />
            </div>

            <div className="bg-colorFourth bg-opacity-90 z-10 flex flex-col h-96 justify-around items-center rounded-lg">
              {navigation.map((item) => (
                <Link
                  onClick={clomeMenu}
                  className="text-lg uppercase text-colorWhite font-semibold flex flex-col "
                  key={item.title}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
