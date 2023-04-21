import { NavLink } from "react-router-dom";
import styles from "./AppNavbar.module.css";

const AppNavbar = () => {

    let activeItemClasses = styles.navigationBlock__item + ' ' + styles.navigationBlock__itemActive;

    return ( 
        <div className = {styles.navigationBlock}>
            <NavLink to ="/" 
                className={({ isActive }) =>
                    isActive ? activeItemClasses : styles.navigationBlock__item
                }>
                Notes
            </NavLink>
            <NavLink to ="/folders" 
                className={({ isActive }) =>
                    isActive ? activeItemClasses : styles.navigationBlock__item
                }>
                Folders
            </NavLink> 
        </div>
    );
}
 
export default AppNavbar;