import React from "react";
import world from "../../../assets/img/world.png";
import axspear from "../../../assets/img/axspear.jpg";
import devworld from "../../../assets/img/devworld.png";
import pdf from "../../../assets/cv/curri.pdf";
import { useEffect } from "react";

export default function Carreira() {

    const onmouse = (e) => {
        for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    
      useEffect(() => {
        document.addEventListener("mousemove", onmouse);
    
        return () => {
          document.removeEventListener("mousemove", onmouse);
        };
      }, []);
    

  return (
    <section className="carreira" id="sobre">
      <div className="content-max" onMouseMove={onmouse}>
        <div className="text">
          <span>#Carreira Academica</span>
        </div>
        <div className="container card">
          <div className="text">
            <h1>Formação</h1>
            <p>
              Com o ensino médio completo, Erick possui o curso técnico em
              logística, feito simultaneamente enquanto estudava no ensino
              médio. Participou de diversos eventos relacionados ao
              empreendedorismo, ganhando uma mentoria chamada "On The Game",
              realizada pela equipe da 3S.
            </p>

            <p>
              Graças ao "On The Game", teve a oportunidade de participar do
              maior evento de empreendedorismo do sertão, o "Congresso
              Empresarial do Sertão, 2ª edição".
            </p>

            <div className="div-btn">
              <a href={pdf} className="button-a" download>
                Currículo
              </a>
              <a href="/contact" className="button-a">
                Contactar
              </a>
            </div>
          </div>
          <img src={world} alt="erro" />
        </div>
        <div className="oter">
          <div className="proje card">
            <div className="profile">
              <img src={axspear} alt="axspear" />
              AxSpear
            </div>
            <p>
              AxSpear é uma empresa de soluções digitais, contando com
              programadores e designers. Adquirimos experiência trabalhando
              para alguns clientes que nos tornaram mais fortes e nos deixaram
              com credibilidade. Hoje, continuamos trabalhando na empresa e
              resolvendo problemas.
            </p>
            <a
              href="https://www.instagram.com/axspear_/"
              target="_blank"
              className="button-a"
            >
              Conhecer
            </a>
          </div>
          <div className="proje card">
            <div className="profile">
              <img src={devworld} alt="devworld" />
              DevWorld
            </div>
            <p>
              A DevWorld é uma comunidade de programação no Discord fundada por
              Adrian e co-fundada por mim, Erick. A comunidade continua
              crescendo todos os dias, com novos membros.
            </p>
            <a
              href="https://discord.gg/RTrYkuwH"
              className="button-a"
              target="_blank"
            >
              Entrar na comunidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
