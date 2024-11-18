import { useLocation } from "react-router-dom";
import { childAppsEnums } from "./common";
export function MicroApp() {
  const location = useLocation();
  return (
    <>
      <micro-app
        name="micro-app"
        url={childAppsEnums["micro-app"]}
        baseroute="/micro-app"
        key={location.pathname}
        iframe
      />
    </>
  );
}
