import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getInfosErick from "../../../Utils/getInfosErick";
import Erick from "./erick";
import Client from "./client";

export default function Chat() {
    const [data, setData] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const messagesRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getInfosErick();
            setData(fetchedData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Scroll automaticamente para o final quando as mensagens mudarem
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, [messages]);

    const handleQuestionClick = (e) => {
        const questionContent = e.target.innerHTML;
        const questionid = e.target.id;

        // Adiciona a mensagem do cliente
        setMessages((prevMessages) => [
            ...prevMessages,
            { id: prevMessages.length + 1, role: "client", content: questionContent },
        ]);

        // Simula a resposta do Erick com base no ID da pergunta
        const erickResponse = getErickResponse(questionid);

        // Aguarda um breve momento (por exemplo, 1 segundo)
        setTimeout(() => {
            // Adiciona a resposta do Erick
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, role: "erick", content: erickResponse },
            ]);
        }, 1000);
    };

    const getErickResponse = (question) => {
        // Simula a lógica para obter a resposta do Erick com base na pergunta
        // Aqui, estou usando um exemplo simples; você pode ajustar conforme necessário.
        if (question.toLowerCase() === "demora") {
            return "O tempo para fazer um projeto depende do escopo e da complexidade. Podemos discutir mais detalhes para fornecer uma estimativa mais precisa. mas o mínimo é 1 mês :)";
        } else if (question.toLowerCase() === "orçamento") {
            return "O orçamento depende do escopo do projeto. Podemos discutir detalhes para fornecer uma estimativa mais precisa.";
        } else if (question.toLowerCase() === "pagamento") {
            return "Atualmente só trabalhamos com o metodo pix. ";
        } else if (question.toLowerCase() === "suporte") {
            return "Sim, oferecemos suporte técnico para os projetos que desenvolvemos. Fique à vontade para entrar em contato se precisar de assistência.";
        } else if (question.toLowerCase() === "disponivel") {
            return "Estou disponível a partir das 12h da manhã. todos os dias !";
        } else {
            return "Desculpe, não entendi sua pergunta. Pode reformular ou escolher outra opção?";
        }
        
    };

    return (
        <section className="chat">
            <div className="content-max">
                <span>#duvidas ? </span>
                <div className="box-chat">
                    <div className="msgs" ref={messagesRef}>
                        <Erick data={data} msg="Que tal você mandar uma pergunta legal aí? 😀" />
                        <AnimatePresence>
                            {messages.map((message) => (
                                <React.Fragment key={message.id}>
                                    {message.role === "client" ? (
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                        >
                                            <Client msg={message.content} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                        >
                                            <Erick data={data} msg={message.content} />
                                        </motion.div>
                                    )}
                                </React.Fragment>
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="questions">
                        <span id="demora" onClick={handleQuestionClick}>
                           Tempo para entregar ?             
                        </span>
                        <span id="orçamento" onClick={handleQuestionClick}>
                            Qual o orçamento?
                        </span>
                        <span id="pagamento" onClick={handleQuestionClick}>
                            Método de pagamento
                        </span>
                        <span id="suporte" onClick={handleQuestionClick}>
                            Tem suporte?
                        </span>
                        <span id="disponivel" onClick={handleQuestionClick}>
                            Disponível quando?
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
