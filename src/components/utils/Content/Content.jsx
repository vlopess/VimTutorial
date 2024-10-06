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
import {SearchPage} from "../../Pages/SearchPage/SearchPage.jsx";
import {MarkPage} from "../../Pages/MarkPage/MarkPage.jsx";
import {ConclusaoPage} from "../../Pages/ConclusaoPage/ConclusaoPage.jsx";

export const Content = () =>{
    return (
        <>
            <div className="content-body">
                <Routes>
                    <Route path="/VimTutorial" element={<StartPage/>}/>
                    <Route
                        path="/"
                        element={<Navigate to="/VimTutorial" replace />}
                    />
                    <Route path="/VimTutorial/História" element={<HistoryPage/>}/>
                    <Route path="/VimTutorial/Introdução" element={<IntroductionPage/>}/>
                    <Route path={"/VimTutorial/Configuração do Vim"} element={<ConfiguracaoVimPage/>}/>
                    <Route path="/VimTutorial/Modos" element={<ModosPage/>}/>
                    <Route path="/VimTutorial/Comandos de movimento" element={<NavegacaoPage/>}/>
                    <Route path="/VimTutorial/Comandos de edição" element={<EdicaoPage/>}/>
                    <Route path="/VimTutorial/Pesquisa e Substituição" element={<SearchPage/>}/>
                    <Route path="/VimTutorial/Marcadores" element={<MarkPage/>}/>
                    <Route path="/VimTutorial/Dividir Telas" element={<WindowsPage/>}/>
                    <Route path="/VimTutorial/NERDTree" element={<NERDTreePage/>}/>
                    <Route path="/VimTutorial/Recording" element={<RecodingPage/>}/>
                    <Route path="/VimTutorial/Conclusão" element={<ConclusaoPage/>}/>
                    {/*<Route path="/VimTutorial/Lista Alfabética" element={<ListaAlfaPage/>}/>*/}
                </Routes>
            </div>
        </>
    );
}