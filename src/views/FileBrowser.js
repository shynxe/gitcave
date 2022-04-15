import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography,
  IconButton 
} from "@mui/material";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { AiFillFolder, AiOutlineFile } from "react-icons/ai";

const FileBrowser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [tree, setTree] = useState([]);
  const [dense, setDense] = React.useState(false);

  const { repo, current_tree } = location.state;
  console.log("current_tree", current_tree);

  useEffect(() => {
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
      });
  }, [current_tree]);

  useEffect(() => {
    fetch(`${repo.contributors_url}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [repo]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ minHeight: "10vh", width: "95%" }}>
        <Navbar />
      </Box>
      <Box
        display="flex"
        flexGrow="1"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          width: "70vw",
          margin: "0 auto",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box width={"100%"}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={100}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                {current_tree.split("/").pop() !== repo.default_branch && (
                  <div
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    (...)
                  </div>
                )}
              </Typography>
              <List dense={dense}>
                {tree.map((leaf) => (
                  <ListItem key={leaf.path}>
                    <ListItemIcon>
                      {leaf.type === "tree" ? (
                        <AiFillFolder />
                      ) : (
                        <AiOutlineFile />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={leaf.path}
                      style={{
                        color: leaf.type === "tree" ? "blue" : "black",
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
            </Grid>
          </Grid>

          <Button component={Link} to={"/user"}>
            Back to user
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FileBrowser;
