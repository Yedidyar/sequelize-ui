import { Card, Dialog, Elevation, Icon } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import { useState } from "react";
import { Schema } from "../../../assets/icons";
import Item from "../../../components/Item";
import { useGetModelSchemaByNameQuery } from "../../../services/sequelize";
import { keyGenerator } from "../../../utils/key-generator";
import style from "./index.module.css";

interface Props {
  model: string;
}

const ModelOverview: React.FC<Props> = ({ model }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { data } = useGetModelSchemaByNameQuery(model);

  return (
    <Card interactive={false} elevation={Elevation.TWO} className={style.card}>
      <div className={style.container}>
        <div key={model}>
          <Item
            className={style.itemComponent}
            label={model}
            icons={[
              <Tooltip2
                content={"show model schema"}
                position="right"
                isOpen={isTooltipOpen}
              >
                <div
                  key={keyGenerator()}
                  onClick={() => {
                    setIsOpen(true);
                    setIsTooltipOpen(false);
                  }}
                  onMouseOver={() => {
                    setIsTooltipOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsTooltipOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Schema />
                </div>
              </Tooltip2>,
            ]}
          ></Item>
          <Dialog
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
              setIsTooltipOpen(false);
            }}
          >
            <pre className={style.collapseContent}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default ModelOverview;
