import { useNavigate } from "react-router-dom";
import { routes } from "../../configs/routes";

export default function MenuLayout(props) {
  const { children } = props || {};
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "20px" }}>
        <LeftMenu />
      </div>
      {children}
    </div>
  );
}

function LeftMenu() {
  const navigate = useNavigate();
  return (
    <div>
      点击切换
      {routes.map((item, index) => {
        const { name } = item || {};
        return (
          <div
            style={{
              cursor: "pointer",
              border: "solid 0.1px #999",
              marginTop: "3px",
            }}
            key={index}
            onClick={() => handleOnClick(item)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );

  function handleOnClick(props) {
    const { path } = props || {};
    navigate(path);
  }
}
