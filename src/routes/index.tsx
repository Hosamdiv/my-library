import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import LayoutPage from "../pages/Layout";
import HomePage from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
      </Route>
    </>
  )
);

export default router;
