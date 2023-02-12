import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Lets Make Over ..!
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8053329552</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href = "mailto: abc@example.com"><span type='email' >kour0912@gmail.com</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
