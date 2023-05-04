import { FC } from "react";
import styles from "./PagesWthForm.module.css";
import MainTitle from "../../components/UI/mainTitle/MainTitle";

interface PagesWthFormLayoutProps {
    children: React.ReactNode,
    title: string
}

const PagesWthFormLayout:FC<PagesWthFormLayoutProps> = ({children, title}) => {
    return ( 
        <div className = {styles.PagesWthForm__Wrapper}>
            <MainTitle>{title}</MainTitle>
            {children}
        </div>
    );
}
 
export default PagesWthFormLayout;