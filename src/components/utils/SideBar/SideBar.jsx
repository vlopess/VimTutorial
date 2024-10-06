import vimLogo from "../../../assets/vimlogo.svg";
import "./SideBar.css";
import {SideBarItem} from "./SideBarItem/SideBarItem.jsx";
import {Link, useNavigate} from "react-router-dom";

export const SideBar = ({index, setIndex}) => {
    const navigator = useNavigate();
    const update = (index) => {
        setIndex(index);
    }
    return (
        <>
            <aside className="container">
                <div className="sidebar">
                    <object onClick={() => navigator('/')} width={75} height={150} type="image/svg+xml" data={vimLogo}></object>
                    <Link onClick={() => update(-1)} to={"/"} style={{textDecoration: "none"}}>
                        <p>Vim Tutorial</p>
                    </Link>
                </div>
                <div className={"content-sidebar"}>
                    <SideBarItem text={"História"} onClick={() => update(0)} isActive={index === 0}/>
                    <SideBarItem text={"Introdução"} onClick={() => update(1)} isActive={index === 1}/>
                    <SideBarItem text={"Modos"} onClick={() => update(2)} isActive={index === 2}/>
                    <SideBarItem text={"Comandos de movimento"} onClick={() => update(3)} isActive={index === 3}/>
                    <SideBarItem text={"Comandos de edição"} onClick={() => update(4)} isActive={index === 4}/>
                    <SideBarItem text={"Pesquisa e Substituição"} onClick={() => update(5)} isActive={index === 5}/>
                    <SideBarItem text={"Marcadores"} onClick={() => update(6)} isActive={index === 6}/>
                    <SideBarItem text={"Dividir Telas"} onClick={() => update(7)} isActive={index === 7}/>
                    <SideBarItem text={"NERDTree"} onClick={() => update(8)} isActive={index === 8}/>
                    <SideBarItem text={"Recording"} onClick={() => update(9)} isActive={index === 9}/>
                    <SideBarItem text={"Configuração do Vim"} onClick={() => update(10)} isActive={index === 10}/>
                    {/*<SideBarItem text={"Lista Alfabética"} onClick={() => update(11)} isActive={index === 11}/>*/}
                </div>
            </aside>
        </>
    );
}