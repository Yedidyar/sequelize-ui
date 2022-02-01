import ModelsOverview from "./features/models-overview";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <ModelsOverview />
    </div>
  );
};

export default App;
