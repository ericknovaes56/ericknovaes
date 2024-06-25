import cr from "../../../assets/img/cr2.jpg"
import karina from "../../../assets/img/karina.jpg"
import jhon from "../../../assets/img/jhon.jpg"
export default function Projects(){
    return (
        <section className="projects">

            <div className="content-max">
                <span className="title"><span>Principais</span> <strong>projetos</strong></span>
                <div className="projects-pai">
                    <div className="card">
                        <img src={cr} />
                        <div className="text">
                            <h1>Crenglish</h1>
                            <p>A Crenglish é uma plataforma de inglês online com diversas atividades e funções diferentes. O projeto foi desenvolvido com diversas tecnologias para torná-lo flexível a mudanças.</p>
                            <a target="_blank" href="https://crenglish.site" className="button-a">Abrir projeto</a>
                        </div>
                    </div>
                    <div className="card reverse-order">
                        <img src={karina} />
                        <div className="text">
                            <h1>Dra Do Laser</h1>
                            <p>O site Dra do Laser oferece um curso e uma comunidade para profissionais da saúde que desejam se especializar em laserterapia. O método 4K, principal abordagem do curso, destaca-se pela rapidez, praticidade e humanização. A plataforma inclui aulas gravadas e ao vivo, certificado ao final do curso, e material digital de apoio.</p>
                            <a target="_blank" href="https://dradolaser.com.br/" className="button-a">Abrir projeto</a>
                        </div>
                    </div>
                    <div className="card ">
                        <img src={jhon} />
                        <div className="text">
                            <h1>Jhon</h1>
                            <p>A LP do John não foi desenvolvida por mim diretamente, mas alguns elementos foram desenvolvidos por nós, deixando o site dinâmico e combinando o melhor dos mundos de no-code e novas tecnologias.</p>
                            <a href="#" className="button-a">Não disponível</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}