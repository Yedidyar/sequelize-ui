import React from "react";
import style from "./index.module.css";

const ListGroup: React.FC = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default ListGroup;
