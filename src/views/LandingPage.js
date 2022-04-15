import React, {useState} from "react";
import "../components/LandingPage.css";
import pcWork from "../images/pcWork.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Box} from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {imageVariants, inputVariants, leftDivVariants, rightDivVariants, welcomeVariants,} from "../utils/animations";
import {motion} from "framer-motion";
import {clear, setUserAsync} from "../slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const [secondTransition, setSecondTransition] = useState(false);
    const [user, setUser] = useState(undefined);
    const [buttonValue, setButtonValue] = useState("Start");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        if (!secondTransition) {
            setSecondTransition(true);
            setTimeout(() => {
                setButtonValue("Search User");
            }, 2200);
        } else {
            fetch(`https://api.github.com/users/${user}`)
                .then((response) => {
                    if (response.ok) {
                        setError(false);
                        return response.json();
                    } else {
                        console.log("error");
                        setError(true);
                    }
                })
                .then((data) => {
                    if (data) {
                        dispatch(clear());
                        dispatch(setUserAsync(data.login));
                        navigate("/user");
                        console.log(data);
                    }
                });
        }
    };

    return (
        <div className="landingPage">
            <motion.div
                className="left"
                initial={"initial"}
                animate={secondTransition && "equalized"}
                variants={leftDivVariants}
                transition={{duration: "1"}}
            >
                <motion.h1
                    className="welcome"
                    initial={"initial"}
                    animate={secondTransition && "hidden"}
                    variants={welcomeVariants}
                    transition={{delay: "1", duration: "1"}}
                >
                    Welcome to
                </motion.h1>
                <motion.h1
                    className="gitCave"
                    initial={"initial"}
                    animate={secondTransition && "hidden"}
                    variants={welcomeVariants}
                    transition={{delay: "1", duration: "1"}}
                >
                    <span className="git">Git</span>Cave
                </motion.h1>
                <GitHubIcon
                    sx={{
                        color: "primary.main",
                        marginTop: "12%",
                        mixBlendMode: "color-dodge",
                        fontSize: "7vw",
                    }}
                />
                {error && <h1 className="errorMessage">User not found :(</h1>}
                <Box
                    component={motion.div}
                    initial={"initial"}
                    sx={{width: {sm: "80%", md: "50%"}}}
                    animate={secondTransition && "displayed"}
                    variants={inputVariants}
                    transition={{delay: "1.5", duration: "1"}}
                >
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        onChange={(event) => {
                            setUser(event.target.value);
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                                borderWidth: "4px",
                                borderRadius: "25px",
                                color: "white",
                            },
                            width: "100%",
                        }}
                    />
                </Box>
                <Button
                    onClick={handleClick}
                    variant="contained"
                    sx={{
                        color: "white",
                        marginBottom: "25%",
                        backgroundColor: "primary.main",
                        mixBlendMode: "color-dodge",
                        borderRadius: "50px",
                        fontSize: "0.9vw",
                        fontWeight: "bolder",
                    }}
                >
                    {buttonValue}
                </Button>
            </motion.div>
            <motion.div
                className="right"
                initial={"initial"}
                animate={secondTransition && "equalized"}
                variants={rightDivVariants}
                transition={{duration: "1"}}
            >
                <motion.img
                    src={pcWork}
                    className="pcWork"
                    initial={"initial"}
                    animate={secondTransition && "equalized"}
                    variants={imageVariants}
                    transition={{duration: "1"}}
                />
            </motion.div>
        </div>
    );
}

export default LandingPage;
