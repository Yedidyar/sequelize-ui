import React from "react";
import style from "./index.module.css";
interface Props {
  label: string;
  Icon: JSX.Element[];
}
/**
 * semantic components for displaying item with an icon
 * @param label the name of the Item
 * @param Icon the icon component
 */
const Item: React.FC<Props> = ({ label, Icon }) => {
  return (
    <div className={style.container}>
      <span>{label}</span>
      <div>{Icon}</div>
    </div>
  );
};

export default Item;
