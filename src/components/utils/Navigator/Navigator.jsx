import {NavigatorButton} from "./NavigatorButton/NavigatorButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Navigator.css"

export const Navigator = ({index, setIndex}) => {
    const options = [
        "Início", "História",
        "Modos", "Navegação",
        "Edição de texto", "Expressões Regulares",
        "Dividir Telas", "NERDTree",
        "Recoding"
    ];
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setStart(index !== 0);
        setEnd(index !== (options.length - 1));
    }, [index, options.length]);

    const back = () => {
        let newIndex = index;
        --newIndex;
        setIndex(newIndex);
        navigate(`/${options[newIndex]}`);
    }

    const forward = () => {
        let newIndex = index;
        ++newIndex;
        setIndex(newIndex)
        navigate(`/${options[newIndex]}`);
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