import { Card, Dialog, Elevation } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const mouseMoveRef = useRef<HTMLDivElement>(null);

  const checkHover = useCallback(
    (e: MouseEvent) => {
      if (mouseMoveRef.current) {
        const el = e.target;
        const mouseOver =
          el instanceof Node && mouseMoveRef.current.contains(el);
        if (!isTooltipOpen && mouseOver) setIsTooltipOpen(true);

        if (isTooltipOpen && !mouseOver) setIsTooltipOpen(false);
      }
    },
    [isTooltipOpen]
  );

  useEffect(() => {
    window.addEventListener("mousemove", checkHover, true);

    return () => {
      window.removeEventListener("mousemove", checkHover, true);
    };
  }, [checkHover]);

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
                placement="right"
                isOpen={isTooltipOpen}
                openOnTargetFocus={false}
              >
                <div key={keyGenerator()} ref={mouseMoveRef}>
                  <Schema
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
                  />
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
