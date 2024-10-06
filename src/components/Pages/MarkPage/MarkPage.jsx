import {Key} from "../../utils/Key/Key.jsx";
import {SearchTerminal} from "../../utils/PromptCard/Custom/SearchTerminal.jsx";

export const MarkPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Marcadores</span>
            </div>
            <div style={{
                display: "flex",
            }}>
                <p>
                    Os <b>marcadores (marks)</b> no Vim são uma poderosa ferramenta de navegação que
                    permite que você salve posições específicas em um arquivo e retorne a elas rapidamente.
                    Em vez de ter que lembrar em que linha ou posição você estava trabalhando, você pode
                    definir um marcador e, a qualquer momento, pular de volta para esse ponto no texto.
                    Os marcadores são definidos no Modo Normal e podem ser criados usando o comando
                    <code className={"code"}>mx</code>, onde <i>x</i> é uma letra minúscula ou maiúscula.
                    Eles podem ser usados para salvar tanto a posição exata do cursor quanto apenas a linha,
                    e podem ser locais (letras minúsculas) ao arquivo ou globais (letras maiúsculas).
                </p>
            </div>
            <br/>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"m"}/> + <i>x</i>
                    </td>
                    <td>
                        Marca a atual posição with <i>x</i>, podendo ser <i>x</i> qualquer
                        caractere.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"'"}/> + <i>x</i>
                    </td>
                    <td>
                        Move o cursor para o primeiro caractere da linha marcada com o <i>x</i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"`"}/> + <i>x</i>
                    </td>
                    <td>
                        Move o cursor para o caractere da linha marcada com o <i>x</i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"'"}/><Key text={"'"}/>
                    </td>
                    <td>
                        Retorna ao início da linha da marca ou contexto anterior.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:marks</code>
                    </td>
                    <td>
                        Lista todos os marcadores ativos (<b>modo de comando</b>).
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:delmarks x</code>
                    </td>
                    <td>
                        Exclui o marcador <i>x</i> (<b>modo de comando</b>).
                    </td>
                </tr>
            </table>
            <br/>
            <br/>
        </>
    );
}