import { FC } from "react";
import AppNavbar from "../../components/UI/navbar/AppNavbar";
import MainTitle from "../../components/UI/mainTitle/MainTitle";
import PlusButton from "../../components/UI/plusBtn/PlusButton";
import QuestionButton from "../../components/UI/questionBtn/QuestionButton";
import { Link } from "react-router-dom";

interface MainPagesLayoutProps{
    children: React.ReactNode,
    title: string,
    addLink: string
}

const MainPagesLayout:FC<MainPagesLayoutProps> = ({children, title, addLink}) => {
    return ( 
        <>
            <MainTitle>{title}</MainTitle>
            <AppNavbar></AppNavbar>
            {children}
            <Link to = "/info-page">
                <QuestionButton></QuestionButton>
            </Link>
            <Link to = {addLink}>
                <PlusButton></PlusButton>
            </Link>
        </>
     );
}
 
export default MainPagesLayout;