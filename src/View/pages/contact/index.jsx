import getInfosErick from '../../../Utils/getInfosErick'
import '../../../assets/css/contato.css'
import zap from '../../../assets/img/image.png'
import { useEffect, useState } from "react"
export default function Contact(){

    const [data, setData] = useState("")

    useEffect(() => {
        const get = async () =>{

            const data = await getInfosErick()
    
            setData(data)
        }
        get()
    }, []);

    return (
        <main>
            <div className="content-max collum">
                <div className="back">
                    <a href='/'>Voltar</a>
                </div>
                <div className="top">
                    <img src={data.avatar_url} />
                    <h1>{data.name}</h1>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={zap}  alt="Descrição da imagem" />
                        <h1>WhatsApp</h1>
                    </div>
                    <div className="card">
                        <img src={zap}  alt="Descrição da imagem" />
                        <h1>WhatsApp</h1>
                    </div>
                    <div className="card">
                        <img src={zap}  alt="Descrição da imagem" />
                        <h1>WhatsApp</h1>
                    </div>
                    <div className="card">
                        <img src={zap} alt="Descrição da imagem" />
                        <h1>WhatsApp</h1>
                    </div>
                    <div className="card">
                        <img src={zap}  alt="Descrição da imagem" />
                        <h1>WhatsApp</h1>
                    </div>
                </div>
                
            </div>

    
        </main>
    )
}