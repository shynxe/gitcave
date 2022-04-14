import {useLocation, useNavigate} from "react-router-dom";

const FileBrowser = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.data;

    return (
        <>
            <div>
                {data}
            </div>
            <button onClick={_ => {
                navigate("/browse", {
                    state: {
                        data: data+1,
                    },
                });
            }}>Next</button>
            <button onClick={_ => {
                window.history.back();
            }}>Back
            </button>
        </>
    )
};

export default FileBrowser;
