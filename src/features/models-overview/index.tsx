import React from "react";
import style from "./index.module.css";
import { useGetModelsNameQuery } from "../../services/sequelize";

import ModelOverview from "./model-overview";

const ModelsOverview: React.FC = () => {
  const { data: models } = useGetModelsNameQuery();

  return (
    <div className={style.container}>
      {models?.map((model) => {
        return <ModelOverview model={model} key={model} />;
      })}
    </div>
  );
};

export default ModelsOverview;
