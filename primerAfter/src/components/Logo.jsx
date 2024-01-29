/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LogoMacdonalds from "../assets/mcdonalds-logo-footer-bg-white.png";

const Logo = ({tamano}) => {
    return (
        <Link to={"/"}>
        <img src={LogoMacdonalds} alt="MacDonalds Argentina" width={tamano}/>
        </Link>
    )
}
export default Logo;