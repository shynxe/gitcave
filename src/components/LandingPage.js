import React, { useState } from "react";
import "./LandingPage.css";
import pcWork from "../images/pcWork.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion/dist/framer-motion";
import {
   leftDivVariants,
   rightDivVariants,
   imageVariants,
   welcomeVariants,
} from "./utils";

function LandingPage() {
   const [secondTransition, setSecondTransition] = useState(false);

   const handleFirstClick = () => {
      setSecondTransition(true);
   };

   return (
      <div className="landingPage">
         <motion.div
            className="left"
            initial={"initial"}
            animate={secondTransition && "equalized"}
            variants={leftDivVariants}
            transition={{ duration: "1" }}
         >
            <h1
               className="welcome"
               initial={"initial"}
               animate={secondTransition && 'hidden'}
               variants={welcomeVariants}
               transition={{ duration: "1" }}
            >
               Welcome to
            </h1>
            <h1 className="gitCave">
               <span className="git">Git</span>Cave
            </h1>
            <GitHubIcon
               sx={{
                  color: "rgba(166, 218, 255, 1)",
                  marginTop: "12%",
                  mixBlendMode: "color-dodge",
                  fontSize: "7vw",
                  stroke: "black",
                  strokeWidth: "0.4",
               }}
            />
            <TextField
               id="outlined-basic"
               label="Username"
               variant="outlined"
               sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                     borderColor: "rgba(166, 218, 255, 1)",
                     borderWidth: "4px",
                     borderRadius: "25px",
                     color: "white",
                  },
                  width: "50%",
                  display: "none",
               }}
            />
            <Button
               onClick={!secondTransition && handleFirstClick}
               variant="contained"
               sx={{
                  color: "white",
                  marginBottom: "25%",
                  backgroundColor: "rgba(166, 218, 255, 1)",
                  mixBlendMode: "color-dodge",
                  borderRadius: "50px",
                  border: "2px solid black",
                  fontSize: "0.9vw",
                  fontWeight: "bolder",
                  textShadow:
                     "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
               }}
            >
               Search User
            </Button>
         </motion.div>
         <motion.div
            className="right"
            initial={"initial"}
            animate={secondTransition && "equalized"}
            variants={rightDivVariants}
            transition={{ duration: "1" }}
         >
            <motion.img
               src={pcWork}
               className="pcWork"
               initial={"initial"}
               animate={secondTransition && "equalized"}
               variants={imageVariants}
               transition={{ duration: "1" }}
            ></motion.img>
         </motion.div>
      </div>
   );
}

export default LandingPage;
