import bestMovie from "@/assets/img/bestMovie.png";
import carHub from "@/assets/img/projeto-carHub.png";
import blog from "@/assets/img/projetoBlog.png";
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
} from "react-icons/si";

import React from "react";

export const skillList = [
  { name: "html 5", icon: <SiHtml5 /> },
  { name: "css 3", icon: <SiCss3 /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Sanity", icon: <SiSanity /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Acessibilidade", icon: <SiW3C /> },
];

export const bestMovieData = [
  {
    title: "Best Movies",
    text: "Um site onde você pode ver os 20 filmes mais avaliados na página inicial e, além disso, pode pesquisar qualquer filme através do camp de busca e receber os resultados dos 20 filmes mais bem avaliados.",
    imgSrc: bestMovie,
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
    hrefRepo: "https://github.com/Thiago87dev/car-hub",
    hrefSite: "https://car-hub-black-one.vercel.app/",
    alt: "Capa site carhub",
    icons: [
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
    text: "Um blog completo, onde pode ser cadastrados novos post, autores e categorias.",
    imgSrc: blog,
    hrefRepo: "https://github.com/Thiago87dev/my-blog",
    hrefSite: "https://my-blog-phi-green.vercel.app/",
    alt: "Capa blog",
    icons: [
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

const skills = () => {
  return;
};

export default skills;
