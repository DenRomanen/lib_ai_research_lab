import scss from "./app.module.scss";
import { memo } from "react";

const App = () => {
  return <div className={scss.root}></div>;
};

export default memo(App);
