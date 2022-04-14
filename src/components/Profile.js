import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Profile() {
   const user = useSelector(selectUser);
   console.log(user);

   return (
      <div className="userProfile">
         <img src={user.image}></img>
         <h2>{user.name}</h2>
         <p>{user.username}</p>
         <h2>{user.bio}</h2>
         {
             user.location && <h2><LocationOnIcon/> {user.location}</h2>
         }
         {
             user.company && <h2><LocationOnIcon/> {user.company}</h2>
         }
         <h2>Repositories: {user.repo_count}</h2>
         <h2>Followers: {user.follower_count}</h2>
      </div>
   );
}

export default Profile;
