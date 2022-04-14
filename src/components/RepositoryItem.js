import React from "react";
import "./RepositoryItem.css";
import Card from "@mui/material/Card";
import { CardContent, experimentalStyled } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { FaBalanceScale, FaCircle } from "react-icons/fa";
import moment from 'moment';
import { getColor } from "../utils/utils";

const RepositoryItem= ({ name, url, updated, stars, language, forks, license, visibility, description}) => {


const lastUpdated = (date) => {

  return(moment(date).fromNow())
}

  return (
    <>
      <div className="container">
        <Card>
          <CardContent>
            <div className="repo">
              <div className="title">
                <a href={url} className="repo-title">
                  {name}
                </a>
                <span className="label"> {visibility} </span>
              </div>
              <p className="repo-description">
                {description}
              </p>
              <div>
               {language ? (<span className="repo-details">
                  <FaCircle style={{color:getColor(language)}}/> {language}
                </span>) : null}

                <span className="repo-details">
                  <AiOutlineStar /> {stars}
                </span>

                <span className="repo-details">
                  <GoRepoForked /> {forks}
                </span>

                {license ? (<span className="repo-details">
                  <FaBalanceScale /> {license.name}
                </span>) : null }

                <span className="last-updated"> Last Updated: {lastUpdated(updated)} </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RepositoryItem;
