import {NavigatorButton} from "./NavigatorButton/NavigatorButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Navigator.css"

export const Navigator = ({index, setIndex}) => {
    const options = [
        "História", "Introdução",
        "Modos", "Comandos de movimento",
        "Comandos de edição", "Pesquisa e Substituição",
        "Marcadores", "Dividir Telas",
        "NERDTree", "Recording",
        "Configuração do Vim", "Conclusão"
    ];
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setStart(index !== -1);
        setEnd(index !== (options.length - 1));
    }, [index, options.length]);

    const back = () => {
        let newIndex = index;
        --newIndex;
        setIndex(newIndex);
        let route = options[newIndex] || "";
        navigate(`/tutorialvim/${route}`);
    }

    const forward = () => {
        let newIndex = index;
        ++newIndex;
        let route = options[newIndex] || "";
        if(!route) newIndex = -1;
        setIndex(newIndex)
        navigate(`/tutorialvim/${route}`);
    }

    return (
        <>
            <div className={"buttons"}>
                {start && (<NavigatorButton Text={options[(index - 1)] ?? "Início"} isBack={true} onClick={back}/>)}
                <NavigatorButton Text={options[(index + 1)] ?? "Início"} onClick={forward}/>
            </div>
        </>
    );
}