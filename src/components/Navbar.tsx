import Link from "next/link";
import { Alegreya } from "next/font/google";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const alegreya = Alegreya({ subsets: ["latin"] });

const navigation = [
  { title: "Home", href: "/" },
  { title: "Projetos", href: "/" },
  { title: "Sobre", href: "/" },
  { title: "Contato", href: "/" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }
  return (
    <div className={`${alegreya.className} h-16 mt-4`}>
      <nav className="hidden md:flex justify-end gap-8 p-5 text-colorWhite">
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
      </nav>
      <div className="md:hidden flex justify-end p-4">
        {!active ? (
          <IoMenu className="text-4xl cursor-pointer text-colorWhite" onClick={toggleMenu} />
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-end">
              <IoClose
                className="text-4xl cursor-pointer text-colorWhite"
                onClick={toggleMenu}
              />
            </div>

            <div className="bg-colorBlack bg-opacity-80 w-full z-10 px-24 flex flex-col h-96 justify-around items-center rounded-lg">
              {navigation.map((item) => (
                <Link
                  className="text-sm uppercase text-colorWhite font-semibold flex flex-col "
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
