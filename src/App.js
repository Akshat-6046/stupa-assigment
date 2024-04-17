import { RouterProvider } from "react-router-dom";  
import routerConfig from "./utils/router-config"; // router config for navigation routing

// ROOT APP OF PROJECT
const App = () => {
  return (
      <RouterProvider router={routerConfig} />
   );
};
export default App;
