import './App.css'
import {SideBar} from "./components/utils/SideBar/SideBar.jsx";
import {Navigator} from "./components/utils/Navigator/Navigator.jsx";
import {BrowserRouter} from "react-router-dom";
import {Content} from "./components/utils/Content/Content.jsx";
import {useEffect, useState} from "react";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
        <BrowserRouter>
            <div className={"container2"}>
                <SideBar index={index}  setIndex={setIndex}/>
                <main className={"content"}>
                    <Content/>
                    <Navigator  setIndex={setIndex} index={index}/>
                </main>
            </div>
        </BrowserRouter>
    </>
  );
}

export default App
