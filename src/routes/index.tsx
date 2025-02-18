import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import LayoutPage from "../pages/Layout";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

export default router;
