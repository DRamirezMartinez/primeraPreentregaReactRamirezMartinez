import LogoMacdonalds from "../assets/mcdonalds-logo-footer-bg-white.png";

const Logo = ({tamano}) => {
    return (
        <img src={LogoMacdonalds} alt="logo" width={tamano}/>
    )
}
export default Logo;