import "./StartPage.css";
import {VimTerminal} from "../../utils/PromptCard/Custom/VimTerminal.jsx";
import {TerminalCard} from "../../utils/TerminalCard/Custom/TerminalCard.jsx";


export const StartPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Início</span>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "15px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%"

                }}>
                    <p style={{textAlign: "justify"}}>Este tutorial é projetado para guiá-lo através dos
                        conceitos fundamentais do Vim e ajudá-lo a se
                        tornar proficiente com este editor poderoso. Vamos começar explorando o básico e, gradualmente,
                        avançar para técnicas mais avançadas.
                    </p>
                    <div>
                        <h3>Por que Usar o <span style={{color: "#05b437"}}>Vim</span>?</h3>
                        <ul>
                            <li>
                                <span style={{color: "#05b437"}}>Eficiência</span>: Com sua abordagem baseada em modos,
                                você pode realizar operações complexas
                                com
                                uma
                                combinação mínima de teclas.
                            </li>
                            <li>
                                <span style={{color: "#05b437"}}>Personalização</span>: O Vim pode ser altamente
                                personalizado através de configurações e
                                plugins
                                para
                                se adaptar a qualquer fluxo de trabalho.
                            </li>
                            <li>
                                <span style={{color: "#05b437"}}>Velocidade</span>: Com a prática, o Vim permite
                                uma edição de texto extremamente rápida e
                                fluida.
                            </li>
                        </ul>
                    </div>
                </div>
                <VimTerminal/>
            </div>
            <div style={{margin: "15px"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src="https://cdn-images-1.medium.com/v2/resize:fit:1000/0*rhCO6LMoqncOddAO" alt="Meme vim"
                         height={400}/>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "start"}}>
                    <div>Teste</div>
                    <img src="https://cdn-media-1.freecodecamp.org/images/1*BPkK5FHiS6rXsygxNoO2XA.jpeg" alt="Meme vim"
                         height={400}/>
                </div>
            </div>
            <div className={"title-text"}>
                <span>Instalação</span>
            </div>
            <p>
                Para começarmos, certifique-se que tem o Vim instalado no seu computador. Se você usa Linux ou macOS,
                provavelmente já está pré-instalado. Para certas distribuições do Linux baseadas no debian, execute os comandos
                <code className={"code"}>sudo apt-get update</code> <code className={"code"}> sudo apt-get install vim</code>
            </p>
            <TerminalCard/>
            {/*<CodeContainer code={"import { useInView } from \"framer-motion\""}/>*/}
        </>
    );
}