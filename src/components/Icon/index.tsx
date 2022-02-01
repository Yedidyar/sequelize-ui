import React from "react";

interface Props {
  label?: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClickHandler: Function;
}

const Icon: React.FC<Props> = ({ label, Icon, onClickHandler }) => {
  return (
    <div onClick={() => onClickHandler()}>
      {label && <span>{label}</span>}
      <div>
        <Icon />
      </div>
    </div>
  );
};

export default Icon;
