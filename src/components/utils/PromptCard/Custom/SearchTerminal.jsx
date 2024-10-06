import "../PromptCard.css"
import {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
}

export const SearchTerminal = ({textSearched, isFounded = true, size = "large", highlightedText}) => {
    const control = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref);
    const cardClass = `card ${size}`

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }else{
            control.start("hidden");
        }
    }, [control, inView]);

    return (
      <>
          <motion.div className={cardClass}
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
                <pre
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        backgroundColor: "#1C1C1C"
                    }}
                >
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 1 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 2 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 3 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 4 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  {highlightedText &&(
                      <div>
                        <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}>  </span>
                        <span style={{backgroundColor: "#D0D0D0", color: "#1C1C1C"}}>{highlightedText}</span>
                      </div>
                  )}
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 5 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 6 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 7 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 8 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <div>
                      <span style={{backgroundColor: "#262626", color: "#4E4E4E"}}> 9 </span>
                      <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>oi</span>
                  </div>
                  <span style={{backgroundColor: "#1C1C1C", color: "#303030"}}>
                    ~
                  </span>
                  <span style={{backgroundColor: "#1C1C1C", color: "#303030"}}>
                    ~
                  </span>
                  <span style={{backgroundColor: "#1C1C1C", color: "#303030"}}>
                    ~
                  </span>
                    {isFounded && (
                        <span style={{backgroundColor: "#1C1C1C", color: "#D0D0D0"}}>
                            /{textSearched}
                        </span>
                    )}
                    {!isFounded && (
                        <span style={{backgroundColor: "#1C1C1C", color: "#FF5F5F"}}>
                            E486: Padrão não encontrado: {textSearched}
                        </span>
                    )}
                </pre>
              </div>
          </motion.div>
      </>
    );
}