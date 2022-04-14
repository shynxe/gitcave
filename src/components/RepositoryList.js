import React, { useEffect, useState } from "react";
import axios from "axios";
import RepositoryItem from "./RepositoryItem";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import useDebounce from "../utils/useDebounce";
import SearchInput from "./SearchInput";
   

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const user = useSelector(selectUser);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const createLink = () => {
    const queryString = 'q=' + encodeURIComponent(`${debouncedSearch} in:name,description user:${user.username}`);  
    
    console.log('queryString:', queryString)
    console.log(
        `https://api.github.com/search/repositories?${queryString}`
      ); }

    if (debouncedSearch) createLink();
  }, [debouncedSearch]);

  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <p>
        <SearchInput placeholder="Search repos" onChange={(e) => setSearch(e.target.value)}/>
        
        {user?.repos.map((repo) => {
          return (
            <RepositoryItem
              name={repo.name}
              url={repo.svn_url}
              updated={repo.updated_at}
              stars={repo.stargazers_count}
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

      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        count={Math.floor(user.repo_count / 30 + 1)}
        shape="rounded"
      />
    </>
  );
};

export default RepositoryList;
