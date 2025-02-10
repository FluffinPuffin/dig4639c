import React from "react"

const MenuItem = ({ item }) => {
    return (
        <div class="menu-item" id={`menu-item-${item.itemId}`}>
            <span>${item.itemPrice}</span>
            <h1>{item.itemName}</h1>
            <p>{item.itemDescription}</p>
            <button>Add to Cart</button>
        </div>

    );
}

export default MenuItem;
