import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Profile() {
   const user = useSelector(selectUser);
   console.log(user);

   return (
      <div className="userProfile">
         <img src={user.image}></img>
         <h2>{user.name}</h2>
         <p>{user.username}</p>
         <h2><PeopleAltIcon /> {user.follower_count} followers - {user.following_count} following</h2>
         <h2>{user.bio}</h2>
         {
             user.location && <h2><LocationOnIcon/> {user.location}</h2>
         }
         {
             user.company && <h2><LocationOnIcon/> {user.company}</h2>
         }
         <h2><LinkIcon /> {user.url}</h2>
         <h2>Repositories: {user.repo_count}</h2>
      </div>
   );
}

export default Profile;
