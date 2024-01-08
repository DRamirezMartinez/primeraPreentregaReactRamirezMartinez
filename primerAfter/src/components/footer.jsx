import LogoGoogle from "../assets/disponible_google_play_3x_c977cae3bc.png";
import LogoApple from "../assets/app_store_3x_d293084ca1.png";
import Logo from "./logo";
import PreFooter from "./PreFooter";

const Footer = () => {
    return (
        <>
        <PreFooter />
        <div className="container my-3">
            <div className="row my-3">
                <div className="col">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">FB</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">X</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">YT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">IG</a>
                        </li>                
                    </ul>
                </div>
                <div className="col text-end">
                    <a href="#" className="mx-1"> <img src= {LogoApple}  alt="AppleApp" width={115} /></a>
                    <img src= {LogoGoogle} alt="AppGoogle" width={129}/>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Politica de privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Defensa del consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
                        </li>                
                    </ul>
                </div>
                <div className="col-md-2 text-secondary">
                    <p> <Logo tamano={40} /> @ McDonald's 2023</p>
                </div>
            </div>
        </div> 

        </>

        
    )
}

export default Footer;