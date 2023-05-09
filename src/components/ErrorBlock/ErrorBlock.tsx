import { FC } from "react";
import AppButton from "../../components/UI/button/AppButton";
import { Link } from "react-router-dom";
import styles from "./ErrorBlock.module.css";

const ErrorBlock:FC = () => {
    return ( 
        <div className={styles.errorBlockWrapper}>
            <p className="alert-message">Page isn't found</p>
            <div className={styles.btnWrapper}>
                <Link to="/folders">
                    <AppButton 
                        type={'button'} 
                        variant={'greyOutlineButton'}>
                        Back
                    </AppButton>
                </Link>
            </div>
        </div>
    );
}
 
export default ErrorBlock;