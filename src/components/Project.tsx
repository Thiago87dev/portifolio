import Link from "next/link";
import Btn from "./Btn";

interface IconsProps {
  icon: React.ReactNode;
  title: string;
}

interface DataProps {
  imgPath: string;
  alt: string;
  title: string;
  text: string;
  icons: IconsProps[];
  hrefSite: string;
  hrefRepo: string;
}

interface ProjectProps {
  data: DataProps[];
}

const Project = ({ data }: ProjectProps) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.title}>
          <h1 className="text-colorPrimary text-xl md:text-3xl font-bold mb-6">{item.title}</h1>
          <div
            style={{ backgroundImage: `url(${item.imgPath})` }}
            className={`w-52 h-28 md:w-72 md:h-36 lg:w-96 lg:h-48 hover:scale-125 transition-all duration-300 bg-cover bg-center 5 flex justify-center items-center text-center p-8 relative`}
          >
            <div className="bg-colorBlack opacity-0 hover:opacity-85  w-56 h-28 md:w-72 md:h-36 lg:w-96 lg:h-48 absolute flex justify-center items-center p-8">
              <p className="text-colorWhite font-bold text-xs lg:text-xl">
                {item.text}
              </p>
            </div>
          </div>
          <div className="mt-2 flex gap-2 text-xl md:text-2xl flex-wrap">
            {item.icons.map((item) => (
              <p
                key={item.title}
                title={item.title}
                className="text-colorSecundary hover:scale-125"
              >
                {item.icon}
              </p>
            ))}
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <Btn title="Website" href={item.hrefSite}/>
            <Btn title="Repositorio" href={item.hrefRepo}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
