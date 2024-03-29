import Image from "next/image";
import foto3 from "@/assets/img/foto4.jpeg";

const about = () => {
  return (
    <div>
      <div>
        <h1 className={`text-base text-colorPrimary font-semibold`}>
          Sobre mim
        </h1>
        <h2 className="text-colorWhite text-5xl md:text-7xl font-bold mb-10">
          Quem é Thiago Alves?
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-center ">
        <div className=" lg:w-1/2 my-auto  ">
          <Image
            alt="minha foto sentando na cadeira"
            src={foto3}
            width={500}
            className="rounded-lg "
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-colorWhite text-3xl tracking-wide mb-4 ">
            Um desenvolvedor Front-End movido pela curiosidade e o desejo de
            aprender.
          </p>
          <p className="text-colorWhite  text-xl tracking-wide mb-4 ">
            Natural de São Paulo/SP, atualmente residindo em <span className="underline ">Joinville/SC</span>, sou
            pai orgulhoso da Yasmin e do Nathan, além de ser motorista de
            aplicativo e estudante de <span className="underline">análise e desenvolvimento de sistemas</span>.
            Estou em uma jornada em busca da minha primeira oportunidade como 
            <span className="underline"> desenvolvedor Front-End</span>. Com uma sede insaciável por conhecimento,
            sou <span className="underline">autodidata</span> e tenho <span className="underline">habilidade para aprender rapidamente</span>, tendo
            adquirido meu conhecimento por meio de vídeos do YouTube e cursos da
            Udemy. Sou <span className="underline">proativo</span>, <span className="underline">comunicativo</span> e valorizo o <span className="underline">trabalho em equipe</span>,
            sempre aberto a <span className="underline">novas experiências</span> e <span className="underline">desafios</span>. Estou comprometido em
            crescer profissionalmente e contribuir de forma significativa para o
            mundo da tecnologia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
