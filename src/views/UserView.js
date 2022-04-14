import {Box} from "@mui/material";
import RepositoryList from "../components/RepositoryList";

const UserView = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", minWidth: "100vw", alignItems:"center"}}>
            <Box sx={{minHeight: "6vh", width: "100%", backgroundColor:"yellow"}}>
                navbar
            </Box>
            <Box display="flex" flexGrow="1" sx={{ flexDirection: { xs: "column", md: "row"}, maxWidth: "70vw" }}>
                <Box sx={{minWidth: {xs: "100%", md: "20vw"}, width: "fit-content"}}>
                    profile goes here
                </Box>
                <Box sx={{flexGrow: 1, padding:'20px'}}>
                    <RepositoryList/>
                </Box>
            </Box>
        </Box>
    )
}

export default UserView;
