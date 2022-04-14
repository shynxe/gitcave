import React from "react";
import Card from "@mui/material/Card";
import { CardContent, experimentalStyled } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { FaBalanceScale, FaCircle } from "react-icons/fa";
import moment from "moment";
import { getColor } from "../utils/utils";
import { Typography, Link, Box } from "@mui/material";

const RepositoryItem = ({
  name,
  url,
  updated,
  stars,
  language,
  forks,
  license,
  visibility,
  description,
}) => {
  const lastUpdated = (date) => {
    return moment(date).fromNow();
  };

  return (
    <>
      <Card sx={{ margin: "10px" }}>
        <CardContent>
          <Link
            href={url}
            sx={{ color: "rgba(166, 218, 255, 1)", fontSize: "h5.fontSize" }}
          >
            {name}
          </Link>
          <Typography
            sx={{
              display: "inline-block",
              padding: "0 7px",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "18px",
              border: "1px solid grey",
              borderRadius: "2em",
              color: "#57606a",
              margin: "10px",
            }}
          >
            {visibility}{" "}
          </Typography>

          <Typography sx={{ fontSize: 16 }}>{description}</Typography>
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {language ? (
              <Typography sx={{ marginRight: "15px" }}>
                <FaCircle style={{ color: getColor(language) }} /> {language}
              </Typography>
            ) : null}

            <Typography sx={{ marginRight: "15px" }}>
              <AiOutlineStar /> {stars}
            </Typography>

            <Typography sx={{ marginRight: "15px" }}>
              <GoRepoForked /> {forks}
            </Typography>

            {license ? (
              <Typography sx={{ marginRight: "15px" }}>
                <FaBalanceScale /> {license.name}
              </Typography>
            ) : null}

            <Typography sx={{ marginRight: "15px" }}>
              
              Last Updated: {lastUpdated(updated)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default RepositoryItem;
