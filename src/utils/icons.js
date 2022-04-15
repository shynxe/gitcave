import {IoLogoJavascript} from "react-icons/io";
import {SiCplusplus, SiJava, SiPython, SiTypescript} from "react-icons/si";
import {AiOutlineFile} from "react-icons/ai";

// get react-icon for file extension
export const getIcon = (extension) => {
    switch (extension) {
        case "js":
            return <IoLogoJavascript/>;
        case "ts":
            return <SiTypescript/>;
        case "py":
            return <SiPython />;
        case "java":
            return <SiJava />;
        case "cpp":
            return <SiCplusplus />;
        // case "c":
        //     return "c-plus-plus";
        // case "sh":
        //     return "terminal";
        // case "rb":
        //     return "ruby";
        // case "go":
        //     return "go";
        // case "php":
        //     return "php";
        // case "cs":
        //     return "csharp";
        // case "swift":
        //     return "swift";
        // case "kt":
        //     return "kotlin";
        // case "scala":
        //     return "scala";
        // case "rs":
        //     return "rust";
        // case "hs":
        //     return "haskell";
        // case "clj":
        //     return "clojure";
        // case "elm":
        //     return "elm";
        // case "erl":
        //     return "erlang";
        // case "fs":
        //     return "fsharp";
        // case "dart":
        //     return "dart";
        // case "ex":
        //     return "elixir";
        // case "jl":
        //     return "julia";
        // case "lua":
        //     return "lua";
        // case "pl":
        //     return "perl";
        // case "r":
        //     return "r";
        default:
            return <AiOutlineFile />;
    }
}
