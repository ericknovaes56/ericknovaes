import { useEffect } from "react";
import Header from "../../components/header"
import NavBar from "../../components/layout/navbar"
import Repos from "../../components/repos"
import getInfosErick from "../../../Utils/getInfosErick";
import { motion, useScroll } from "framer-motion"
import Count from "../../components/count";
import Projects from "../../components/projects";
import Carreira from "../../components/carreira";
import Chat from "../../components/chat";
import Footer from "../../components/footer";


export default function Home(){

    const { scrollYProgress } = useScroll();

    useEffect(() => {

        const get = async () => {
            const infos = await getInfosErick()
            if (infos){
                document.title = infos.name;
            }
        }
        get()
      
    }, []);

    return (
        <>
            <NavBar/>
            <motion.div className="bar" style={{ scaleX: scrollYProgress}} />  
            <Header/>
            <Repos/>
            <Count/>
            <Projects/>
            <Carreira/>
            <Chat/>
            <Footer/>
        </>
    )
}