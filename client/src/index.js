import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// React-Bootstrap-Table2
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// React-Bootstrap Table2 Paginator
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// react-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
