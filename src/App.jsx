import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./pages/router";
// import { Provider } from 'react-redux'
function App() {
  return <RouterProvider router={router} />;
}
export default App;
