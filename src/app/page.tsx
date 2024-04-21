
// aqui ficam as importações que vou utilizar
import Experience from "./components/Experience/experience";
import Header from "./components/Header/header"
import React from "react";
import "./home.scss"
import { GiBrazilFlag } from "react-icons/gi";
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
    <div className="infos"> 
    <Experience/>
    
    <h3>Languages</h3>
   <div className="language-infos">
    <span><GiBrazilFlag style={{color:"yellow" , height:"100px", width:"100px", }} /> Pt-Br Native Speaker</span>
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
