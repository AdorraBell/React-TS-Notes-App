import { Link } from "react-router-dom";
import AppButton from "../components/UI/button/AppButton";
import MainTitle from "../components/UI/mainTitle/MainTitle";

const FormattingInfoPage = () => {
    return ( 
        <>
            <MainTitle>Formatting syntax</MainTitle>
            <div className = "container">
                <p>To create a heading, add up to three # symbols before and after your heading text. The number of # symbols determines the size of the heading.</p>
                <h2>## H2 heading ##</h2>
                <h3>### H3 heading ###</h3>
                <hr/>
                <h2>Styling text</h2>
                <div className="formatting-info-page__styling-text-blocks">
                    <div className = "formatting-info-page__styling-text-block">
                        <p>Bold</p>
                        <p>** ** or __ __</p>
                        <p>**Bold text**</p>
                        <p><strong>Bold text</strong></p>
                    </div>
                    <div className = "formatting-info-page__styling-text-block">
                        <p>Italic</p>
                        <p>* * or _ _</p>
                        <p>*Italic text*</p>
                        <p><i>Italic text</i></p>
                    </div>
                    <div className = "formatting-info-page__styling-text-block">
                        <p>Strikethrough</p>
                        <p>~~ ~~</p>
                        <p>~~Striked out text~~</p>
                        <p><s>Striked out text</s></p>
                    </div>
                    <div className = "formatting-info-page__styling-text-block">
                        <p>Highlight</p>
                        <p>== ==</p>
                        <p>==Highlighted text==</p>
                        <p><mark>Highlighted text</mark></p>
                    </div>
                    <div className = "formatting-info-page__styling-text-block">
                        <p>Bold and nested italic</p>
                        <p>** ** and _ _</p>
                        <p>**Bold text and _nested italic_ text**</p>
                        <p><strong>Bold text and <i>nested italic</i> text</strong></p>
                    </div>
                    <div className = "formatting-info-page__styling-text-block">
                        <p>Bold and italic</p>
                        <p>*** *** or ___ ___</p>
                        <p>***Bold and italic text***</p>
                        <p><strong><i>Bold and italic text</i></strong></p>
                    </div>
                </div>
                <hr/>
                <h2>Lists</h2>
                <div className="formatting-info-page__styling-text-blocks">
                    <div className = "formatting-info-page__styling-text-block">
                        <p>-- Point 1 --</p>
                        <p>-- Point 2 --</p>
                        <p>-- Point 3 --</p>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                        </ul>
                    </div>
                </div>
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