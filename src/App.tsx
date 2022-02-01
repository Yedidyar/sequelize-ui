import { View } from "./assets/icons";
import Icon from "./components/Icon";
import Item from "./components/Item";
import { useGetModelsNameQuery } from "./services/sequelize";

const App = () => {
  const { data: models } = useGetModelsNameQuery();

  return (
    <div className="App">
      {models?.map((model) => (
        <div>
          <Item
            label={model}
            Icon={[<Icon Icon={View} onClickHandler={() => {}} />]}
          ></Item>
        </div>
      ))}
    </div>
  );
};

export default App;
