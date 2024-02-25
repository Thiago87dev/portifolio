import { FaHtml5 } from "react-icons/fa6";

interface SkillsProps {
  name: string;
  icon: React.ReactNode;
}

const Skills = ({ name, icon }: SkillsProps) => {
  return (
    <div className="mt-3 px-3 ">
      <div className="flex flex-col items-center w-20 ">
        <div className="text-colorSecundary text-7xl ">{icon}</div>
        <p className="text-colorWhite text-lg">{name}</p>
      </div>
    </div>
  );
};

export default Skills;
