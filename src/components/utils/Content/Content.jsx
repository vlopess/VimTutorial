import {Navigate, Route, Routes} from "react-router-dom";
import {StartPage} from "../../Pages/StartPage/StartPage.jsx";
import {HistoryPage} from "../../Pages/HistoryPage/HistoryPage.jsx";
import {ModosPage} from "../../Pages/ModosPage/ModosPage.jsx";
import {NavegacaoPage} from "../../Pages/NavegacaoPage/NavegacaoPage.jsx";
import {EdicaoPage} from "../../Pages/EdicaoPage/EdicaoPage.jsx";
import {WindowsPage} from "../../Pages/WindowsPage/WindowsPage.jsx";
import {NERDTreePage} from "../../Pages/NERDTreePage/NERDTreePage.jsx";
import {RecodingPage} from "../../Pages/RecodingPage/RecodingPage.jsx";
import "./Content.css";
import {IntroductionPage} from "../../Pages/IntroductionPage/IntroductionPage.jsx";
import {ConfiguracaoVimPage} from "../../Pages/ConfiguracaoVimPage/ConfiguracaoVimPage.jsx";
import {ListaAlfaPage} from "../../Pages/ListaAlfaPage/ListaAlfaPage.jsx";
import {SearchPage} from "../../Pages/SearchPage/SearchPage.jsx";
import {MarkPage} from "../../Pages/MarkPage/MarkPage.jsx";
import {ConclusaoPage} from "../../Pages/ConclusaoPage/ConclusaoPage.jsx";

export const Content = () =>{
    return (
        <>
            <div className="content-body">
                <Routes>
                    <Route path="/tutorialvim" element={<StartPage/>}/>
                    <Route
                        path="/"
                        element={<Navigate to="/tutorialvim" replace />}
                    />
                    <Route path="/tutorialvim/História" element={<HistoryPage/>}/>
                    <Route path="/tutorialvim/Introdução" element={<IntroductionPage/>}/>
                    <Route path={"/tutorialvim/Configuração do Vim"} element={<ConfiguracaoVimPage/>}/>
                    <Route path="/tutorialvim/Modos" element={<ModosPage/>}/>
                    <Route path="/tutorialvim/Comandos de movimento" element={<NavegacaoPage/>}/>
                    <Route path="/tutorialvim/Comandos de edição" element={<EdicaoPage/>}/>
                    <Route path="/tutorialvim/Pesquisa e Substituição" element={<SearchPage/>}/>
                    <Route path="/tutorialvim/Marcadores" element={<MarkPage/>}/>
                    <Route path="/tutorialvim/Dividir Telas" element={<WindowsPage/>}/>
                    <Route path="/tutorialvim/NERDTree" element={<NERDTreePage/>}/>
                    <Route path="/tutorialvim/Recording" element={<RecodingPage/>}/>
                    <Route path="/tutorialvim/Conclusão" element={<ConclusaoPage/>}/>
                    {/*<Route path="/tutorialvim/Lista Alfabética" element={<ListaAlfaPage/>}/>*/}
                </Routes>
            </div>
        </>
    );
}