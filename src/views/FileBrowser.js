import {Link, useLocation, useNavigate} from "react-router-dom";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    Typography, CircularProgress, IconButton,
} from "@mui/material";
import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {selectUser} from "../slices/userSlice";
import {AiFillFolder} from "react-icons/ai";
import {getIcon} from "../utils/icons";
import {getFileExtension} from "../utils/utils";
import RepositoryItem from "../components/RepositoryItem";
import { RiFolderReceivedFill } from "react-icons/ri";

const FileBrowser = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [isLoading, setIsLoading] = useState(true);
    const [tree, setTree] = useState([]);

    const {repo, current_tree} = location.state;

    useEffect(() => {
        setIsLoading(true);
        fetch(current_tree)
            .then((response) => response.json())
            .then((data) => {
                // sort the tree by type and name
                data.tree.sort((a, b) => {
                    if (a.type === "tree" && b.type === "tree")
                        return a.path.localeCompare(b.path);
                    else if (a.type === "tree") return -1;
                    else if (b.type === "tree") return 1;
                    else return a.path.localeCompare(b.path);
                });
                setTree(data.tree);
                setTimeout(() => setIsLoading(false), 500);
            });
    }, [current_tree]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box sx={{minHeight: "10vh", width: "95%"}}>
                <Navbar/>
            </Box>

            <Box
                display="flex"
                flexGrow="1"
                sx={{
                    flexDirection: {xs: "column", md: "row"},
                    width: "70vw",
                    margin: "0 auto",
                    alignItems: {xs: "center", md: "flex-start"},
                }}
            >
                <Box width={"100%"}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={100}>

                            <RepositoryItem repo={repo}/>

                            {isLoading ?
                                <Box display={"flex"} justifyContent={"center"} width={"100%"} height={"100%"}
                                     alignItems={"center"}>
                                    <CircularProgress/>
                                </Box>
                                :
                                <>
                                    <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                                        {current_tree.split("/").pop() !== repo.default_branch && (
                                            <div
                                                style={{
                                                    color: "blue",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    setIsLoading(true);
                                                    window.history.back();
                                                }}
                                            >
                                                <IconButton>
                                                    <RiFolderReceivedFill/> Go back
                                                </IconButton>
                                            </div>
                                        )}
                                    </Typography>
                                    <List>
                                        {tree.map((leaf) => (
                                            <ListItem key={leaf.path}>
                                                <ListItemIcon>
                                                    {leaf.type === "tree" ? (
                                                        <AiFillFolder/>
                                                    ) : (
                                                        getIcon(getFileExtension(leaf.path))
                                                    )}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={leaf.path}
                                                    style={{
                                                        color: leaf.type === "tree" ? "#1976d2" : "black",
                                                        cursor: leaf.type === "tree" ? "pointer" : "default",
                                                    }}
                                                    onClick={() => {
                                                        navigate(`/browse`, {
                                                            state: {
                                                                repo: repo,
                                                                current_tree: leaf.url,
                                                            },
                                                        });
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </>
                            }


                            <Button component={Link} to={"/user"}>
                                Back to user
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default FileBrowser;
