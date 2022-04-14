import React, {useEffect, useState} from "react";
import RepositoryItem from "./RepositoryItem";
import Pagination from "@mui/material/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUserAsync, setPageAsync} from "../slices/userSlice";
import useDebounce from "../utils/useDebounce";
import SearchInput from "./SearchInput";
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
                            name={repo.name}
                            url={repo.svn_url}
                            updated={repo.updated_at}
                            stars={repo.stargazers_count}
                            language={repo.language}
                            forks={repo.forks_count}
                            license={repo.license}
                            visibility={repo.visibility}
                            description={repo.description}
                            sx={{margin: "10"}}
                        />
                    );
                })}
            </Box>
            {!isFiltered && user.repo_count / PER_PAGE >= 1 &&
            <Pagination
                onChange={(e) => {
                    handleChange([user.username, e.target.textContent])
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
