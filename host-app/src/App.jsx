import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import ViewHost1 from "./views/ViewHost1";
import ViewHost2 from "./views/ViewHost2";
import MenuLayout from "./layouts/MenuLayout";
import { MicroApp } from "./_childApps/MicroApp";

export default function App() {
  const location = useLocation();
  console.log({ location });
  return (
    <div>
      <Routes>
        <Route path="/" element={<OutletLayout />}>
          {/* 子应用路由 */}
          <Route path="micro-app/*" element={<MicroApp />} />
          {/* 主应用页面路由 */}
          <Route index element={<ViewHost1 />} />
          <Route path="viewHost2" element={<ViewHost2 />} />
        </Route>
      </Routes>
    </div>
  );
}

function OutletLayout() {
  return (
    <MenuLayout>
      <Outlet />
    </MenuLayout>
  );
}
