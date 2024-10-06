import {Key} from "../../utils/Key/Key.jsx";

export const EdicaoPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Comandos de edição</span>
            </div>
            <p>
                Aqui estão alguns dos principais comandos de edição no Vim, que são usados para
                manipular e modificar texto no editor. Esses comandos são executados no Modo Normal,
                que é o modo padrão de operação no Vim.
            </p>
            <table>
                <tr>
                    <th>Comando</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"W"}/>
                    </td>
                    <td>Muda uma palavra (e entra no modo de inserção).</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"C"}/>
                    </td>
                    <td>Muda a linha selecionada (e entra no modo de inserção).</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"$"}/>
                    </td>
                    <td>Muda o texto da posição atual do cursor até o final da linha (e entra no modo de inserção).</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"C"}/>
                    </td>
                    <td>
                        O mesmo que <code className={"code"}>c$</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"D"}/><Key text={"D"}/>
                    </td>
                    <td>Deleta a linha atual.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"D"}/><Key text={"$"}/>
                    </td>
                    <td>Apaga o texto da posição atual do cursor até o final da linha (e entra no modo de inserção).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"D"}/>
                    </td>
                    <td>
                        O mesmo que <code className={"code"}>d$</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"D"}/><Key text={"W"}/>
                    </td>
                    <td>
                        Deleta uma palavra
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"D"}/><Key text={"W"}/>
                    </td>
                    <td>
                        Deleta uma palavra
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"D"}/><Key text={"^"}/>
                    </td>
                    <td>
                        Deletar do cursor até o primeiro caractere não em branco na linha
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"D"}/><Key text={"L"}/>
                    </td>
                    <td>
                        Excluir o texto da posição atual do cursor até o final da linha atual.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"R"}/> + <i>outro caractere</i>
                    </td>
                    <td>
                        Substitue o caractere que está sob o cursor pelo <i>outro caractere</i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"R"}/> + <i>outro texto</i>
                    </td>
                    <td>
                        Substitue o texto que está sob o cursor pelo <i>outro texto</i>
                    </td>
                </tr>
                <tr>
                    <td>
                        [<i>n</i>]<Key text={"S"}/>
                    </td>
                    <td>
                        Substitue n caracteres (<i>n</i> é opcional)
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"R"}/>
                    </td>
                    <td>
                        Substitue o texto que está sob o cursor pelo <i>outro texto</i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"U"}/>
                    </td>
                    <td>
                        Desfaz a última ação realizada. O equivalente ao Crtl+Z
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"R"}/>
                    </td>
                    <td>
                        O equivalente ao Crtl+Y
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"R"}/>
                    </td>
                    <td>
                        Refaz uma ação desfeita
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"J"}/>
                    </td>
                    <td>
                        Junta a linha atual com a próxima linha, removendo a quebra de linha entre elas.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"."}/>
                    </td>
                    <td>
                        Repite a última alteração.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"~"}/>
                    </td>
                    <td>
                        Inverta maiúsculas e minúsculas e mova o cursor para a direita.
                    </td>
                </tr>
            </table>
        </>
    );
}