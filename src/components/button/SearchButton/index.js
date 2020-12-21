import React from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import "./index.scss";

function InitButton(props) {
  const onClick = evt => {
    props.onClick(evt);
  };

  return (
    <button disabled={props.disabled} className="searchBtnLabel" onClick={onClick}>
      <IoIosSearch />
      <span>조회</span>
    </button>
  );
}

InitButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default InitButton;
