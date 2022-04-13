import React, { useEffect, useState } from "react";
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
   inputVariants,
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
            <motion.h1
               className="welcome"
               initial={"initial"}
               animate={secondTransition && "hidden"}
               variants={welcomeVariants}
               transition={{delay: '1', duration: "1" }}
            >
               Welcome to
            </motion.h1>
            <motion.h1
               className="gitCave"
               initial={"initial"}
               animate={secondTransition && "hidden"}
               variants={welcomeVariants}
               transition={{delay: '1', duration: "1" }}
            >
               <span className="git">Git</span>Cave
            </motion.h1>
            <GitHubIcon
               sx={{
                  color: "primary.main",
                  marginTop: "12%",
                  mixBlendMode: "color-dodge",
                  fontSize: "7vw",
               }}
            />
            <motion.div
               initial={"initial"}
               style={{width: '50%'}}
               animate={secondTransition && "displayed"}
               variants={inputVariants}
               transition={{delay: '1.5', duration: "1" }}
            >
               <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  sx={{
                     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        borderWidth: "4px",
                        borderRadius: "25px",
                        color: "white",
                     },
                     width: "100%",
                  }}
               />
            </motion.div>
            <Button
               onClick={!secondTransition && handleFirstClick}
               variant="contained"
               sx={{
                  color: "white",
                  marginBottom: "25%",
                  backgroundColor: "primary.main",
                  mixBlendMode: "color-dodge",
                  borderRadius: "50px",
                  fontSize: "0.9vw",
                  fontWeight: "bolder",
               }}
            >
               {secondTransition ? 'Search User' : "Start"}
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
