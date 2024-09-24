import {TerminalCard} from "../../utils/TerminalCard/Custom/TerminalCard.jsx";
import {CodeContainer} from "../../utils/CodeContainer/CodeContainer.jsx";
import {Key} from "../../utils/Key/Key.jsx";
import {NewFileTerminal} from "../../utils/PromptCard/Custom/NewFileTerminal.jsx";
import {Tooltip} from "../../utils/Tooltip/Tooltip.jsx";

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
                <div style={{
                    display: "flex",
                }}>
                    <div style={{display: "contents"}}>
                        <Key text={"V"}/>
                        <Key text={"I"}/>
                        <Key text={"M"}/>
                    </div>
                    <p style={{paddingLeft: "15px"}}>é o comando que invoca o editor vim para um existente arquivo ou
                        novo. A sintaxe para o comando vim é:</p>
                </div>
                <CodeContainer>
                    <p>vi <i>[filename]</i></p>
                </CodeContainer>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p>
                        O <i>filename</i> é opcional, caso ele seja omitido o <b>vim</b> abre com o
                        <Tooltip text={"Área temporariamente reservado na memória"}>buffer</Tooltip>
                        vazio. O <i>filename</i> deve ser único no diretório. tal comando serve para abrir para edição um arquivo ou criar um novo. No exemplo abaixo é feito o passo a passo de como criar um novo arquivo no diretório atual:
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <TerminalCard>
                        <b>user@pc-admin</b>:<b>~</b>$ vim teste.txt<br/>
                    </TerminalCard>
                    +
                    <Key text={"Enter"}/>
                    =
                    <NewFileTerminal/>
                </div>
                <p>Você pode usar o vim para editar qualquer arquivo de texto, para isso, basta passar o caminho do arquivo completo, ou se estiver o seu diretório atual, é só passar o caminho relativo:</p>
                <CodeContainer>
                    <p>vi teste.txt <span className={'comment'}>// se o arquivo estiver no diretório em que você se encontra</span> </p>
                    <p>vi /home/user/teste.txt <span className={'comment'}>// caminho completo para editar um arquivo em um outro diretório</span></p>
                </CodeContainer>
                <div style={{display: "flex", alignItems: "center"}}>
                    <p>É importante ressaltar que o vim copia a arquivo a ser trabalho para o buffer</p>
                </div>
            </div>
        </>
    );
}