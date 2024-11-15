import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import ViewMicro1 from "./views/ViewMicro1";
import ViewMicro2 from "./views/ViewMicrot2";
import MenuLayout from "./layouts/MenuLayout";

export default function App() {
  const location = useLocation();
  console.log({ location });
  return (
    <div>
      <Routes>
        <Route path="/" element={<OutletLayout />}>
          {/* 主应用页面路由 */}
          <Route index element={<ViewMicro1 />} />
          <Route path="viewMicro2" element={<ViewMicro2 />} />
        </Route>
      </Routes>
    </div>
  );
}

function OutletLayout() {
  if (window.microApp) return <Outlet />;
  return (
    <MenuLayout>
      <Outlet />
    </MenuLayout>
  );
}
