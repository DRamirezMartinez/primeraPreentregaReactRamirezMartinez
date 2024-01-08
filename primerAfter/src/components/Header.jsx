
import NavBar from "./Navbar";
import Logo from "./logo";


const Header = () => {
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <Logo tamano={120} />
                </div>
                <div className="col-md-11 d-flex d-flex align-items-end pb-1">
                    <NavBar />
                </div>                
            </div>
        </div>
    )
}

export default Header;