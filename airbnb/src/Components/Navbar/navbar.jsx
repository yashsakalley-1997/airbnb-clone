import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import LanguageIcon from "@material-ui/icons/Language";


export const Navbar =()=>{
    return (
        
        <>
        <div className={Styles.abody}>
            <div className={Styles.anavbar}>
            {/* <img src="https://starpng.com/public/uploads/preview/airbnb-logo-airbnb-logo-white-on-black-png-image-transparent-101576586899a2xgsawyyh.png" width="150px" height="100px"></img> */}
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Airbnb_logo.png" width="100px" height="30px"></img>
            <input type="text" placeholder="Start your search"></input>
            <p>Become a host</p>
            <LanguageIcon/>
            </div>
            </div>
        </>
    )
}