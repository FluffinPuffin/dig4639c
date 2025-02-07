import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    render() {
        const { menuName, menuItems } = this.props;

        if (!Array.isArray(menuItems)) {
            return <div>Error: menuItems is not an array</div>;
        }

        return (
            <div>
                <h1>{menuName} Menu</h1>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
        );
    }
}