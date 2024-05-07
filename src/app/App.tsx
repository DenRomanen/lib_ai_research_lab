import scss from "./app.module.scss";
import { memo } from "react";

import MyButton from "../components/myButton/MyButton";

const App = () => {
  return (
    <div className={scss.root}>
      <MyButton color="red">Hi me</MyButton>
    </div>
  );
};

export default memo(App);
