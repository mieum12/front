import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductsRootLayoutPage from "./pages/ProductsRootLayoutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AuthPage from "./pages/AuthPage";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsRootLayoutPage />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
          {
            path: ":productsId",
            id: "products-detail",
            children: [
              {
                index: true,
                element: <ProductDetailPage />,
              },
            ],
          },
        ],
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
