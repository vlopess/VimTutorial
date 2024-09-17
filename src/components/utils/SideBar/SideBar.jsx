import vimLogo from "../../../assets/vimlogo.svg";
import "./SideBar.css";
import {SideBarItem} from "./SideBarItem/SideBarItem.jsx";

export const SideBar = ({index, setIndex}) => {
    const update = (index) => {
        setIndex(index);
    }
    return (
        <>
            <aside className="container">
                <div className="sidebar">
                    <object width={75} height={150} type="image/svg+xml" data={vimLogo}></object>
                    <p>Vim Tutorial</p>
                </div>
                <div className={"content-sidebar"}>
                    <SideBarItem text={"História"} onClick={() => update(0)} isActive={index === 0}/>
                    <SideBarItem text={"Introdução"} onClick={() => update(1)} isActive={index === 1}/>
                    <SideBarItem text={"Configuração do Vim"} onClick={() => update(2)} isActive={index === 2}/>
                    <SideBarItem text={"Modos"} onClick={() => update(3)} isActive={index === 3}/>
                    <SideBarItem text={"Comandos de movimento"} onClick={() => update(4)} isActive={index === 4}/>
                    <SideBarItem text={"Comandos de edição"} onClick={() => update(5)} isActive={index === 5}/>
                    <SideBarItem text={"Pesquisa"} onClick={() => update(6)} isActive={index === 6}/>
                    <SideBarItem text={"Expressões Regulares"} onClick={() => update(7)} isActive={index === 7}/>
                    <SideBarItem text={"Dividir Telas"} onClick={() => update(8)} isActive={index === 8}/>
                    <SideBarItem text={"NERDTree"} onClick={() => update(9)} isActive={index === 9}/>
                    <SideBarItem text={"Recoding"} onClick={() => update(10)} isActive={index === 10}/>
                    <SideBarItem text={"Lista Alfabética"} onClick={() => update(11)} isActive={index === 11}/>
                </div>
            </aside>
        </>
    );
}