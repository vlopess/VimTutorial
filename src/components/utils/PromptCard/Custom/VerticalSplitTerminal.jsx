import "../PromptCard.css"
import {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
}

export const VerticalSplitTerminal = () => {
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
              <span style={{backgroundColor: '#262626'}}>
                <span style={{color: '#4E4E4E'}}>1   </span>
              </span>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#D0D0D0'}}>OLA EU SOU O ARQUIVO 2              </span>
              </span>
              <span style={{backgroundColor: '#121212'}}>
                <span style={{color: '#121212'}}>|</span>
              </span>
              <span style={{backgroundColor: '#262626'}}>
                <span style={{color: '#4E4E4E'}}>1   </span>
              </span>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#D0D0D0'}}>OLÁ EU SOU O ARQUIVO 1             </span>
              </span>
              <br/>
              <span style={{backgroundColor: '#262626'}}>
                <span style={{color: '#4E4E4E'}}>  1 </span>
              </span>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#D0D0D0'}}>                                    </span>
              </span>
              <span style={{backgroundColor: '#121212'}}>
                <span style={{color: '#121212'}}>|</span>
              </span>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#303030'}}>~                                      </span>
              </span>
              <br/>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#303030'}}>~                                       </span>
              </span>
              <span style={{backgroundColor: '#121212'}}>
                <span style={{color: '#121212'}}>|</span>
              </span>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#303030'}}>~                                      </span>
              </span>
              <br/>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#303030'}}>~                                       </span>
              </span>
              <span style={{backgroundColor: '#121212'}}>
                <span style={{color: '#121212'}}>|</span>
              </span>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#303030'}}>~                                      </span>
              </span>
              <br/>
                {/* Continue similar for other rows */}
                <span style={{backgroundColor: '#8A8A8A'}}>
                <span style={{color: '#1C1C1C'}}>teste2.txt            1,1           Tudo </span>
              </span>
              <span style={{backgroundColor: '#121212'}}>
                <span style={{color: '#444444'}}>teste.txt       1,1           Tudo</span>
              </span>
              <br/>
              <span style={{backgroundColor: '#1C1C1C'}}>
                <span style={{color: '#D0D0D0'}}>"teste2.txt" 2L, 24B</span>
              </span>
            </pre>
                </div>
            </motion.div>
        </>
    );
}