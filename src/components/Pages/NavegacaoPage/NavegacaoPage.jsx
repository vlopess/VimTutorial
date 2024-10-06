import {Key} from "../../utils/Key/Key.jsx";
import Figure from "../../../assets/figure.png";

export const NavegacaoPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Comandos de movimento</span>
            </div>
            <p>
                O Vim fornece um atalho para navegação sem precisar alterar entre o teclado e o
                mouse para evitar de tirar os dedos na linha inicial do teclado. Isso permite que
                os usuários movam-se rapidamente pelo arquivo, realizem edições complexas e manipulem
                texto sem tirar as mãos do teclado. Esqueça o mouse e as teclas de navegação, que estão
                nas extremidades do teclado, veja abaixo as alternativas básicas de movimentação do Vim.
            </p>
            <h3>Movimentos Básicos</h3>
            <table>
                <tr>
                    <th>Comando</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <td>
                        <Key text={"H"}/>
                    </td>
                    <td>
                        (Para esquerda) Substitui o <Key text={"←"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"J"}/>
                    </td>
                    <td>
                        (Para baixo) Substitui o <Key text={"↓"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"K"}/>
                    </td>
                    <td>
                        (Para cima) Substitui o <Key text={"↑"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"L"}/>
                    </td>
                    <td>
                        (Para direita) Substitui o <Key text={"→"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Spacebar"} width={300}/>
                    </td>
                    <td>
                        (Para direita) Substitui o <Key text={"→"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Backspace"} width={125}/>
                    </td>
                    <td>
                        (Para esquerda) Substitui o <Key text={"←"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Ctrl"}/>
                        <Key text={"H"}/>
                    </td>
                    <td>
                        (Para esquerda) Substitui o <Key text={"←"}/>
                    </td>
                </tr>
            </table>
            <p>
                Ressalto que os comandos são usados no <b>Modo Normal</b> porque seus atalhos estão próximos
                da linha central do teclado, economizando tempo e evitando a necessidade de tirar
                as mãos da linha de teclas padrão.
            </p>
            <h3>Movimentos de Palavras e Texto</h3>
            <table>
                <tr>
                    <th>Comando</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <td>
                        <Key text={"W"}/>
                    </td>
                    <td>
                        Move o cursor para o início da próxima palavra. Tratar a pontuação como separadores,<br/>
                        então palavras separadas por vírgulas ou pontos serão tratadas como palavras individuais.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"W"}/>
                    </td>
                    <td>
                        Move o cursor para o início da próxima palavra, ignorando os caracteres <br/>
                        de pontuação e espaços (apenas espaços em branco separam itens).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"E"}/>
                    </td>
                    <td>
                        Move o cursor para o final da palavra atual <br/> (trata a pontuação como delimitadora de
                        palavras).
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <Key text={"Shift"}/><Key text={"E"}/>
                        </div>
                    </td>
                    <td>
                        Move o cursor para o final da palavra atual,<br/> ignorando os caracteres de pontuação e
                        espaços (apenas espaços em branco separam itens).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"B"}/>
                    </td>
                    <td>
                        Move o cursor para o início da palavra anterior. Tratar a pontuação como separadores,<br/>
                        então palavras separadas por vírgulas ou pontos serão tratadas como palavras individuais.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"W"}/>
                    </td>
                    <td>
                        Move o cursor para o início da palavra anterior, ignorando os caracteres <br/>
                        de pontuação e espaços (apenas espaços em branco separam itens).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"0"}/>
                    </td>
                    <td>
                        Move para o início da linha.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"$"}/>
                    </td>
                    <td>
                        Move para o final da linha.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"G"}/><Key text={"G"}/>
                    </td>
                    <td>
                        Move para a primeira linha do arquivo.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"G"}/>
                    </td>
                    <td>
                        Move para a última linha do arquivo.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"H"}/>
                    </td>
                    <td>
                        Move para o topo da tela visível.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"M"}/>
                    </td>
                    <td>
                        Move para o meio da tela visível.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"L"}/>
                    </td>
                    <td>
                        Move para o final da tela visível.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={":"}/> + <i>numero</i>
                    </td>
                    <td>
                        Move para a linha <i>numero</i> do arquivo. (Modo de comando)
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"+"}/>
                    </td>
                    <td>
                        Vai para o primeiro caractere da próxima linha
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"-"}/>
                    </td>
                    <td>
                        Vai para o primeiro caractere da última linha
                    </td>
                </tr>
            </table>
            <h3>Argumentos Numéricos</h3>
            <p>
                <b>Argumentos Numéricos</b> no Vim são quando você junta comandos de movimentação com números ou outros
                operadores para realizar movimentos mais precisos ou repetidos. No Vim, você pode combinar um número
                com um comando de movimento para repetir a ação várias vezes. Na figura abaixo, a letra sublinhada
                representa
                a posição do cursor. Cada circulo mostra a posição resultado do cursor depois de cada comando.
            </p>
            <img src={Figure} alt="Figure"/>
            <br/>
            <br/>
        </>
    );
}