import React from "react";
import { keyGenerator } from "../../utils/key-generator";
import style from "./index.module.css";
interface Props {
  label: string;
  icons: JSX.Element[];
  className?: string;
}
/**
 * semantic components for displaying item with an icon
 * @param label the name of the Item
 * @param Icon the icon component
 */
const Item: React.FC<Props> = ({ label, icons, className }) => {
  return (
    <div className={`${style.container} ${className ? className : ""}`}>
      <span>
        <b>{label}</b>
      </span>
      {icons.map((icon) => (
        <React.Fragment key={keyGenerator()}>{icon}</React.Fragment>
      ))}
    </div>
  );
};

export default Item;
