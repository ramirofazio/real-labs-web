import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "src/pages/Layout";
import Landing from "src/pages/landing/Landing";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Landing />
        </Layout>
      ),
    },
    // ... add more routes here if needed
  ]);

  return <RouterProvider router={router} />;
}
