import ContactForm from "@/components/ContactForm";
import Link from "next/link";

import { SiWhatsapp, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { FaPhone, FaLocationDot, FaAt } from "react-icons/fa6";

const contact = () => {
  return (
    <div>
      <h1 className={`text-base text-colorPrimary font-semibold`}>Contato</h1>
      <h1 className="text-colorWhite text-5xl md:text-7xl font-bold mb-10">
        Entre em contato comigo
      </h1>
      <div className="bg-colorFifth rounded-sm flex justify-around flex-col md:flex-row ">
        <ContactForm />
        <div className="flex flex-col justify-around p-8 gap-4 md:gap-0">
          <div className="text-center">
            <h3 className="text-colorPrimary flex items-center justify-center gap-1 text-xl">
              <span className="text-lg">
                <FaLocationDot />
              </span>{" "}
              Localização
            </h3>
            <p className="text-colorWhite">Joinville/SC</p>
          </div>
          <div className="text-center">
            <h3 className="text-colorPrimary flex items-center justify-center gap-1 text-xl">
              <span className="text-lg">
                <FaPhone />
              </span>{" "}
              telefone
            </h3>
            <p className="text-colorWhite">(47) 98912-4895</p>
          </div>
          <div className="text-center">
            <h3 className="text-colorPrimary flex items-center justify-center gap-1 text-xl">
              <span className="text-lg">
                <FaAt />
              </span>{" "}
              E-mail
            </h3>
            <p className="text-colorWhite">thiago87gsa@gmail.com</p>
          </div>
        </div>
      </div>
      <h2 className="text-colorWhite text-4xl font-bold mt-10 ">
        Se você preferir, entre em contato pelo{" "}
        <span className="text-colorPrimary">WhatsApp</span> ou através das
        minhas <span className="text-colorPrimary">redes sociais</span>. 
      </h2>
      <div className="flex gap-16 md:gap-32 justify-center my-16 text-center flex-wrap ">
        <div className="hover:scale-125">
          <Link
            target="_blank"
            className="text-colorPrimary text-4xl md:text-7xl"
            href="https://wa.me/5547989124895"
          >
            <SiWhatsapp />
          </Link>
          <p className="text-colorWhite text-lg">Whatsapp</p>
        </div>
        <div className="hover:scale-125">
          <Link
            target="_blank"
            className="text-colorPrimary text-4xl md:text-7xl"
            href="https://github.com/Thiago87dev"
          >
            <SiGithub />
          </Link>
          <p className="text-colorWhite text-lg">GitHub</p>
        </div>
        <div className="hover:scale-125">
          <Link
            target="_blank"
            className="text-colorPrimary text-4xl md:text-7xl"
            href="https://www.linkedin.com/in/thiago-alves-010915274/"
          >
            <SiLinkedin />
          </Link>
          <p className="text-colorWhite text-lg">Linkedin</p>
        </div>
        <div className="hover:scale-125">
          <Link
            target="_blank"
            className="text-colorPrimary text-4xl md:text-7xl"
            href="https://www.instagram.com/thiagopaulista87/"
          >
            <SiInstagram />
          </Link>
          <p className="text-colorWhite text-lg">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
