import React from "react";
import { useMatch } from "react-router-dom";

const ModelDashboard = () => {
  const match = useMatch("/model/:model");
  return (
    <div style={{ flex: 4, background: "#666" }}>{match?.params.model}</div>
  );
};

export default ModelDashboard;
