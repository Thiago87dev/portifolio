import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Btn from "./Btn";

interface IconsProps {
  icon: React.ReactNode;
  title: string;
}

interface DataProps {
  imgSrc: StaticImageData;
  alt: string;
  title: string;
  text: string;
  icons: IconsProps[];
  hrefSite: string;
  hrefRepo: string;
}

interface FeaturedProps {
  data: DataProps[];
}

const Featured = ({ data }: FeaturedProps) => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row ">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center md:items-start md:flex-row w-full "
        >
          <div className="w-full md:w1/2 flex">
            <Image src={item.imgSrc} width={400} alt={item.alt} className="" />
          </div>
          <div className="flex flex-col w-full md:w1/2 ">
            <Link target="_blank" href={item.hrefSite}>
              <h1 className="text-colorSecundary text-3xl">{item.title}</h1>
            </Link>
            <p className="text-colorWhite text-xl ">{item.text}</p>
            <div className="mt-2 flex gap-2 text-lg flex-wrap">
              {item.icons.map((item) => (
                <p
                  key={item.title}
                  title={item.title}
                  className="text-colorSecundary"
                >
                  {item.icon}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row mt-4 gap-4">
              <Btn href={item.hrefSite} title="Website"/>
              <Btn href={item.hrefRepo} title="Repositorio"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
