import Link from "next/link"
import { SiLinkedin, SiGithub  } from "react-icons/si"

const Footer = () => {
  return (
    <div className="text-colorWhite flex flex-col md:flex-row text-center  justify-around items-center p-6 gap-4 bg-colorAlmostBlack">
        <p>© 2024 |  Projetado e codificado com 💙 por <span className="text-colorPrimary"><Link target="_blank" href="https://www.instagram.com/thiagopaulista87/">Thiago Alves</Link></span></p>
        <p className="text-colorPrimary flex gap-4 text-2xl "><Link target="_blank" href="https://www.linkedin.com/in/thiago-alves-010915274/"><SiLinkedin /></Link> <Link target="_blank" href="https://github.com/Thiago87dev"><SiGithub /></Link> </p>
    </div>
  )
}

export default Footer