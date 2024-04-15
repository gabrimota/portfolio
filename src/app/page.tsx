
// aqui ficam as importações que vou utilizar
import Header from "./components/Header/header"
import React from "react";
import "./home.scss"
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
export default function Home() {
  // funções criadas para cada ícone quando alguém clicar
  function TwitterClick(){
    alert("Twitter")
  }
  function GithubClick(){
    alert("Github")

  }function InstragamClick(){
    alert("Instagram")

  }
  return (
    // main é o container, esse container vai aplicar um estilo em todos os componentes da pagina
   <main className="container">  
    {/* classe feita para o "header" é a img , meu nome e oq eu faço */}
    <Header/>
  <div className="experience">
        <h2> Experiencia</h2>
        <p> texto</p>
    <div className="experience-time">
     <h3>1 ano de faculdade / React Iniciante / Flutter Iniciante</h3>
     </div>
     </div>

   <div className="infos"> 
    <h3>Languages</h3>
   <div className="language-infos">
    <span>🇧🇷 Pt-Br Native Speaker</span>
    <span> 🇺🇸 Inglês Básico</span>
   </div>

   <div className="education">
    <h3>Education</h3>
   <div className="education-infos">
    <span> 🎓 Universidade de Araraquara</span>
   </div>
   

    <div className="buttons">
     <button> Contact Me!</button>
    </div>
    </div>
   
   </div>
    
    </main>
    
  );
}
