import { Outlet } from "react-router-dom";
import ProductsNav from "../components/ProductsNav";

// 상품 페이지의 기본 레이아웃
export default function ProductsRootLayoutPage() {
  return (
    <>
      <ProductsNav />
      <Outlet />
    </>
  );
}
