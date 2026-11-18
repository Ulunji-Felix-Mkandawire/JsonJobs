import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import BaseLayout from "./layouts/BaseLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        {/* <Route /> */}
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
