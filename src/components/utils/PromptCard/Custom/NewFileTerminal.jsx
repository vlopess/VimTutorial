import "../PromptCard.css"
import {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
}

export const NewFileTerminal = () => {

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
          <motion.div className="card medium"
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
               <pre style={{
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#1C1C1C"
                }}>
                  <span style={{backgroundColor: "#262626"}}><font color="#4E4E4E">1   </font></span>
                  <span style={{backgroundColor: "#1c1c1c"}}><font color="#1c1c1c">~</font></span>
                  <span style={{backgroundColor: "#1C1C1C"}}><font color="#303030">~</font></span>
                  <span style={{backgroundColor: "#1c1c1c"}}><font color="#303030">~</font></span>
                  <span style={{backgroundColor: "#1c1c1c"}}><font color="#1c1c1c">~</font></span>
                  <span style={{backgroundColor: "#1C1C1C"}}><font color="#D0D0D0">"teste.txt" [Novo]</font></span>
              </pre>
              </div>
          </motion.div>
      </>
    );
}