import { useLocation } from "react-router-dom";
export function MicroApp() {
  const location = useLocation();
  return (
    <>
      <micro-app
        name="micro-app"
        url="http://localhost:5176/"
        baseroute="/micro-app"
        key={location.pathname}
        iframe
      />
    </>
  );
}
