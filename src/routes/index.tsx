import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import LayoutPage from "../pages/Layout";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import ErrorHandler from "../components/errors/ErrorHandler";
// import PageNotFound from "../pages/PageNotFound";
import MagazinesPage from "./MagazinesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayoutPage />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="magazines" element={<MagazinesPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </>
  )
);

export default router;
