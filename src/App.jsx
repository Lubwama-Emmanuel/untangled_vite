import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMitch from "./pages/AboutMitch";

export default function App() {
  // const router = createBrowserRouter([
  //   {
  //     element: <AppLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Homepage />,
  //       },
  //       {
  //         path: "/about",
  //         element: <AboutMitch />,
  //       },
  //     ],
  //   },
  // ]);

  // return <RouterProvider router={router} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mitch" element={<AboutMitch />} />
      </Routes>
    </BrowserRouter>
  );
}
