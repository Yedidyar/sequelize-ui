import style from "./App.module.css";
import ModelDashboard from "./features/model-dashboard";
import Navbar from "./features/navbar";

const App = () => {
  return (
    <div className={style.container}>
      <div style={{ flex: 1 }}>
        <Navbar />
      </div>
      <ModelDashboard />
    </div>
  );
};

export default App;
