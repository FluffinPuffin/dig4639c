/**
 * Chloe Becker
 * DIG 4639c
 * 1-31-2025
 * React-App-1
 */

import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    setMenuItems([newMenuItem, ...menuItems])
    setNewMenuItem("")
    
  }, [newMenuItem, menuItems])

  // TODO: 4. Display ONLY the menu items that contain the filter element value

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array

  return (
    <div>
      <ul>
        {menuItems
          .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          addMenuItem()
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
