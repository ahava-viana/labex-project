import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomepage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path={"/trips/list"} element={<ListTripsPage />} />

        <Route
          exact
          path={"/trips/application"}
          element={<ApplicationFormPage />}
        />

        <Route exact path={"/login"} element={<LoginPage />} />

        <Route exact path={"/admin/trips/list"} element={<AdminHomepage />} />

        <Route
          exact
          path={"/admin/trips/create"}
          element={<CreateTripPage />}
        />

        <Route exact path={"/admin/trips/:id"} element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;