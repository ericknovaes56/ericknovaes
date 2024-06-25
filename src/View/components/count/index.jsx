import { useState, useEffect } from "react";
import getInfosErick from "../../../Utils/getInfosErick";
import wave from "../../../assets/img/wave.svg"
import Xp from "./erick";

export default function Count() {
  const [seguidores, setSeguidores] = useState(0);
  const [seguindo, setSeguindo] = useState(0);
  const [data, setData] = useState("");
  const [link, setImg] = useState([]);

  useEffect(() => {
    const get = async () => {
      const infos = await getInfosErick();
      if (infos) {
        setData(infos);
        setSeguidores(infos.followers);
        setSeguindo(infos.following);
      }
    };

    get();

    const repos = JSON.parse(localStorage.getItem("repo"));
    if (repos) {
      const linguagensUnicas = [
        ...new Set(repos.filter(repo => repo.language).map(repo => repo.language))
      ];

      const newLinks = linguagensUnicas.map(element =>
        `https://img.icons8.com/ios/452/${element.toLowerCase()}.png`
      );

      setImg(newLinks);
    }else{
        reload(repos)
    }

    function reload(){

        const repos = JSON.parse(localStorage.getItem("repo"));

        if (repos){
            const linguagensUnicas = [
                ...new Set(repos.filter(repo => repo.language).map(repo => repo.language))
              ];
        
              const newLinks = linguagensUnicas.map(element =>
                `https://img.icons8.com/ios/452/${element.toLowerCase()}.png`
              );
        
              setImg(newLinks);
        }else{
            setTimeout(() => {
                reload()
            }, 1000);
        }

        
    }


  }, []);



  return (
    <div className="count dif" id="perfil">
      <div className="content-max">
        <div className="text">
          <span>#Perfil</span>
          <div className="profile">
            <img src={data.avatar_url} alt="avatar" />
            <span>{data.name}</span>
          </div>
        </div>
        <div className="seg-part">
          <div className="seg">
            <h1>Seguidores</h1>
            <span>{seguidores}</span>
          </div>
          <div className="seg">
            <h1>Seguindo</h1>
            <span>{seguindo}</span>
          </div>
        </div>
        <div className="xp">
          {data.login !== "ericknovaes56" ? "💼 Minhas experiências:" : ""}
          <div className="lengs">
            {data.login !== "ericknovaes56" ?
              link.map((repo, index) => (
                <img key={index} className="reverse" src={repo} width="50px" alt="icone" />
              )) : <Xp/>}
          </div>
        </div>
      </div>
      <img src={wave} className="wave wave2" alt="erro" />
    </div>
  );
}
