import wave from "../../../assets/img/wave.svg"

export default function Footer(){
    return (
        <footer className="dif">
            <div className="content-max">
                <div className="text">
                    <h1>Oi, você chegou ao fim.</h1>
                    <p>
                        Oi, realmente espero que tenha gostado de me conhecer melhor. Estou ansioso para fazer negócios com você! 😊</p>

                        <div className="buttons">
                            <a className="button-a" href="/contact">Contactar</a>
                            <a className="button-a" href="#">WhatsApp</a>
                        </div>
                </div>
            </div>
            <img src={wave} className="wave" alt="erro" />
        </footer>
    )
}