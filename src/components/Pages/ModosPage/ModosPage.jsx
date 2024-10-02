import "./ModosPage.css";
import {Key} from "../../utils/Key/Key.jsx";
import {NewFileTerminal} from "../../utils/PromptCard/Custom/NewFileTerminal.jsx";
import {VisualModeTerminal} from "../../utils/PromptCard/Custom/VisualModeTerminal.jsx";

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
                    <img
                        style={{
                            margin: "5px",
                            padding: "15px",
                            backgroundColor: "grey"
                        }}
                        height={350} width={350}
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
                    Aqui estão os principais comandos de cópia, corte e colagem que podem ser usados no Modo Normal:
                </p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                    </tr>
                    {/*{/<tr>/}*/}
                    {/*/!*    <td><Key text={"W"}/></td>*!/*/}
                    {/*/!*    <td>Move para o início da próxima palavra.</td>*!/*/}
                    {/*{/</tr>/}*/}
                    {/*{/<tr>/}*/}
                    {/*/!*    <td><Key text={"E"}/></td>*!/*/}
                    {/*/!*    <td>Move para o final da palavra atual.</td>*!/*/}
                    {/*{/</tr>/}*/}
                    {/*{/<tr>/}*/}
                    {/*/!*    <td><Key text={"0"}/></td>*!/*/}
                    {/*/!*    <td>Move para o início da linha.</td>*!/*/}
                    {/*{/</tr>/}*/}
                    {/*{/<tr>/}*/}
                    {/*/!*    <td><Key text={"Shift"}/> + <Key text={"4"}/> = ($)</td>*!/*/}
                    {/*/!*    <td>Move para o final da linha.</td>*!/*/}
                    {/*{/</tr>/}*/}
                    {/*{/<tr>/}*/}
                    {/*/!*    <td><Key text={"C"}/><Key text={"C"}/></td>*!/*/}
                    {/*/!*    <td>Apaga a linha atual e entra no modo de inserção.</td>*!/*/}
                    {/*{/</tr>/}*/}
                    {/*{/<tr>/}*/}
                    {/*/!*    <td><Key text={"U"}/></td>*!/*/}
                    {/*/!*    <td>(Undo), o equilvante ao CTRL+Z.</td>*!/*/}
                    {/*{/</tr>/}*/}
                    <tr>
                        <td><Key text={"Y"}/></td>
                        <td>Copia (yank) a linha atual. O equilvante ao CTRL+C</td>
                    </tr>
                    <tr>
                        <td><Key text={"Y"}/><Key text={"W"}/></td>
                        <td>Copia da posição atual até o início da próxima palavra.</td>
                    </tr>
                    <tr>
                        <td><Key text={"Y"}/><Key text={"$"}/></td>
                        <td>Copia da posição atual até o final da linha.</td>
                    </tr>
                    <tr>
                        <td><Key text={"Y"}/><Key text={"W"}/></td>
                        <td>Copia da posição atual até o início da próxima palavra.</td>
                    </tr>
                    <tr>
                        <td><Key text={"P"}/></td>
                        <td>Cola o texto copiado ou cortado após o cursor. O equilvante ao CTRL+V</td>
                    </tr>
                    <tr>
                        <td><Key text={"Shift"}/><Key text={"P"}/></td>
                        <td>Cola o texto copiado ou cortado antes o cursor.</td>
                    </tr>
                    <tr>
                        <td><Key text={"D"}/><Key text={"D"}/></td>
                        <td>Corta a linha atual (também apaga).</td>
                    </tr>
                </table>
                <h3>Modo de comando</h3>
                <p>
                    Acessado com <Key text={":"}/> no Modo Normal ou pressionando o <Key text={"ESC"}/> para ir, permite
                    que comandos sejam
                    digitados, como salvar o arquivo <Key text={":"}/><Key text={"W"}/>, sair do editor <Key
                    text={":"}/><Key text={"Q"}/>ou pesquisar por palavras.
                    Esse modo fornece uma linha de comando na parte inferior da tela, por onde é inserido os comandos a
                    ser executado. Aqui estão alguns dos
                    comandos mais úteis e comumente usados no Modo de Comando:
                </p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                    </tr>
                    <tr>
                        <td><Key text={":"}/><Key text={"W"}/></td>
                        <td>Salva o arquivo atual.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"W"}/> + <i>nome_arquivo</i>
                        </td>
                        <td>Salva o arquivo atual com um nome diferente.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"Q"}/>
                        </td>
                        <td>Sai do Vim.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"Q"}/><Key text={"!"}/>
                        </td>
                        <td>Sai do Vim sem salvar alterações.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"W"}/><Key text={"Q"}/>
                        </td>
                        <td>Salva o arquivo e sai do Vim.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"X"}/>
                        </td>
                        <td>Salva o arquivo e sai do Vim. (similiar a <code className={"code"}>:wq</code>)</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"E"}/> + <i>nome_do_arquivo</i>
                        </td>
                        <td>Abre um arquivo diferente para edição.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"E"}/> + <i>nome_do_arquivo</i>
                        </td>
                        <td>Abre um arquivo diferente para edição.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"L"}/><Key text={"S"}/>
                        </td>
                        <td>Lista todos os buffers abertos.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={":"}/><Key text={"!"}/> + <i>comando</i>
                        </td>
                        <td>Executa um comando do sistema externo (por exemplo, :!ls para listar arquivos).</td>
                    </tr>
                </table>
                <h3>Modo de inserção</h3>
                <p>
                    Usado para inserir ou editar o conteúdo do texto, de maneira semelhante ao modo de
                    edição em um editor de texto comum. Uma vez no Modo de Inserção, você pode digitar livremente.
                    Tudo o que você escreve será inserido no texto. As teclas são interpretadas como caracteres a
                    serem inseridos no buffer de texto, em vez de comandos, como é feito nos modos <b>normal</b>
                    e <b>comando</b>. Há muitas maneiras de começar no <b>modo de inserção</b> e uma das mais comuns
                    é feito com a tecla <Key text={"I"}/>, e para sair, pressiona-se <Key text={"ESC"}/>.
                </p>
                <h4>Maneiras de entrar no modo de inserção no Vim</h4>
                <p>
                    A partir do Modo Normal, você pode entrar no Modo de Inserção com um dos seguintes comandos:
                </p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"i"}/>
                        </td>
                        <td>Insere texto antes do cursor.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"I"}/>
                        </td>
                        <td>Insere texto no início da linha atual.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"a"}/>
                        </td>
                        <td>Insere texto após o cursor.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"A"}/>
                        </td>
                        <td>Insere texto no final da linha atual.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"o"}/>
                        </td>
                        <td>Abre uma nova linha abaixo da linha atual e entra no Modo de Inserção.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"O"}/>
                        </td>
                        <td>Abre uma nova linha acima da linha atual e entra no Modo de Inserção.</td>
                    </tr>
                </table>
                <h3>Modo visual</h3>
                <p>
                    Para selecionar e destacar blocos de texto, permitindo manipulação mais fácil de partes específicas.
                    Pode ser usado para copiar, colar ou apagar. Útil em situações de edição em trechos de texto,
                    pois permite aplicar em várias linhas de uma só vez!
                </p>
                <h4>Maneiras de entrar no modo de visual no Vim</h4>
                <p>
                    A partir do Modo Normal, você pode entrar no Modo de visual com um dos seguintes comandos:
                </p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                        <th>terminal</th>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"v"}/>
                        </td>
                        <td>Entra no <b>Modo Visual</b> e permite selecionar o texto caractere por caractere.</td>
                        <td><VisualModeTerminal modetext={"VISUAL/LINHA"}/></td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"V"}/>
                        </td>
                        <td>Entra no <b>Modo Visual em Linha</b> e seleciona linhas inteiras.</td>
                        <td><VisualModeTerminal modetext={"VISUAL"}/></td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"Ctrl"}/>
                            <Key text={"v"}/>
                        </td>
                        <td>Entra no <b>Modo Visual em Bloco</b>, permitindo selecionar blocos
                            retangulares de texto.
                        </td>
                        <td><VisualModeTerminal modetext={"VISUAL/BLOCO"}/></td>
                    </tr>
                </table>
                <p>
                    Após selecionar o texto, você pode aplicar os seguintes comandos comuns para manipulá-lo:
                </p>
                <table>
                    <tr>
                        <th>Comando</th>
                        <th>Descrição</th>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"d"}/>
                        </td>
                        <td>Corta o texto selecionado.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"y"}/>
                        </td>
                        <td>Copia o texto selecionado.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"c"}/>
                        </td>
                        <td>Corta o texto selecionado e entra no Modo de Inserção para substituir o conteúdo.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"x"}/>
                        </td>
                        <td>Apaga o texto selecionado.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"p"}/>
                        </td>
                        <td>Cola o conteúdo previamente copiado ou cortado.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"u"}/>
                        </td>
                        <td>Desfaz a última alteração.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"U"}/>
                        </td>
                        <td>Refaz a alteração desfeita.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={">"}/>
                        </td>
                        <td>Indenta a seleção para a direita.</td>
                    </tr>
                    <tr>
                        <td>
                            <Key text={"<"}/>
                        </td>
                        <td>Indenta a seleção para a esquerda.</td>
                    </tr>
                </table>
            </div>
        </>
    );
}