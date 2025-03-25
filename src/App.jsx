import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import StudentLogin from "./pages/StudentLogin";
import RegStudent from "./pages/RegStudent";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* button */}
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/student" element={<RegStudent />} />
      </>
    )
  );
  return <RouterProvider router={myRoute} />;
};

export default App;
