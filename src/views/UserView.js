import {Box, CircularProgress} from "@mui/material";
import RepositoryList from "../components/RepositoryList";
import React, {useEffect, useState} from "react";
import useDebounce from "../utils/useDebounce";
import SearchInput from "../components/SearchInput";
import {createLink, isEmpty} from "../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setPageSearchAsync, setUserAsync} from "../slices/userSlice";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const UserView = () => {
    const user = useSelector(selectUser);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEmpty(user)) return;
        if (debouncedSearch)
            dispatch(setPageSearchAsync(createLink(debouncedSearch, user.username)));
        else
            dispatch(setUserAsync(user.username));
    }, [debouncedSearch]);

    return (
        <>
            {
                !isEmpty(user) ?
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        minWidth: "100vw",
                        alignItems: "center"
                    }}>
                        <Box sx={{minHeight: "6vh", width: "100%", backgroundColor: "yellow"}}>
                            <Navbar/>
                        </Box>
                        <Box display="flex" flexGrow="1"
                             sx={{flexDirection: {xs: "column", md: "row"}, maxWidth: "70vw"}}>
                            <Box sx={{minWidth: {xs: "100%", md: "20vw"}, width: "fit-content"}}>
                                <Profile/>
                            </Box>
                            <Box sx={{flexGrow: 1, padding: '20px'}}>
                                <SearchInput placeholder="Search repos" onChange={(e) => setSearch(e.target.value)}/>
                                <RepositoryList isFiltered={debouncedSearch.length > 0}/>
                            </Box>
                        </Box>
                    </Box>
                    :
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        minWidth: "100vw",
                        alignItems: "center",
                        justifyContent: "center",
                    }}><CircularProgress /></Box>
            }
        </>
    )
}

export default UserView;
