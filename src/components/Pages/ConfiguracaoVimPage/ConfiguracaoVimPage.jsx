import {CodeContainer} from "../../utils/CodeContainer/CodeContainer.jsx";
import {VimrcTerminal} from "../../utils/PromptCard/Custom/VimrcTerminal.jsx";

export const ConfiguracaoVimPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Configurações do Vim</span>
            </div>
            <p>
                O Vim é altamente configurável e oferece várias opções para personalizar
                o editor de acordo com suas preferências. As configurações do Vim são
                feitas no arquivo de configuração chamado .vimrc (ou _vimrc no Windows).
                Nesse arquivo, você pode definir comandos, atalhos, mapeamentos de teclas,
                aparência, comportamento do editor e muito mais. Esse arquivo é lido toda
                vez que o Vim é iniciado. O arquivo <code className={"code"}>.vimrc</code>
                geralmente está localizado no diretório inicial do seu usuário. A localização
                exata pode variar dependendo do sistema operacional, mas, em geral, você o
                encontrará nos seguintes locais:
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width:"100%"
                }}
            >
                <div>
                    <p><b>No Linux e macOS:</b></p>
                    <CodeContainer width={"100%"}>
                        <p>~/.vimrc <span className={"comment"}>//diretório home</span></p>
                    </CodeContainer>
                </div>
                <div>
                    <p><b>No Windows:</b></p>
                    <CodeContainer width={"100%"}>
                        <p>C:\Users\usuario\_vimrc</p>
                        <span className={"comment"}>//Ou, se estiver na pasta de instalação do Vim;</span>
                        <p>C:\Program Files (x86)\Vim\_vimrc</p>
                    </CodeContainer>
                </div>
            </div>
            <p>
                Há uma variedade de opções de configurações,
                segue abaixo algumas configurações básicas que podem tornar a experiência
                no Vim mais fluida e eficiente:
            </p>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td><code className={"code"}>set autoindent</code></td>
                    <td>Ativar auto-indentação</td>
                </tr>
                <tr>
                    <td><code className={"code"}>set smartindent</code></td>
                    <td>Indentação inteligente baseada no contexto do código</td>
                </tr>
                <tr>
                    <td><code className={"code"}>set tabstop=4</code></td>
                    <td>Configurar tamanho do tab</td>
                </tr>
                <tr>
                    <td><code className={"code"}>set expandtab</code></td>
                    <td>Espaços para indentação (ao invés de tabs)</td>
                </tr>
                <tr>
                    <td><code className={"code"}>set shiftwidth=4</code></td>
                    <td>Definir o nível de indentação automática</td>
                </tr>
                <tr>
                    <td><code className={"code"}>colorscheme <i>theme</i></code></td>
                    <td>Escolher um tema de core. Vocẽ pode encontrar temas <a href="https://vimcolorschemes.com/"
                                                                               target={"_blank"}>aqui</a></td>
                </tr>
                <tr>
                    <td><code className={"code"}>set showmode</code></td>
                    <td>Desativar o modo visual</td>
                </tr>
                <tr>
                    <td><code className={"code"}>syntax on</code></td>
                    <td>Colore a sintaxe do código de acordo com o tipo de arquivo e as regras definidas no esquema de
                        cores.
                    </td>
                </tr>
                <tr>
                    <td><code className={"code"}>set splitbelow</code></td>
                    <td>Dividir telas horizontalmente por padrão</td>
                </tr>
                <tr>
                    <td><code className={"code"}>set splitright</code></td>
                    <td>Dividir telas verticalmente por padrão</td>
                </tr>
            </table>
            <div
                style={{
                    display: "flex",
                    padding: "15px",
                    alignItems: "center"
                }}
            >
                <VimrcTerminal/>
                <p>
                    O terminal ao lado é um exemplo de configuração. Ela deve seguir esse
                    formato, caso o arquivo não exista vocẽ pode usar o próprio Vim para
                    criá-lo ou editá-lo. Salve no diretório do SO indicado anteriormente.
                </p>
            </div>
        </>
    );
}