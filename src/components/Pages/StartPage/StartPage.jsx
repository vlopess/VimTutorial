import "./StartPage.css";
import {PromptCard} from "../../utils/PromptCard/PromptCard.jsx";
import { motion } from "framer-motion";

export const StartPage = () => {
    return (
        <>
            <div className={"title-text"}>
                    <span>Início</span>
            </div>
            <motion.div style={{
                display: "flex",
                justifyContent: "space-between"
            }}
            initial={{ y: 2500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            >
                <p style={{width:"50%", textAlign:"justify"}}>Este tutorial é projetado para guiá-lo através dos conceitos fundamentais do Vim e ajudá-lo a se
                    tornar proficiente com este editor poderoso. Vamos começar explorando o básico e, gradualmente,
                    avançar para técnicas mais avançadas.</p>
                <PromptCard/>
            </motion.div>
        </>
    );
}