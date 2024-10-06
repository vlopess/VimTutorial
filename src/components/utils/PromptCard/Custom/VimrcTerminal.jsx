import "../PromptCard.css"
import {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
}

export const VimrcTerminal = () => {
    const control = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }else{
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <motion.div className="card large"
                        ref={ref}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control}
            >
                <div className="top">
                    <p className="title">Terminal</p>
                    <span className="buttons-prompt">
                    <button className="minimize button">
                        <svg viewBox="0 0 10.2 1" y="0px" x="0px"><rect height="1" width="10.2" y="50%"
                                                                        x="0"></rect></svg>
                    </button>
                    <button className="maximize button">
                        <svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path></svg>
                    </button>
                    <button className="close button" onClick={close}>
                        <svg viewBox="0 0 10 10"><polygon
                            points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon></svg>
                    </button>
                </span>
                </div>
                <div className="topfix">
                </div>
                <hr/>
                <div className="content-prompt">
                     <pre>
                      <code>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>1  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}>
                          #inicializa o gerenciador de plugins Pathogen
                        </span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>2  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>execute</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> pathogen#infect()</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>3  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}></span>
                        <span style={{
                            backgroundColor: "#1C1C1C",
                            color: "#6C6C6C"
                        }}>#define o esquema de cores</span><br/>
                          <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>4  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>colorscheme</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> iceberg </span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>5  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>set</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFAF"}}>tabstop</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>=2 </span>
                        <span style={{
                            backgroundColor: "#1C1C1C",
                            color: "#6C6C6C"
                        }}>#define o número de espaços considerado como tab</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>6  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>filetype</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>plugin</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>indent</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>on</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}> #detecta o tipo de arquivo</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>7  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>syntax</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>on</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}> #colore a sintaxe do código de acordo com o tipo de arquivo</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>8  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>set</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFAF"}}>shiftwidth</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>=2 </span>
                        <span style={{
                            backgroundColor: "#1C1C1C",
                            color: "#6C6C6C"
                        }}>#número de espaços da identação</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>9  </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>set</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFAF"}}>number</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}> #ativa a exibição de número de linhas</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>10 </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}>#exibe números de linha relativos à linha em que o cursor está localizado.</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>11 </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>set</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFAF"}}>relativenumber</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>12 </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>set</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFAF"}}>incsearch</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}> #destaca os resultados em uma busca, conforme é digitado</span>
                        <br/>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>13 </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFD7"}}>set</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}> </span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#87AFAF"}}>hlsearch</span>
                        <span style={{backgroundColor: "#1C1C1C", color: "#6C6C6C"}}> #realça a busca</span>
                        <br/>
                      </code>
                    </pre>
                </div>
            </motion.div>
        </>
    );
}