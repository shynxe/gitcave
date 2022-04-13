import React, { useEffect, useState } from "react";
import axios from "axios";
import RepositoryItem from "./RepositoryItem";
import Pagination from "@mui/material/Pagination";

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  const API_URL = `https://api.github.com/users/Anvaka/repos?page=${page}`;

  const handleChange = (page) => {
    setPage(page);
    // windows.scroll(0, 0);
  };

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setRepos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {repos.length > 0 ? (
        <p>
          {repos.map((repo) => {
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
                sx={{ margin: "10" }}
              />
            );
          })}
        </p>
      ) : (
        <p className="loading"> Loading... </p>
      )}

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
