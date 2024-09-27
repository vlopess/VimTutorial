import "./ModosPage.css";
import {Key} from "../../utils/Key/Key.jsx";

export const ModosPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Modos de Texto</span>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <p>O Vim suporta alguns modos de edição, sendo cada um deles usados para tarefas específicas. Os modos
                    mais usados são <i>normal, inserção, visual e comando.</i></p>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <img height={350} width={350}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vim_modes.svg/800px-Vim_modes.svg.png"
                         alt="Vim Modes Image"/>
                    <p style={{
                        fontSize: 12,
                        textAlign: "center",
                        margin: "1px"
                    }}>
                        Vim modes. FONTE: <a target={"_blank"}
                                             href="https://en.wikipedia.org/wiki/Vim_(text_editor)#Modes">wikipedia</a>
                    </p>
                </div>
                <h3>Modo normal</h3>
                <p>
                    O modo padrão para navegar e manipular texto. Quando acessa o Vim você está nele, e é
                    a partir dele que vocẽ navega para os outros modos. É aqui que você move o cursor, copia,
                    cola e apaga texto, entre outras ações. Boa partes dos caracteres são interpretados como comando.
                    Aqui estão os principais comandos que podem ser usados no Modo Normal:
                </p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                    </tr>
                    {/*<tr>*/}
                    {/*    <td><Key text={"W"}/></td>*/}
                    {/*    <td>Move para o início da próxima palavra.</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td><Key text={"E"}/></td>*/}
                    {/*    <td>Move para o final da palavra atual.</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td><Key text={"0"}/></td>*/}
                    {/*    <td>Move para o início da linha.</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td><Key text={"Shift"}/> + <Key text={"4"}/> = ($)</td>*/}
                    {/*    <td>Move para o final da linha.</td>*/}
                    {/*</tr>*/}
                    <tr>
                        <td><Key text={"Y"}/></td>
                        <td>Copia (yank) a linha atual. O equilvante ao CTRL+C</td>
                    </tr>
                    <tr>
                        <td><Key text={"Y"}/><Key text={"W"}/></td>
                        <td>Copia da posição atual até o início da próxima palavra.</td>
                    </tr>
                    <tr>
                        <td><Key text={"Y"}/><Key text={"Shift"}/><Key text={"$"}/></td>
                        <td>Copia da posição atual até o final da linha.</td>
                    </tr>
                    <tr>
                        <td><Key text={"P"}/></td>
                        <td>Cola o texto copiado. O equilvante ao CTRL+V</td>
                    </tr>
                    <tr>
                        <td><Key text={"U"}/></td>
                        <td>(Undo), o equilvante ao CTRL+Z.</td>
                    </tr>
                    <tr>
                        <td><Key text={"C"}/><Key text={"C"}/></td>
                        <td>Copia da posição atual até o início da próxima palavra.</td>
                    </tr>
                    <tr>
                        <td><Key text={"Y"}/><Key text={"W"}/></td>
                        <td>Copia da posição atual até o início da próxima palavra.</td>
                    </tr>
                </table>
                <h3>Modo de comando</h3>
                <p>
                    Acessado com<code className={"code"}>:</code>no Modo Normal, permite que comandos sejam
                    digitados, como salvar o arquivo<code className={"code"}>:w</code>, sair do editor<code
                    className={"code"}>:q</code>ou
                    pesquisar por palavras.
                </p>
                <h3>Modo de inserção</h3>
                <p>
                    Usado para inserir ou editar o conteúdo do texto. Entrar neste modo é feito com o comando i, e para
                    sair, pressiona-se ESC.
                </p>
                <h3>Modo visual</h3>
                <p>
                    Para selecionar blocos de texto, permitindo manipulação mais fácil de partes específicas. Pode ser
                    usado para copiar, colar ou apagar.
                </p>

            </div>
        </>
    );
}