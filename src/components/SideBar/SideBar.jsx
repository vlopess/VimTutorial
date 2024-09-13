import vimLogo from "../../assets/vimlogo.svg";
import "./SideBar.css";

export const SideBar = () => {
    return (
      <>
          <div className={"Container"}>
              <div>
                  <object width={100} height={150} type="image/svg+xml" data={vimLogo}></object>
                  <p>Vim Tutorial</p>
              </div>
          </div>
      </>
    );
}