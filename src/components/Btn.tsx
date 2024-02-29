import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

interface BtnProps {
  title: string;
  href: string;
}

const Btn = ({ title, href }: BtnProps) => {
  return (
    <div>
      <Link
        target="_blank"
        href={href}
        className="flex items-center gap-1 bg-colorPrimary p-2 rounded-lg justify-center sm:justify-start hover:bg-colorThird hover:text-colorWhite"
      >
        {title === "Website" ? (
          <>
            {title}
            <TbWorld />
          </>
        ) : (
          <>
            {title}
            <SiGithub />
          </>
        )}
      </Link>
    </div>
  );
};

export default Btn;
