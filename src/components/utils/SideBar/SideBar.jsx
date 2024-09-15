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
                    <SideBarItem text={"Início"} onClick={() => update(0)} isActive={index === 0}/>
                    <SideBarItem text={"História"} onClick={() => update(1)} isActive={index === 1}/>
                    <SideBarItem text={"Modos"} onClick={() => update(2)} isActive={index === 2}/>
                    <SideBarItem text={"Navegação"} onClick={() => update(3)} isActive={index === 3}/>
                    <SideBarItem text={"Edição de texto"} onClick={() => update(4)} isActive={index === 4}/>
                    <SideBarItem text={"Expressões Regulares"} onClick={() => update(5)} isActive={index === 5}/>
                    <SideBarItem text={"Dividir Telas"} onClick={() => update(6)} isActive={index === 6}/>
                    <SideBarItem text={"NERDTree"} onClick={() => update(7)} isActive={index === 7}/>
                    <SideBarItem text={"Recoding"} onClick={() => update(8)} isActive={index === 8}/>
                </div>
            </aside>
        </>
    );
}