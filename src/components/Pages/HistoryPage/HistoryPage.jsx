import "./HistoryPage.css";

export const HistoryPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>História</span>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <p>
                        Vim é um acrônimo para <i>Vi Improved (Vi Melhorado)</i>, um editor de texto de terminal
                        multiplataforma gratuito e de código aberto, é uma versão aprimorada do editor de
                        texto Vi. Foi lançado pela primeira vez
                        por
                        Bram Moolenaar em 1991 para variantes UNIX.
                    </p>
                    <h3 style={{color: "#05b437", margin: "0"}}>Origens do Vi</h3>
                    <p>
                        <i><b>Vi</b></i> é abreviação parar <b>vi</b>sual editor e se pronúncia <i>"vee-eye"</i>.
                        O Vim é baseado no editor Vi original, criado por Bill Joy em 1976. Nos anos 90, começou a ficar
                        claro que o Vi carecia de alguns recursos quando comparado com o editor Emacs. Então Bram
                        implementou muitos recursos ausentes e o lançou sob o nome de Vim.

                        Vim é um editor modal, o que significa que ele possui diferentes modos para
                        diferentes tipos de operações, como inserção, navegação e comando.
                    </p>
                    <h3 style={{color: "#05b437", margin: "0"}}>Sobre o Criador</h3>
                    <p>
                        Uma característica única de Bram Moolenaar é que ele sempre usou o Vim como uma ferramenta para promover
                        caridade. Ele incentivava doações para a caridade holandesa <a href="https://iccf.nl/news.html" target={"_blank"}>ICCF Holland</a>, que apoia crianças órfãs em Uganda.
                    </p>
                </div>
                <div style={{
                    width: "265px"
                }}>
                    <img src="https://th.bing.com/th/id/OIP.D2TM_9n01VR8AH3w485I1QHaJ0?rs=1&pid=ImgDetMain"
                         alt="Creator Vim Image" height={300}/>
                    <p style={{
                        fontSize: 12,
                        textAlign: "center",
                        margin: "1px"
                    }}>
                        Bram Moolenaar (1961 - 2023), Criador Do Vim.
                    </p>
                </div>
            </div>
            <p>
            </p>
        </>
    );
}
