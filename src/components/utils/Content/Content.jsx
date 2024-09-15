import {Route, Routes} from "react-router-dom";
import {StartPage} from "../../Pages/StartPage/StartPage.jsx";
import {HistoryPage} from "../../Pages/HistoryPage/HistoryPage.jsx";
import {ModosPage} from "../../Pages/ModosPage/ModosPage.jsx";
import {NavegacaoPage} from "../../Pages/NavegacaoPage/NavegacaoPage.jsx";
import {EdicaoPage} from "../../Pages/EdicaoPage/EdicaoPage.jsx";
import {RegexPage} from "../../Pages/RegexPage/RegexPage.jsx";
import {WindowsPage} from "../../Pages/WindowsPage/WindowsPage.jsx";
import {NERDTreePage} from "../../Pages/NERDTreePage/NERDTreePage.jsx";
import {Recoding} from "../../Pages/Recoding/Recoding.jsx";
import "./Content.css";

export const Content = () =>{
    return (
        <>
            <div className="content-body">
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/Início" element={<StartPage/>}/>
                    <Route path="/História" element={<HistoryPage/>}/>
                    <Route path="/Modos" element={<ModosPage/>}/>
                    <Route path="/Navegação" element={<NavegacaoPage/>}/>
                    <Route path="/Edição de texto" element={<EdicaoPage/>}/>
                    <Route path="/Expressões Regulares" element={<RegexPage/>}/>
                    <Route path="/Dividir Telas" element={<WindowsPage/>}/>
                    <Route path="/NERDTree" element={<NERDTreePage/>}/>
                    <Route path="/Recoding" element={<Recoding/>}/>
                </Routes>
            </div>
        </>
    );
}