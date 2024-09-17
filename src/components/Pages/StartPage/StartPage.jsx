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
                margin: "15px",
                alignItems: "center"
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
            <div style={{
                margin: "15px",
                display: "flex",
                justifyContent: "space-between",
            }}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src="https://cdn-media-1.freecodecamp.org/images/1*BPkK5FHiS6rXsygxNoO2XA.jpeg" alt="Meme vim"
                         height={400}/>
                    <div style={{margin: "15px"}}>
                        <h3><i> Todo novo usuário de Vim já passou por isso.</i></h3>
                        <p style={{
                            fontSize: "20px"
                        }}>
                            Se você já abriu o Vim acidentalmente e não soube como sair, você não está sozinho! Este
                            tutorial vamos abordar desde as situações mais básicas até as mais avançadas, mostrando que
                            o Vim não é um bicho de sete cabeças.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                margin: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div style={{margin: "15px"}}>
                    <h3><i>Teclado: a base da filosofia do Vim.</i></h3>
                    <p style={{
                        fontSize: "20px"
                    }}>
                        Com o Vim você vai aprender a usar o teclado para tudo, de forma tão natural que o mouse vai
                        parecer dispensável, se quiser jogue até fora (brincadeira!).
                        O Vim foi projetado para ser uma ferramenta extremamente eficiente, especialmente para
                        desenvolvedores e usuários que passam muito tempo escrevendo ou editando texto.
                    </p>
                </div>

                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src="https://cdn-images-1.medium.com/v2/resize:fit:1000/0*rhCO6LMoqncOddAO" alt="Meme vim"
                         height={400}/>
                </div>
            </div>
            <div className={"title-text"}>
                <span>Referências</span>
            </div>
            <p>Para a elaboração deste tutorial sobre o Vim, foram consultadas várias fontes e recursos confiáveis que ajudam a compreender melhor. Essas referências são um ótimo ponto de partida para que os leitores do seu tutorial possam continuar aprendendo e explorando o Vim por conta própria. Aqui estão as principais referências utilizadas:</p>
            <ul>
                <li>
                    <span><a style={{color: "#05b437"}} href="https://www.vim.org/">Documentação Oficial</a></span>:
                    Conheça o site oficial do editor.
                </li>
                <li>
                    <span style={{color: "#05b437"}}>Vim: boas práticas a edição no terminal</span>: Primeiro contato que tive com o Vim e aprendi várias coisas foi nesse curso da Alura. O link é esse <a href="https://www.alura.com.br/curso-online-vim">[acessar]</a>  mas por algum motivo não é mais acessível, talvez só se tiver a conta.
                </li>
                <li>
                    <span><a style={{color: "#05b437"}} href="https://www.amazon.com.br/Linux-Guia-Essencial-Ellen-Siever/dp/8560031006">Linux: O Guia Essencial</a></span>: Foi esse livro, e juntamente com o curso, que me fez querer fazer o tutorial. Boa parte das minhas referências veio dele, principalmente a estrutura, como a lista alfabética de teclas.
                </li>
                <li>
                    <span><a style={{color: "#05b437"}} href="https://www.amazon.com/Vim-Editors-Pocket-Reference-Support/dp/1449392172/ref=sr_1_1?crid=2IRFAG1129MKA&dib=eyJ2IjoiMSJ9.Q9wL_SZVbI1HNz2wuiWIliw2_Y2NuxHGMF9mK18mPEyqmUb0Ky9vbBlQcdZziExxGXOtDAZT2J8J8g9NaOdgEEmeFobra2Sd4nCwyPR8MU1lqzdbk0xVfeZb_IUU16kOKlZTTVPBWiwodqb_ImjubM5YZCGeyRirw9hzxyb0sIu1l3X4JNjxxsbRhGvCwIU3zAm1Dy9dVY_zFYGQ40mE6cDbXnDS2itiGQ3L37f_cpk.TTjyQA2Ny8If_IDyVrTo-H0N2NNerdNEqVwhTyB40zE&dib_tag=se&keywords=vi+editor+6th&qid=1726531333&s=books&sprefix=vi+editor+6th%2Cstripbooks-intl-ship%2C151&sr=1-1">VI and VIM Editors Pocket Reference</a></span>: Não li, mas o livros anterior indicou.
                </li>
            </ul>
        </>
    );
}