import {TerminalCard} from "../../utils/TerminalCard/Custom/TerminalCard.jsx";
import {CodeContainer} from "../../utils/CodeContainer/CodeContainer.jsx";
import {Key} from "../../utils/Key/Key.jsx";
import {NewFileTerminal} from "../../utils/PromptCard/Custom/NewFileTerminal.jsx";
import "./IntroductionPage.css";

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
                    Para verificar se o Vim
                    está instalado corretamente na sua máquina, utilize o comando <code className={"code"}>which
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
                <p>Feito isso, já é possível começar a usar o Vim.</p>
                <div className={"title-text"}>
                    <span>Sintaxe de linha de comando</span>
                </div>
                <h3 style={{color: "#05b437", margin: "0"}}>Abrindo um arquivo</h3>
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
                        O <i>filename</i> é opcional, caso ele seja omitido o <b>vim</b> abre com o o buffer (Área
                        temporariamente reservado na memória) vazio. O <i>filename</i> deve ser único no diretório. Tal
                        comando serve para abrir para edição um arquivo ou criar um novo. No exemplo abaixo é feito o
                        passo a passo de como criar um novo arquivo no diretório atual:
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
                <p>
                    No resultado é visível, na coluna esquerda da tela, há uns tils (~) que indicam
                    que não há texto em o arquivo. Já na parte inferior, tem a chamada <i>linha de status</i>
                    que tem o nome e o status do arquivo.
                </p>
                <p>Você pode usar o vim para editar qualquer arquivo de texto, para isso, basta passar o caminho do
                    arquivo completo, ou se estiver o seu diretório atual, é só passar o caminho relativo:</p>
                <CodeContainer>
                    <p>vi teste.txt <span className={'comment'}>// se o arquivo estiver no diretório em que você se encontra</span>
                    </p>
                    <p>vi /home/user/teste.txt <span className={'comment'}>// caminho completo para editar um arquivo em um outro diretório</span>
                    </p>
                </CodeContainer>
                <h3 style={{color: "#05b437", margin: "0"}}>Salvando e fechando um arquivo</h3>
                <div style={{display: "flex", alignItems: "center"}}>
                    <p>
                        É importante ressaltar que o Vim copia a arquivo a ser trabalhado para o
                        buffer e todas as edições feitas no arquivo não afetaram o arquivo original
                        até que seja feita o salvamento.
                    </p>
                </div>
                <span> Para todos os comandos abaixo, verifique se está no <i>modo de comando</i> pressionando a tecla <Key
                    text={"Esc"}/> e depois entre com o comando.</span>
                <p>
                    Caso deseje sair do arquivo em que esteja trabalhando e salvar o conteúdo, o
                    comando para sair e salvar é<code className={"code"}>ZZ</code>. Se quiser somente salvar use
                    o <code className={"code"}>:w</code> (write) e o <code className={"code"}>:q</code> (quit) para
                    sair se houver mudanças salvas, porém, caso tenha escrito algo e não tenha salvo
                    com o <code className={"code"}>:w</code>, ocorrerar um erro ao sair <i style={{color: "red"}}>(E37:
                    Alterações não foram gravadas (adicione ! para forçar))</i>,
                    sendo ele solucionado com <code className={"code"}>:q!</code>, que força a saída descartando as
                    alterações. Mas se quiser só desfazer tudo que foi feito desde a última escrita no arquivo original,
                    basta forçar com o comando <code className={"code"}>:e!</code>. Você pode mesclar os comandos acima<code className={"code"}>:wq</code>, para salvar e sair, o
                    equivalente a<code className={"code"}>ZZ</code>.
                </p>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <NewFileTerminal/>
                    +
                    <Key text={"Esc"}/>
                    <Key text={"Shift"}/>
                    <Key text={"Z"}/>
                    <Key text={"Z"}/>
                    =
                    <TerminalCard>
                        <b>user@pc-admin</b>:<b>~</b>$ ls<br/>
                        teste.txt
                    </TerminalCard>
                </div>
                <p>Há outras maneiras de salvar e sair de um arquivo no Vim. Segue abaixo todos os possíveis comandos:</p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                    </tr>
                    <tr>
                        <td><b>ZZ</b></td>
                        <td>Fecha o <b>vi</b>, grava o arquivo somente se as alterações foram feitas.</td>
                    </tr>
                    <tr>
                        <td><b>:x</b></td>
                        <td>O mesmo que ZZ</td>
                    </tr>
                    <tr>
                        <td><b>:w <i>arquivo</i></b></td>
                        <td>Salva a cópia para <i>arquivo</i></td>
                    </tr>
                    <tr>
                        <td><b>:w</b></td>
                        <td>Grava o arquivo</td>
                    </tr>
                    <tr>
                        <td><b>:q</b></td>
                        <td>Fecha o arquivo</td>
                    </tr>
                    <tr>
                        <td><b>:q!</b></td>
                        <td>Fecha o arquivo, descartando as alterações</td>
                    </tr>
                </table>
            </div>
        </>
    );
}