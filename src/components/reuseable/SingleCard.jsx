import React from "react";
import {FaDatabase,FaFileCode} from "react-icons/fa"
const SingleCard = (props) => {
  const { title, totalNumber, icon } = props.item;
  return (
    <div className="single__card">
      <div className="card__content">
        <h4>{title}</h4>
        <span>{totalNumber}</span>
      </div>

      <span className="card__icon">
        {icon}
      </span>
    </div>
  );
};

export default SingleCard;
