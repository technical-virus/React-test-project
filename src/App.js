import { Route } from "react-router-dom";
import Master from "./components/Layouts/Master";
import AuthRoute from "./components/Authentication/AuthRoute";

function App() {
const data = "amit"
  return (
    <>
    {/* <AuthRoute /> */}
    <Master />
    </>
  );
}

export default App;