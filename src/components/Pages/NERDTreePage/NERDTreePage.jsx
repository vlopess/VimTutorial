import {Key} from "../../utils/Key/Key.jsx";
import NERDTree from "../../../assets/NERDTree.png"

export const NERDTreePage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>NERDTree</span>
            </div>
            <div style={{
                display:"flex"
            }}>
                <p>
                    <b>NERDTree</b> é um dos plugins mais populares para o Vim, oferecendo uma
                    interface de árvore de diretórios que permite navegar facilmente entre
                    arquivos e diretórios. Ele é especialmente útil em projetos com múltiplos
                    arquivos, permitindo que você explore a estrutura do sistema de arquivos
                    dentro do próprio editor.
                </p>
                <img height={300} style={{padding: "15px'''"}}  src={NERDTree} alt="Foto do NERDTree"/>
            </div>
            <h3>Instalação do NERDTree</h3>
            <p>
                Para instalar o NERDTree, você pode usar um gerenciador de plugins,
                como o <code className={"code"}>pathogen</code>. Consulte o repositório
                do <a target={"_blank"} href="https://github.com/tpope/vim-pathogen">Pathogen</a> e <a
                href="https://github.com/preservim/nerdtree" target={"_blank"}>NERDTree</a>, onde tem o passo a
                passo de instalação.
            </p>
            <h3>Comandos Principais</h3>
            <table>
                <tr>
                <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:NERDTree</code>
                    </td>
                    <td>
                        Abre o NERDTree em uma janela lateral.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"O"}/>
                    </td>
                    <td>
                        Abre o arquivo ou expande/colapsa diretórios.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"T"}/>
                    </td>
                    <td>
                        Abre o arquivo em uma nova aba.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"T"}/>
                    </td>
                    <td>
                        Abre o arquivo em uma nova aba.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"I"}/>
                    </td>
                    <td>
                        Abre o arquivo em uma divisão horizontal.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"S"}/>
                    </td>
                    <td>
                        Abre o arquivo em uma divisão vertical.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"S"}/>
                    </td>
                    <td>
                        Abre o arquivo em uma divisão vertical.
                    </td>
                </tr>
            </table>
        </>
    );
}