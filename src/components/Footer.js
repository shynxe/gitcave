import React from 'react'
import { DiGithubBadge, DiGithubAlt } from "react-icons/di";
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <>
        <hr></hr>
        <Box sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
            <DiGithubBadge style={{fontSize:"100px", color:'rgba(166, 218, 255, 1)'}}/>
            <Typography>
                Made with a lot of effort by: Armand <DiGithubAlt /> Alex <DiGithubAlt/> Chiri <DiGithubAlt/> Raducu <DiGithubAlt/>
            </Typography>
        </Box>

    
    </>
  )
}

export default Footer