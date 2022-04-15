import {IoLogoJavascript} from "react-icons/io";
import {SiCplusplus, SiCsharp, SiCss3, SiHtml5, SiJava, SiKotlin, SiPython, SiTypescript} from "react-icons/si";
import {AiFillFileImage, AiOutlineFile} from "react-icons/ai";
import {GoDiffIgnored} from "react-icons/go";
import {VscJson} from "react-icons/vsc";

// get react-icon for file extension
export const getIcon = (extension) => {
    switch (extension) {
        case "js":
            return <IoLogoJavascript/>;
        case "ts":
            return <SiTypescript/>;
        case "py":
            return <SiPython/>;
        case "java":
            return <SiJava/>;
        case "cpp":
            return <SiCplusplus/>;
        case "html":
            return <SiHtml5/>;
        case "css":
            return <SiCss3/>;
        case "gitignore":
            return <GoDiffIgnored/>;
        case "png":
            return <AiFillFileImage/>;
        case "jpg":
            return <AiFillFileImage/>;
        case "jpeg":
            return <AiFillFileImage/>;
        case "gif":
            return <AiFillFileImage/>;
        case "svg":
            return <AiFillFileImage/>;
        case "ico":
            return <AiFillFileImage/>;
        case "json":
            return <VscJson/>;
        case "kt":
            return <SiKotlin/>;
        case "cs":
            return <SiCsharp />;
        default:
            return <AiOutlineFile/>;
    }
}
