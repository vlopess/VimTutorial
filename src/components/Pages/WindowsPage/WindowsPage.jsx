import {CodeContainer} from "../../utils/CodeContainer/CodeContainer.jsx";
import {VerticalSplitTerminal} from "../../utils/PromptCard/Custom/VerticalSplitTerminal.jsx";
import {HorizontalSplitTerminal} from "../../utils/PromptCard/Custom/HorizontalSplitTerminal.jsx";
import {Key} from "../../utils/Key/Key.jsx";

export const WindowsPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Dividir Telas</span>
            </div>
            <p>
                O padrão do Vim é fazer as edições dos arquivos em uma única janela. No entanto o Vim também oferece a
                possibilidade de você pode dividir a tela para trabalhar com múltiplos arquivos ou com diferentes seções
                do mesmo arquivo ao mesmo tempo. Isso é diferente de começar várias instâncias do Vim.
            </p>
            <h3>Inicializando Várias Janelas</h3>
            <p>
                Você pode acessar várias janelas de edição quando vocẽ inicia o Vim ou
                dentro da sessão, no <b>modo de comando</b>. Para abrir vários arquivos
                na mesma janela por linha de comando, use o vim com a <i>flag</i>
                <code className={"code"}>-o</code>, que é usada para <b>abrir mpultiplos
                arquivos</b>, e em seguida, os arquivos.
            </p>
            <CodeContainer>
                $ vim -o file1 file2
            </CodeContainer>
            <p>
                Existem dois tipos principais de divisões: <b>horizontal</b> e <b>vertical</b>.
            </p>
            <table>
                <tr>
                    <td>Tipo</td>
                    <td>Descrição</td>
                    <td>Comando</td>
                </tr>
                <tr>
                    <td><b>Divisão Horizontal</b></td>
                    <td>A divisão horizontal separa a tela em painéis superiores e inferiores.</td>
                    <td><code className={"code"}>:split</code> ou <code className={"code"}>:sp</code> + <i>arquivo</i>
                    </td>
                </tr>
                <tr>
                    <td><b>Divisão Vertical</b></td>
                    <td>A divisão vertical separa a tela em painéis lado a lado.</td>
                    <td><code className={"code"}>:vsplit</code> ou <code className={"code"}>:vsp</code> + <i>arquivo</i>
                    </td>
                </tr>
            </table>
            <br/>
            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                <div>
                    <VerticalSplitTerminal/>
                    <p style={{
                        fontSize: 12,
                        textAlign: "center",
                        margin: "1px"
                    }}>
                        Exemplo de Divisão Vertical
                    </p>
                </div>
                <div>
                    <HorizontalSplitTerminal/>
                    <p style={{
                        fontSize: 12,
                        textAlign: "center",
                        margin: "1px"
                    }}>
                        Exemplo de Divisão Horizontal
                    </p>
                </div>
            </div>
            <br/>
            <br/>
            <h3>Comandos Principais</h3>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/> + <Key text={"W"}/>
                    </td>
                    <td>Move para a próxima janela</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"H"}/>
                    </td>
                    <td>Move para a janela à esquerda</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"J"}/>
                    </td>
                    <td>Move para a janela abaixo</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"K"}/>
                    </td>
                    <td>Move para a janela acima</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"L"}/>
                    </td>
                    <td>Move para a janela à direita</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"R"}/>
                    </td>
                    <td>Gire as janelas para baixo ou para a direita.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"Shift"}/>+ <Key text={"R"}/>
                    </td>
                    <td>Gire as janelas para cima ou para a esquerda</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"="}/>
                    </td>
                    <td>Deixa todas as janelas com o mesmo tamanho.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"+"}/>
                    </td>
                    <td>Aumenta a altura da janela atual.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"-"}/>
                    </td>
                    <td>Diminui a altura da janela atual.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={">"}/>
                    </td>
                    <td>Aumenta a largura da janela atual.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Crtl"}/> + <Key text={"W"}/>+ <Key text={"<"}/>
                    </td>
                    <td>Diminui a largura da janela atual.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={":"}/><Key text={"Q"}/>
                    </td>
                    <td>Fecha a janela atual.</td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:close</code>
                    </td>
                    <td>Fecha a janela sem fechar o arquivo.</td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:only</code>
                    </td>
                    <td>Fecha todas as outras janelas, deixando apenas a janela atual aberta.</td>
                </tr>
            </table>
        </>
    );
}