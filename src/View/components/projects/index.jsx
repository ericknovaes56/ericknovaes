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
                            <h1>Meu projeto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nihil fuga laudantium error beatae delectus, blanditiis et, mollitia eum earum iusto dolores nisi nostrum dignissimos sed. Neque eius mollitia est!</p>
                            <a href="#" className="button-a">Abrir projeto</a>
                        </div>
                    </div>
                    <div className="card reverse-order">
                        <img src={karina} />
                        <div className="text">
                            <h1>Meu projeto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nihil fuga laudantium error beatae delectus, blanditiis et, mollitia eum earum iusto dolores nisi nostrum dignissimos sed. Neque eius mollitia est!</p>
                            <a href="#" className="button-a">Abrir projeto</a>
                        </div>
                    </div>
                    <div className="card ">
                        <img src={jhon} />
                        <div className="text">
                            <h1>Meu projeto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nihil fuga laudantium error beatae delectus, blanditiis et, mollitia eum earum iusto dolores nisi nostrum dignissimos sed. Neque eius mollitia est!</p>
                            <a href="#" className="button-a">Abrir projeto</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}