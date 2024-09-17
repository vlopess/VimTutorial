import {TerminalCard} from "../../utils/TerminalCard/Custom/TerminalCard.jsx";
import {CodeContainer} from "../../utils/CodeContainer/CodeContainer.jsx";

export const IntroductionPage = () => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div className={"title-text"}>
                    <span>Instalação</span>
                </div>
                <p>
                    Para começarmos, certifique-se que tem o Vim instalado no seu computador. Se você usa Linux ou
                    macOS,
                    provavelmente já está pré-instalado. Para certas distribuições do Linux baseadas no debian, execute
                    os comandos
                    <code className={"code"}>sudo apt-get update</code> e <code className={"code"}> sudo apt-get install
                    vim</code> para instalar. Caso deseje baixar no Windows ou escolher entre as opções de instalação,
                    acesse a <a
                    href="https://www.vim.org/download.php" target={"_blank"}>página oficial de download do Vim</a>.
                    Verifique se o Vim
                    está instalado corretamente na sua máquina usando o comando <code className={"code"}>which
                    vim</code>, tendo como saída esperada <code className={"code"}>/usr/bin/vim</code>, como é mostrado
                    abaixo:
                </p>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "25px 0"
                }}>
                    <TerminalCard>
                        <b>user@pc-admin</b>:<b>~</b>$ which vim <br/>
                        /usr/bin/vim<br/>
                        <b>user@pc-admin</b>:<b>~</b>$
                    </TerminalCard>
                </div>
                <div className={"title-text"}>
                    <span>Sintaxe de linha de comando</span>
                </div>
                <p>As maneiras mais comuns de iniciar uma sessão de vi são:</p>
                <CodeContainer>
                    <p>vi <i>arquivo</i></p>
                    <p>vi</p>
                </CodeContainer>
                <p>A primeira opção você abre o <i>arquivo</i> para editar, no entanto, se não for passado nenhum arquivo, o <b>vi</b> abre com o buffer vazio, segundo cenário.</p>
            </div>
        </>
    );
}