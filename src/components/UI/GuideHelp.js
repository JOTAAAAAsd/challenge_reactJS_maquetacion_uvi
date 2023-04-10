import { Button } from "react-bootstrap";
import { BsFillChatFill } from "react-icons/bs";


export const GuideHelp = () => {

    return <div className="guide_help_section_content">
        <div className="content_title">
            <h3>Necesitas ayuda? </h3>
        </div>
        <div className="content_btn">
            <Button size="lg" onMouseDown={(e) => e.preventDefault()}>
                Ver guía <BsFillChatFill />
            </Button>
        </div>
    </div>;
}