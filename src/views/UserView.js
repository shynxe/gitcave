import {Box, Container} from "@mui/material";

const UserView = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", minWidth: "100vw", backgroundColor:"red"}}>
            <Box sx={{minHeight: "6vh", width: "100%", backgroundColor:"yellow"}}>
                navbar
            </Box>
            <Box display="flex" flexGrow="1" sx={{ flexDirection: { xs: "column", md: "row"} }}>
                <Box sx={{minWidth: {xs: "100%", md: "20vw"}, width: "fit-content", backgroundColor: "green"}}>
                    profile goes here
                </Box>
                <Box sx={{flexGrow: 1, backgroundColor: "blue"}}>
                    repository list goes here
                </Box>
            </Box>
        </Box>
    )
}

export default UserView;
