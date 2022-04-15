import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, Link, Typography } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { FaBalanceScale, FaCircle } from "react-icons/fa";
import moment from "moment";
import { getColor } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const RepositoryItem = ({ repo }) => {
  const navigate = useNavigate();
  const lastUpdated = (date) => {
    return moment(date).fromNow();
  };

  console.log(repo);

  return (
    <>
      <Card sx={{ margin: "10px", border: "1px solid rgb(0,0,0,.1)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)"}}>
        <CardContent>
          <Link
            href={""}
            sx={{ color: "rgba(166, 218, 255, 1)", fontSize: "h5.fontSize" }}
            onClick={() =>
              navigate(`/browse`, {
                state: {
                  repo: repo,
                  current_tree: `https://api.github.com/repos/${repo.owner.login}/${repo.name}/git/trees/${repo.default_branch}`,
                },
              })
            }
          >
            {repo.name}
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
            {repo.visibility}
          </Typography>

          <Typography sx={{ fontSize: 16 }}>{repo.description}</Typography>
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {repo.language ? (
              <Typography sx={{ marginRight: "15px" }}>
                <FaCircle style={{ color: getColor(repo.language) }} />{" "}
                {repo.language}
              </Typography>
            ) : null}

            <Typography sx={{ marginRight: "15px" }}>
              <AiOutlineStar /> {repo.stargazers_count}
            </Typography>

            <Typography sx={{ marginRight: "15px" }}>
              <GoRepoForked /> {repo.forks}
            </Typography>

            {repo.license ? (
              <Typography sx={{ marginRight: "15px" }}>
                <FaBalanceScale /> {repo.license.name}
              </Typography>
            ) : null}

            <Typography sx={{ marginRight: "15px" }}>
              Last Updated: {lastUpdated(repo.updated_at)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default RepositoryItem;
