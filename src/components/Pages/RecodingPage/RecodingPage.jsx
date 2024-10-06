import {Key} from "../../utils/Key/Key.jsx";

export const RecodingPage = () => {
    return (
        <>
            <div className={"title-text"}>
                <span>Recording</span>
            </div>
            <p>
                Recording no Vim é um recurso que permite gravar uma sequência de comandos
                que você executa e depois reproduzi-los quantas vezes quiser. Isso é
                útil para automatizar tarefas repetitivas e pode economizar muito
                tempo ao trabalhar com edições complexas. Você grava os comandos em um
                registro que é marcado por uma letra, podendo ser executado quantas vezes
                quiser. Tudo é feito <b>modo normal</b>.
            </p>
            <br/>
            <table>
                <tr>
                    <td>Comando</td>
                    <td>Descrição</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Q"}/> + <i>x</i>
                    </td>
                    <td>
                        Começa a gravar os comandos no registro <i>x</i>.
                        O Vim exibirá uma mensagem <br/> na parte inferior indicando
                        que a gravação começou: <code className={"code"}>"recording @x"</code>.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Q"}/>
                    </td>
                    <td>Para de gravar.</td>
                </tr>
                <tr>
                    <td>
                        <Key text={"@"}/> + <i>x</i>
                    </td>
                    <td>
                        Execute o registro especificado pela letra <i>x</i>.
                        Use <code className={"code"}>@@</code> para repetir o último comando
                        <code className={"code"}>@</code>.
                    </td>
                </tr>
                <tr>
                    <td>
                        <i>n</i> + <Key text={"@"}/> + <i>x</i>
                    </td>
                    <td>
                        Repetir o playback de uma gravação <i>n</i> vezes.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key text={"Q"}/> + <i>x</i> + <Key text={"Q"}/>
                    </td>
                    <td>
                        Deleta a gravação <i>x</i>.
                    </td>
                </tr>
            </table>
            <br/>
            <br/>
            <br/>
        </>
    );
}