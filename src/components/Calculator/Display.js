import { Fragment } from "react";
import classes from "./Display.module.css";

const Display = (props) => {
  const removeTrailingZeros = () => {
    const string = props.resultNumber.toFixed(4).toString();
    return +string;
  };

  return (
    <Fragment>
      {/* //* /* //* Отображаемый дисплей чередуется с тем,
       что он показывает, тест-результат показывает активный номер, когда нет resultNumber */}
      <div className={classes.display}>
        <span className={classes["text--calculation"]}>
          {props.savedNumber} {props.operatorSymbol}{" "}
          {props.resultNumber || props.resultNumber === 0
            ? props.activeNumber
            : null}{" "}
          {props.resultNumber ? "=" : null} &#8205;
        </span>
        <span className={classes["text--result"]}>
          {/* /* это делается для того, чтобы временно отобразить поддельную запятую */}
          {props.activeNumber.charAt(props.activeNumber.length - 1) === "."
            ? "."
            : null}
          {props.resultNumber || props.resultNumber === 0
            ? removeTrailingZeros()
            : props.activeNumber.charAt(props.activeNumber.length - 1) === "." //<-- //<-- временно удаляет "настоящую" запятую
            ? props.activeNumber.substring(0, props.activeNumber.length - 1)
            : props.activeNumber}
        </span>
      </div>
    </Fragment>
  );
};

export default Display;
