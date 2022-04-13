import React, {useEffect, useState} from "react";
import axios from "axios";
import RepositoryItem from "./RepositoryItem";
import Pagination from "@mui/material/Pagination";
import {useSelector} from "react-redux";
import {selectUser} from "../slices/userSlice";


const RepositoryList = () => {
    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const user = useSelector(selectUser);

    const handleChange = (page) => {
        setPage(page);
    };

    return (
        <>
            <p>
                {user?.repos.map((repo) => {
                    return (
                        <RepositoryItem
                            name={repo.name}
                            url={repo.svn_url}
                            updated={repo.updated_at}
                            stars={repo.stargazers_count}
                            watchers={repo.watchers}
                            language={repo.language}
                            forks={repo.forks_count}
                            license={repo.license}
                            visibility={repo.visibility}
                            description={repo.description}
                            sx={{margin: "10"}}
                        />
                    );
                })}
            </p>

            <Pagination
                onChange={(e) => handleChange(e.target.textContent)}
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
                count={10}
                shape="rounded"
            />
        </>
    );
};

export default RepositoryList;
