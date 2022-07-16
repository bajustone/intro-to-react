import ReactDOM from "react-dom/client";

import HelloReact from "./components/app";

const appContainer = document.querySelector("#appContainer");
const reactAppContainer = ReactDOM.createRoot(appContainer);

reactAppContainer.render(<HelloReact/>);
