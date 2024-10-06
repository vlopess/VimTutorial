import {Key} from "../../utils/Key/Key.jsx";
import {SearchTerminal} from "../../utils/PromptCard/Custom/SearchTerminal.jsx";
import {CodeContainer} from "../../utils/CodeContainer/CodeContainer.jsx";

export const SearchPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Pesquisa</span>
            </div>
            <div style={{
                display: "flex",
            }}>
                <div style={{display: "flex"}}>
                    <Key text={"/"}/>
                </div>
                <p style={{paddingLeft: "15px"}}>
                    A pesquisa no Vim é uma funcionalidade poderosa que permite navegar rapidamente pelo
                    texto e localizar palavras ou padrões específicos. O comando para busca no vim é o
                    caractere barra (/). No <b>modo normal</b>, quando você digitar a barra ela irá aparecer
                    na linha inferior da tela, e em seguida digite o texto que deseja buscar.
                </p>
            </div>
            <br/>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                    <td>Exemplo</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"/"}/> + <i>padrão</i>
                    </td>
                    <td>
                        Pesquisar o padrão
                    </td>
                    <td>
                        <SearchTerminal textSearched={"hello"} highlightedText={"hello"}/>
                    </td>
                </tr>
            </table>
            <p>
                Um padrão pode ser uma palavra inteira ou qualquer outra sequência de caracteres. Para finalizar a busca
                pressione
                <Key text={"Enter"}/> e o vim procurará a primeira ocorrência do texto ou padrão a partir da posição
                atual do cursor
                até o final do arquivo. Caso não seja encontrado o padrão o Vim retorna um erro.
            </p>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                <SearchTerminal textSearched={"bonsoir"} size={"medium"}/>
                <span>+</span>
                <Key text={"Enter"}/>
                <span>=</span>
                <SearchTerminal textSearched={"bonsoir"} size={"medium"} isFounded={false}/>
            </div>
            <p>
                Aqui estão outros comandos relacionados a pesquisas no Vim:
            </p>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"?"}/> + <i>padrão</i>
                    </td>
                    <td>
                        O Vim procurará a primeira ocorrência do texto ou padrão a
                        partir da <br/> posição atual do cursor, mas desta vez em direção
                        ao início do arquivo.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"N"}/>
                    </td>
                    <td>
                        Após uma pesquisa, pressione <code className={"code"}>n</code> para
                        ir para a próxima ocorrência do <br/> termo pesquisado na mesma direção da
                        pesquisa original <br/> (para frente se usou <code className={"code"}>/</code>
                        , para trás se usou <code className={"code"}>?</code>).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Shift"}/><Key text={"N"}/>
                    </td>
                    <td>
                        Após uma pesquisa, pressione <code className={"code"}>N</code>
                        para ir para a ocorrência <br/> anterior do termo pesquisado,na
                        direção oposta da pesquisa original.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"*"}/>
                    </td>
                    <td>
                        Pesquisa a palavra sob o cursor para frente.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"%"}/>
                    </td>
                    <td>
                        Encontre a correspondência entre parênteses, chaves ou colchetes atuais.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={":"}/><Key text={"N"}/><Key text={"O"}/><Key text={"H"}/>
                    </td>
                    <td>
                        No <b>modo de comando</b>, ele suspenda o realce da pesquisa até a próxima pesquisa.
                    </td>
                </tr>
            </table>
            <h3>Pesquisa com Padrões de Expressão Regular e Substituição</h3>
            <p>
                O Vim suporta <b>expressões regulares</b> para pesquisas avançadas. Isso significa que você
                pode usar metacaracteres para fazer buscas mais complexas.
            </p>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"/"}/><Key text={"."}/><Key text={"*"}/>
                    </td>
                    <td>
                        Corresponde a qualquer sequência de caracteres.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"/"}/><Key text={"^"}/> + <i>padrão</i>
                    </td>
                    <td>
                        Busca o <i>padrão</i> correspondente no início da linha. ("Começar com <i>padrão</i>")
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"/"}/><Key text={"$"}/> + <i>padrão</i>
                    </td>
                    <td>
                        Busca o <i>padrão</i> correspondente no final da linha. ("Termina com <i>padrão</i>")
                    </td>
                </tr>
            </table>
            <p>
                O Vim também permite substituir texto encontrado por outro texto de forma eficiente,
                em um intervalo de linhas ou no documento inteiro. Ele é baseado em expressões
                regulares, como mostra o comando abaixo:
            </p>
            <CodeContainer>
                [range] s [/padrao/substituicao/] [opcoes] [count]
            </CodeContainer>
            <p>
                Substitue a primeira instância do <i>padrão</i> em cada uma das linhas
                especificadas por <i>substituição</i>. Se o <i>padrão</i> e
                a <i>substituição</i> forem omitidos, repita a última substituição.
                O count especifica o número de linhas a substituir, começando
                com <i>range</i> definido (opcional). Segue abaixo exemplos de comandos
                de substituição:
            </p>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Decrição</td>
                    <td>Exemplo</td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:s/padrao/substituicao/ </code>
                    </td>
                    <td>
                        Se <i>opcoes</i> e <i>count</i> forem omitidos, será feita uma <b>
                        substituição simples</b>, substitue <br/> a primeira ocorrência de
                        um padrão na linha atual.
                    </td>
                    <td>
                        <CodeContainer width={"15vw"}>
                            <p>:s/yes/no/</p>
                            <p className={"comment"}>//Substitue a primeira ocorrência</p>
                        </CodeContainer>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:s/padrao/substituicao/g </code>
                    </td>
                    <td>
                        Substitue todas as ocorrências do padrão em uma linha. A <i>flag</i>
                        <code className={"code"}>g</code> significa global.
                    </td>
                    <td>
                        <CodeContainer width={"15vw"}>
                            <p>:s/yes/no/g</p>
                            <p className={"comment"}>//Substitue a todas as ocorrência</p>
                        </CodeContainer>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:s/padrao/substituicao/gc </code>
                    </td>
                    <td>
                        Substitue todas as ocorrências do padrão em uma linha. A <i>flag</i>
                        <code className={"code"}>g</code> significa global
                        e <code className={"code"}>c</code> é para confirmar a cada
                        substituição.
                    </td>
                    <td>
                        <CodeContainer width={"15vw"}>
                            <p>:s/yes/no/gc</p>
                            <p className={"comment"}>//Substitue a todas as ocorrência uma por uma.</p>
                        </CodeContainer>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:s/padrao/substituicao/gi </code>
                    </td>
                    <td>
                        Substitue todas as ocorrências do padrão em uma linha. A <i>flag</i>
                        <code className={"code"}>g</code> significa global
                        e <code className={"code"}>i</code> ignora maiúsculas e minúsculas
                        ao buscar o padrão.
                    </td>
                    <td>
                        <CodeContainer width={"15vw"}>
                            <p>:%s/vim/NeoVim/gi</p>
                            <p className={"comment"}>//Substitue todas as ocorrências ignorando maiúsculas e minúsculas</p>
                        </CodeContainer>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:%s/padrao/substituicao/ </code>
                    </td>
                    <td>
                        Substitue todas as ocorrências do padrão em todo o arquivo. Use o
                        <code className={"code"}>%</code> para isso.
                    </td>
                    <td>
                        <CodeContainer width={"15vw"}>
                            <p>:%s/yes/no/g</p>
                            <p className={"comment"}>//Substitue todas as ocorrências do arquivo</p>
                        </CodeContainer>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className={"code"}>:10,20s/padrao/substituicao/ </code>
                    </td>
                    <td>
                        Substitue todas as ocorrências do padrão em todo o arquivo, no
                        intervalo definido.
                    </td>
                    <td>
                        <CodeContainer width={"15vw"}>
                            <p>:1,10s/yes/no/g</p>
                            <p className={"comment"}>//Substitue nas primeiras 10 linhas.</p>
                        </CodeContainer>
                    </td>
                </tr>
            </table>
            <br/>
        </>
    );
}