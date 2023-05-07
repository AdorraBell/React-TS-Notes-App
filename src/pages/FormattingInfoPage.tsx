import { Link } from "react-router-dom";
import AppButton from "../components/UI/button/AppButton";
import MainTitle from "../components/UI/mainTitle/MainTitle";
import { FC } from "react";
import FormattingInfo from "../components/FormattingInfo/FormattingInfo";

const FormattingInfoPage:FC = () => {
    return ( 
        <>
            <MainTitle>Formatting syntax</MainTitle>
            <div className = "container">
                <FormattingInfo></FormattingInfo>
                <div className = "btns-wrapper">
                    <Link to = "/">
                        <AppButton 
                            type = {'button'} 
                            variant = {'orangeButton'}>
                            Back
                        </AppButton>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default FormattingInfoPage;