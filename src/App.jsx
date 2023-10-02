import Homepage from "./pages/Homepage";
import AboutMitch from "./pages/AboutMitch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/mitch",
          element: <AboutMitch />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}
