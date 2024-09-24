import {Key} from "../Key/Key.jsx";
import "./DataTable.css"
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import {CodeContainer} from "../CodeContainer/CodeContainer.jsx";

DataTable.use(DT);

export const ListaAlfabeticaTable = () => {

    const columns = [
        { data: 'Keystrokes' },
        { data: 'Description' },
        { data: 'Result' }
    ];

    return (
        <DataTable
            ajax="/data.json"
            columns={columns}
            options={{
                pageLength: "75"
            }}
            slots={{
                0: (data, row) => {
                    return (
                        <div style={{display: "flex", padding: "25px"}}>
                            {data.split(' ').map(letter => <Key text={letter}/>)}
                        </div>
                    )
                },
                1: (data, row) => {
                    return (
                        <div style={{
                            width: "25vw",
                            margin: "0px",
                            padding: "15px"
                        }}>
                            {data}
                        </div>
                    )
                },
                2: (data, row) => {
                    return (
                        <CodeContainer width={"25vw"} margin={"0px"} padding={"15px"}>
                            {data}
                        </CodeContainer>
                    )
                }
            }}

            className="display">
            <thead>
                <tr>
                    <th>KeyStroke</th>
                    <th>Descrição</th>
                    <th>Resultado</th>
                </tr>
            </thead>
        </DataTable>
    );
};
