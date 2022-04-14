import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import { RiGitRepositoryFill } from "react-icons/ri";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Box from "@mui/material/Box";
import { Image } from "@mui/icons-material";
import { Typography, Link } from "@mui/material";

function Profile() {
   const user = useSelector(selectUser);

   return (
      <Box className="userProfile">
         <img
            style={{
               transform: "translate(0, -10px)",
               borderRadius: "50%",
               width: "12vw",
            }}
            src={user.image}
         />
         <Typography component="div">
            <Box sx={{ fontSize: "h4.fontSize", m: 1 }}> {user.name} </Box>
            <Box sx={{ fontSize: "h6.fontSize", m: 1 }}> {user.username} </Box>
            <Box sx={{ typography: "subtitle2", fontSize: "default", m: 1 }}>
               <PeopleAltIcon sx={{ fontSize: "default" }} />{" "}
               {user.follower_count} followers - {user.following_count}{" "}
               following
            </Box>

            <Box sx={{ fontSize: 16, m: 1 }}> {user.bio} </Box>
            <hr></hr>

            <Box sx={{ fontSize: "default", m: 1 }}>
               <RiGitRepositoryFill sx={{ fontSize: "default", m: 1 }} />
               Repositories: {user.repo_count}
            </Box>
            {user.location && (
               <Box sx={{ fontSize: "default", m: 1 }}>
                  <LocationOnIcon sx={{ fontSize: "default" }} />{" "}
                  {user.location}
               </Box>
            )}
            {user.company && (
               <Box sx={{ fontSize: "default", m: 1 }}>
                  <LocationOnIcon sx={{ fontSize: "default" }} /> {user.company}
               </Box>
            )}
            {user.url && (
               <Link
                  color="inherit"
                  sx={{ fontSize: "default", m: 1 }}
                  href={user.url}
               >
                  <LinkIcon sx={{ fontSize: "default" }} /> {user.url}
               </Link>
            )}
         </Typography>
      </Box>
   );
}

export default Profile;
