import { Outlet } from "react-router";
import Menu from "../components/menu/Menu.tsx";

const MenuLayout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};

export default MenuLayout;