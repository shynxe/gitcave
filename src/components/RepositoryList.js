import React from "react";
import RepositoryItem from "./RepositoryItem";
import Pagination from "@mui/material/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setPageAsync} from "../slices/userSlice";
import {Box} from "@mui/material";
import {PER_PAGE} from "../utils/constants";


const RepositoryList = ({isFiltered}) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleChange = (user) => {
        dispatch(setPageAsync(user));
    };

    return (
        <>
            <Box width={"100%"}>

                {user?.repos?.map((repo) => {
                    return (
                        <RepositoryItem
                            key={repo.id}
                            repo={repo}
                            sx={{margin: "10"}}
                        />
                    );
                })}
            </Box>
            {!isFiltered && user.repo_count / PER_PAGE >= 1 &&
            <Pagination
                onChange={(e) => {
                    handleChange([user.username, e.target.textContent]);
                    window.scrollTo(0, 0);
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: '20px',
                }}
                count={Math.floor(user.repo_count / PER_PAGE + 1)}
                shape="rounded"
                color="primary"
            />
            }
        </>
    );
};

export default RepositoryList;
