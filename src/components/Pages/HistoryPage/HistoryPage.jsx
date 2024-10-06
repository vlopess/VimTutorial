import "./HistoryPage.css";
import {useEffect} from "react";

export const HistoryPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

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
                    <h3 style={{color: "#05b437", margin: "0"}}>Origens do Vim</h3>
                    <p>
                        O Vim é baseado no editor Vi original, criado por <a
                        href="https://en.wikipedia.org/wiki/Bill_Joy#:~:text=William%20Nelson%20Joy%20(born%20November%208,%201954)%20is%20an%20American"
                        target={"_blank"}>Bill Joy</a> em 1976. <i><b>Vi</b></i> é abreviação para <b>vi</b>sual editor e se pronúncia <i>"vee-eye"</i>, é um editor de texto orientado a tela para sistemas UNIX e
                        oferecia uma interface minimalista, que permitia aos usuários navegar e editar texto de forma
                        rápida, sem depender do mouse.
                        Nos anos 90, começou a ficar
                        claro que o Vi carecia de alguns recursos quando comparado com o editor Emacs.
                        O objetivo de Moolenaar era oferecer um editor mais poderoso, que incluísse
                        recursos adicionais como suporte a múltiplos arquivos, destaque de sintaxe, e uma interface mais
                        amigável.
                        Então Moolenaar implementou recursos ausentes e o lançou sob o nome de Vim.
                        Vim é um editor modal, o que significa que ele possui diferentes modos para
                        diferentes tipos de operações, como inserção, navegação e comando.
                    </p>
                    <p>
                        O Vim foi lançado como um software livre, permitindo que desenvolvedores contribuíssem para seu
                        aprimoramento. Ao longo dos anos, a comunidade do Vim cresceu, com muitos plugins, scripts e
                        recursos personalizados sendo criados por usuários ao redor do mundo. O Vim continuou a evoluir,
                        recebendo atualizações regulares que introduziram novos recursos, melhorias de desempenho e suporte
                        a mais linguagens de programação. A história do Vim continua a ser escrita, com uma comunidade ativa
                        que constantemente inova e compartilha recursos. O editor também inspirou a criação de diversos forks
                        e variações, como o <a href="https://neovim.io/" target={"_blank"}>Neovim</a>, que busca modernizar ainda mais a experiência do Vim.
                    </p>
                </div>
            </div>
            <p>

            </p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div>
                    <h3 style={{color: "#05b437", margin: "0"}}>+ Sobre o Criador</h3>
                    <p>
                        O engenheiro de software holandês <a href="https://en.wikipedia.org/wiki/Bram_Moolenaar"
                                                             target={"_blank"}><b>Bram Moolenaar</b></a> foi quem criou
                        o Vim, além disso era
                        defensor do software livre
                        permitindo que a comunidade contribuissem para o desenvolvimento do vim. Ademais, ele usou o Vim
                        como uma ferramenta para promover
                        caridade. Ele incentivava doações para a caridade holandesa <a href="https://iccf.nl/news.html"
                                                                                       target={"_blank"}>ICCF
                        Holland</a>,
                        que apoia crianças órfãs em Uganda.
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
        </>
    );
}
