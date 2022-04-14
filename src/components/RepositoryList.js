import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import Pagination from "@mui/material/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUserAsync, setPageAsync} from "../slices/userSlice";
import useDebounce from "../utils/useDebounce";
import SearchInput from "./SearchInput";


const RepositoryList = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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

  const handleChange = (user) => {
    dispatch(setPageAsync(user));
  };

  return (
    <>
        <div w={"100%"}>
        <SearchInput placeholder="Search repos" onChange={(e) => setSearch(e.target.value)}/>

        {user?.repos.map((repo) => {
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
              sx={{ margin: "10" }}
            />
          );
        })}
        </div>
      <Pagination 
        onChange={(e) => { handleChange([user.username, e.target.textContent])}}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: '20px',
        }}
        count={Math.floor(user.repo_count / 30 + 1)}
        shape="rounded"
        color="primary"
      />
    </>
  );
};

export default RepositoryList;
