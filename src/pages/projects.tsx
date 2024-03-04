import Project from "@/components/Project";
import {
  bestMovieData,
  carHubData,
  blogData,
  allProjects
} from "@/Data";

const projects = () => {
  return (
    <div>
      <p className="text-colorPrimary text-base font-semibold ">Projetos</p>
      <h1 className="text-colorWhite text-4xl font-bold mb-16">
        Uma seleção de projetos{" "}
        <span className="text-colorPrimary">responsivos</span> que eu criei onde
        mostro minhas habilidades como{" "}
        <span className="text-colorPrimary">consumo de api</span>,{" "}
        <span className="text-colorPrimary">acessibilidade</span> e muito mais.
      </h1>
      <div className="flex flex-wrap justify-center gap-16">
        {Object.entries(allProjects).map(([key, value])=>(
          <div key={key}>
            <Project key={key} data={value} />
          </div>
        ))}
        <Project data={carHubData} />
        <Project data={blogData} />
        <Project data={bestMovieData} />    
      </div>
    </div>
  );
};

export default projects;
