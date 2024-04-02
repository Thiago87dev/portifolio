import bestMovie from "@/assets/img/best-movie.png";
import carHub from "@/assets/img/projeto-car-hub.png";
import blog from "@/assets/img/projeto-blog.png";
import { MdOutlinePhonelink } from "react-icons/md";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiW3C,
  SiSanity,
  SiCssmodules,
} from "react-icons/si";

import React from "react";

export const skillList = [
  { name: "Html 5", icon: <SiHtml5 /> },
  { name: "Css 3", icon: <SiCss3 /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Css Modules", icon: <SiCssmodules /> },
  { name: "Responsividade", icon: <MdOutlinePhonelink /> },
  { name: "Sanity", icon: <SiSanity /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Acessibilidade", icon: <SiW3C /> },
];

export const bestMovieData = [
  {
    title: "Best Movies",
    text: "Um site onde você pode ver os 20 filmes mais bem avaliados na página inicial e, além disso, pode pesquisar qualquer filme e ver o resultado dos 20 melhores.",
    imgSrc: bestMovie,
    imgPath: "/img/img-best-movie.png",
    hrefRepo: "https://github.com/Thiago87dev/react_bestMovies",
    hrefSite: "https://thiago87dev.github.io/react_bestMovies/",
    alt: "Capa site Best Movie",
    icons: [
      { title: "React", icon: <SiReact /> },
      { title: "Vite", icon: <SiVite /> },
      { title: "Javascript", icon: <SiJavascript /> },
      { title: "Git", icon: <SiGit /> },
      { title: "GitHub", icon: <SiGithub /> },
      { title: "VS Code", icon: <SiVisualstudiocode /> },
    ],
  },
];

export const carHubData = [
  {
    title: "CarHub",
    text: "Um protótipo de site de aluguel de automóveis com funcionalidade de pesquisa avançada. ",
    imgSrc: carHub,
    imgPath: "/img/img-car-hub.png",
    hrefRepo: "https://github.com/Thiago87dev/car-hub",
    hrefSite: "https://car-hub-black-one.vercel.app/",
    alt: "Capa site carhub",
    icons: [
      { title: "React", icon: <SiReact /> },
      { title: "Next", icon: <SiNextdotjs /> },
      { title: "Typescript", icon: <SiTypescript /> },
      { title: "Tailwind", icon: <SiTailwindcss /> },
      { title: "Git", icon: <SiGit /> },
      { title: "GitHub", icon: <SiGithub /> },
      { title: "VS Code", icon: <SiVisualstudiocode /> },
    ],
  },
];

export const blogData = [
  {
    title: "Bloggers",
    text: "Um blog completo, onde pode ser cadastrados novos posts, autores e categorias.",
    imgSrc: blog,
    imgPath: "/img/img-blogger.png",
    hrefRepo: "https://github.com/Thiago87dev/my-blog",
    hrefSite: "https://my-blog-phi-green.vercel.app/",
    alt: "Capa blog",
    icons: [
      { title: "React", icon: <SiReact /> },
      { title: "Next", icon: <SiNextdotjs /> },
      { title: "Typescript", icon: <SiTypescript /> },
      { title: "Tailwind", icon: <SiTailwindcss /> },
      { title: "Sanity", icon: <SiSanity /> },
      { title: "Git", icon: <SiGit /> },
      { title: "GitHub", icon: <SiGithub /> },
      { title: "VS Code", icon: <SiVisualstudiocode /> },
    ],
  },
];

// bricklayer

export const allProjects = {
  bricklayertData: [
    {
      title: "D.D.M.N",
      text: "Meu primeiro site remunerado criado para uma construtora de Joinville",
      imgPath: "/img/ddmn.png",
      hrefRepo: "https://github.com/Thiago87dev/bricklayer-project",
      hrefSite: "https://bricklayer-project.vercel.app/",
      alt: "Capa D.D.M.N Construtora",
      icons: [
        { title: "React", icon: <SiReact /> },
        { title: "Next", icon: <SiNextdotjs /> },
        { title: "Typescript", icon: <SiTypescript /> },
        { title: "Tailwind", icon: <SiTailwindcss /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  pokeNextData: [
    {
      title: "PokeNext",
      text: "Um site que mostra alguns pokémons e seus detalhes.",
      imgPath: "/img/pokenext.png",
      hrefRepo: "https://github.com/Thiago87dev/pokeNext",
      hrefSite: "https://poke-next-one-xi.vercel.app/",
      alt: "Capa pokenext",
      icons: [
        { title: "React", icon: <SiReact /> },
        { title: "Next", icon: <SiNextdotjs /> },
        { title: "Javascript", icon: <SiJavascript /> },
        { title: "Css Mudules", icon: <SiCssmodules /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  figbruaryData: [
    {
      title: "Figbruary",
      text: "Um site criado através de um projeto figma utilizando dynamic rotes.",
      imgPath: "/img/figbruary.png",
      hrefRepo: "https://github.com/Thiago87dev/figbruary",
      hrefSite: "https://figbruary-five.vercel.app/",
      alt: "Capa figbruary",
      icons: [
        { title: "React", icon: <SiReact /> },
        { title: "Next", icon: <SiNextdotjs /> },
        { title: "Typescript", icon: <SiTypescript /> },
        { title: "Tailwind", icon: <SiTailwindcss /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  myTodoData: [
    {
      title: "My todo",
      text: "Um site de tarefas utilizando localStorage.",
      imgPath: "/img/my-todo.png",
      hrefRepo: "https://github.com/Thiago87dev/my-todo",
      hrefSite: "https://my-todo-dun.vercel.app/",
      alt: "Capa my todo",
      icons: [
        { title: "React", icon: <SiReact /> },
        { title: "Vite", icon: <SiVite /> },
        { title: "Typescript", icon: <SiTypescript /> },
        { title: "Css Mudules", icon: <SiCssmodules /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  geradorCpfData: [
    {
      title: "Gerador de CPF",
      text: "Um sistema que gera CPFs válidos.",
      imgPath: "/img/gera-cpf.png",
      hrefRepo: "https://github.com/Thiago87dev/geradorCPF",
      hrefSite: "https://thiago87dev.github.io/geradorCPF/",
      alt: "Capa gerador de cpf",
      icons: [
        { title: "Html 5", icon: <SiHtml5 /> },
        { title: "Css 3", icon: <SiCss3 /> },
        { title: "Javascipt", icon: <SiJavascript /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  geradorSenhaData: [
    {
      title: "Gerador de Senha",
      text: "Um sistema que gera senhas aleatórias, podendo escolher entre letras maiúsculas ou minusculas, números e símbolos, além de definir o tamanho da senha. ",
      imgPath: "/img/gera-senha.png",
      hrefRepo: "https://github.com/Thiago87dev/GeradorSenha",
      hrefSite: "https://thiago87dev.github.io/GeradorSenha/",
      alt: "Capa gerador de senha",
      icons: [
        { title: "Html 5", icon: <SiHtml5 /> },
        { title: "Css 3", icon: <SiCss3 /> },
        { title: "Javascipt", icon: <SiJavascript /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],
  
  landingPageData: [
    {
      title: "First landing page",
      text: "Minha primeira landing page utilizando apenas html e css.",
      imgPath: "/img/landing-page.png",
      hrefRepo: "https://github.com/Thiago87dev/landing-page",
      hrefSite: "https://tdevlandingpage.netlify.app/",
      alt: "Capa da minha primeira landing page",
      icons: [
        { title: "Html 5", icon: <SiHtml5 /> },
        { title: "Css 3", icon: <SiCss3 /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],
  
  mediaUniasselviData: [
    {
      title: "Média Uniasselvi",
      text: "Um sistema que criei em parceria com um colega de faculdade para calcular a média das notas da Uniasselvi.",
      imgPath: "/img/media-uni.png",
      hrefRepo: "https://github.com/Thiago87dev/mediaUniasselvi",
      hrefSite: "https://thiago87dev.github.io/mediaUniasselvi/",
      alt: "Capa da calculadora de média Uniasselvi",
      icons: [
        { title: "Html 5", icon: <SiHtml5 /> },
        { title: "Css 3", icon: <SiCss3 /> },
        { title: "Javascipt", icon: <SiJavascript /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  calcImcData: [
    {
      title: "Calculo IMC",
      text: "Um sistema que faz o calculo de IMC",
      imgPath: "/img/calc-imc2.png",
      hrefRepo: "https://github.com/Thiago87dev/next-imc",
      hrefSite: "https://next-imc.vercel.app/",
      alt: "Capa calculo imc.",
      icons: [
        { title: "React", icon: <SiReact /> },
        { title: "Next", icon: <SiNextdotjs /> },
        { title: "Typescript", icon: <SiTypescript /> },
        { title: "Tailwind", icon: <SiTailwindcss /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],

  comparadorPrecoData: [
    {
      title: "Comparador de preço",
      text: "Um sistema que compara a quantidade e o preço entre dois produtos e diz qual vale mais pena comprar.",
      imgPath: "/img/comp-preco.png",
      hrefRepo: "https://github.com/Thiago87dev/comparadorPreco",
      hrefSite: "https://thiago87dev.github.io/comparadorPreco/",
      alt: "Capa comparador de preço.",
      icons: [
        { title: "Html 5", icon: <SiHtml5 /> },
        { title: "Css 3", icon: <SiCss3 /> },
        { title: "Javascipt", icon: <SiJavascript /> },
        { title: "Git", icon: <SiGit /> },
        { title: "GitHub", icon: <SiGithub /> },
        { title: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ],
};

const skills = () => {
  return;
};

export default skills;
