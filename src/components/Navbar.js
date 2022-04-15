import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUserAsync} from "../slices/userSlice";
import {errorStyle, style} from "../utils/animations";

export default function Navbar() {
    const [user, setUser] = useState(undefined);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        fetch(`https://api.github.com/users/${user}`)
            .then((response) => {
                if (response.ok) {
                    setError(false);
                    return response.json();
                } else {
                    setError(true);
                }
            })
            .then((data) => {
                if (data) {
                    setOpen(false);
                    dispatch(setUserAsync(data.login));
                    navigate("/user");
                }
            });
    };

    return (
        <Box sx={{flexGrow: 1, padding: "0rem"}}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={!error ? style : errorStyle}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{marginBottom: "5%", textAlign: "center"}}
                    >
                        SEARCH NEW USER
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        onChange={(event) => {
                            setUser(event.target.value);
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                {
                                    borderColor: "primary.main",
                                    borderWidth: "4px",
                                    borderRadius: "25px",
                                    color: "white",
                                },
                            width: "100%",
                        }}
                    />
                    <Button
                        onClick={handleClick}
                        variant="contained"
                        sx={{
                            backgroundColor: "primary.main",
                            borderRadius: "50px",
                            fontSize: "0.8vw",
                            marginLeft: "34%",
                            marginTop: "5%",
                            fontWeight: "bold",
                        }}
                    >
                        Search User
                    </Button>
                </Box>
            </Modal>
            <AppBar position="static">
                <Toolbar sx={{padding: "0.5rem", color: "white"}}>
                    <div>
                        <GitHubIcon
                            sx={{
                                fontSize: "3rem",
                                marginRight: "5px",
                                color: "white",
                            }}
                        />
                    </div>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            flexGrow: "1",
                            marginRight: "15px",
                            fontWeight: "bolder",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}
                    >
                        <span style={{color: "rgb(237, 151, 86)"}}>Git</span>Cave
                    </Typography>
                    <Button
                        sx={{
                            textWrap: "none",
                            backgroundColor: "rgb(237, 151, 86)",
                            ml: "auto",
                            fontWeight: "bold",
                            borderRadius: "25px",
                        }}
                        color="inherit"
                        onClick={handleOpen}
                    >
                        Switch User
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
