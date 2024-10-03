import {Key} from "../../utils/Key/Key.jsx";

export const EdicaoPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Comandos de edição</span>
            </div>
            <table>
                <tr>
                    <th>Comando</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"W"}/>
                    </td>
                    <td>Muda uma palavra (entra no modo de inserção).</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"C"}/>
                    </td>
                    <td>Muda a linha selecionada (entra no modo de inserção).</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"$"}/>
                    </td>
                    <td>Muda a linha selecionada (entra no modo de inserção).</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"C"}/><Key text={"$"}/>
                    </td>
                    <td>Muda a linha selecionada (entra no modo de inserção).</td>
                </tr>
            </table>
        </>
    );
}