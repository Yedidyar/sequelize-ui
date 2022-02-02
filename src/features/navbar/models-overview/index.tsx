import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { useGetModelsNameQuery } from "../../../services/sequelize";

import ModelOverview from "../model-overview";

const ModelsOverview: React.FC = () => {
  const { data: models } = useGetModelsNameQuery();

  return (
    <div className={style.container}>
      {models?.map((model) => {
        return (
          <Link to={`model/${model}`} key={model}>
            <ModelOverview model={model} />
          </Link>
        );
      })}
    </div>
  );
};

export default ModelsOverview;
