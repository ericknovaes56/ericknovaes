import getInfosErick from "../../../../Utils/getInfosErick";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Load from "./load";

export default function NavBar(){

    const [data,setDta] = useState("")
    const [component , setComponent] = useState("")

    useEffect(() => {
        const get = async () =>{
            const data = await getInfosErick()

            if (!data) return
 
            if (data.login != "ericknovaes56") {
                
                setComponent("<Load/>")
            }
            setDta(data)
        }
        get()
    }, []);


    return (
        <nav className="menu reveal">
            <div className="content-max">
                <div className="right">
                    {component ? <Load/> : null}
                    <a href='/'>{data ? data.name : ""}</a>
                </div>
                <ul className="options">
                    <li>
                        <a href="#">inicio</a>
                    </li>
                    <li>
                        <a href="#sobre">sobre</a>
                    </li>
                    <li>
                        <a href="#">discord</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}