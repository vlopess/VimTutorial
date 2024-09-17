import {NavigatorButton} from "./NavigatorButton/NavigatorButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Navigator.css"

export const Navigator = ({index, setIndex}) => {
    const options = [
        "História", "Introdução",
        "Configuração do Vim", "Modos",
        "Comandos de movimento", "Comandos de edição",
        "Pesquisa", "Expressões Regulares",
        "Dividir Telas", "NERDTree",
        "Recoding", "Lista Alfabética"
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
        setIndex(newIndex)
        let route = options[newIndex] || "";
        navigate(`/tutorialvim/${route}`);
    }

    return (
        <>
            <div className={"buttons"}>
                {start && (<NavigatorButton Text={options[(index - 1)]} isBack={true} onClick={back}/>)}
                {end && (<NavigatorButton Text={options[(index + 1)]} onClick={forward}/>)}
            </div>
        </>
    );
}