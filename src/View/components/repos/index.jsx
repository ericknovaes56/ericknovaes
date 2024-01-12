import React, { useState, useEffect , useRef } from 'react';
import repoimg from "../../../assets/img/repositorio.png"
import {motion} from "framer-motion"
import { FaAngleRight } from "react-icons/fa";

export default function Repos() {
  const [repos, setRepos] = useState(['oi']);
  const [widthMax , setWidth] = useState(0)
  const carrossel = useRef()

  useEffect(() => {
    const fetchRepos = async () => {
      try {

        if (localStorage.getItem("repo")){
            const locate = JSON.parse(localStorage.getItem("repo"))
            if (locate.message) {
                localStorage.removeItem("repo")
                return
            }
            setRepos(JSON.parse(localStorage.getItem("repo")))
      
        }else{

            const nome = localStorage.getItem('nome')
      
            const response = await fetch(`https://api.github.com/users/${nome}/repos`);
            const data = await response.json();
            
            if (data && data.message){
                if (nome != "erick"){
                    const response = await fetch(`https://api.github.com/users/ericknovaes56/repos`);
                    const data = await response.json();
                    if (data && data.message) return ;
                    localStorage.setItem("repo",JSON.stringify(data))
    
                    setRepos(data);
                    return
                }
                console.log(data)
                return
            }

            localStorage.setItem("repo",JSON.stringify(data))
    
            setRepos(data);
            
        }



      } catch (error) {
        console.error('Erro ao obter repositórios:', error);
      }
    };
  
    fetchRepos();
  }, []);

  useEffect(() => {
    if (carrossel.current) {
      setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
    }
  }, [carrossel.current]);

  return (
    <div className="repos dif">
      <div className="content-max">
        <h1>Repositórios: </h1>
        <div className="scroll">
            <motion.div ref={carrossel} dragConstraints={{right: 0 , left: -widthMax}} whileTap={{cursor:"grabbing"}} drag="x" className="cards">
            
            { repos.map(repo => (
                <div  target='_blank' key={repo.id} className="card">
                    <img src={repoimg} alt="erro" />
                    <div className="texts">
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <span>Liguagem: {repo.language}</span>
                    </div>
                    <div className="button">
                      <a target='_blank' href={repo.html_url}>Abrir <FaAngleRight fill="gray"/></a>
                    </div>
                </div>
            )) }

            </motion.div>
        </div>
      </div>
    </div>
  );
}
