import { Outlet } from "react-router-dom";
import { Main1 } from "./Layout.styles";

const LayoutInicio = () => (
  <Main1>
    <Outlet />
  </Main1>
);

export default LayoutInicio;
