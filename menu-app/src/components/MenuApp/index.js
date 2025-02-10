import "../../App.css";
import Menu from "../Menu";

const MenuApp = ({ data }) => {
    return (
        <Menu menuName={data.menuName} menuItems={data.menuItems} />
    );
};

export default MenuApp;

