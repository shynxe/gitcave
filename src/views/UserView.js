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
import Footer from "../components/Footer";

const UserView = () => {
    const user = useSelector(selectUser);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
    const dispatch = useDispatch();

    console.log("user: ", user);

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
                        alignItems: "center",
                        minHeight: "100vh"
                    }}>
                        <Box sx={{minHeight: "10vh", width: "95%"}}>
                            <Navbar/>
                        </Box>
                        <Box display="flex" flexGrow="1"
                             sx={{flexDirection: {xs: "column", md: "row"}, maxWidth: "70vw", alignItems: {xs: 'center', md: 'flex-start'}}}>
                            <Box sx={{maxWidth: {xs: "90%", md: "20vw"}, width: "fit-content"}}>
                                <Profile/>
                            </Box>
                            <Box sx={{flexGrow: 1, padding: '20px', minWidth:'50vw'}}>
                                <SearchInput placeholder="Search repos" onChange={(e) => setSearch(e.target.value)}/>
                                <RepositoryList isFiltered={debouncedSearch.length > 0}/>
                            </Box>
                        </Box>
                        <Box sx={{minHeight: "10vh", width: "95%", position:"relative", bottom:"0"}}>
                            <Footer/>
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
