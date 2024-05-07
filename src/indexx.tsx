import "./index.scss";

import reactDom from "react-dom/client";

import App from "./app/App";

try {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("no root container");
  }
  const root = reactDom.createRoot(container);

  root.render(<App />);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}
