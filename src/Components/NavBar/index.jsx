import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext, useEffect } from "react";

function NavBar() {
  const activateStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);

  useEffect(()=>{
    if (context.userData){
      console.log('userData modificada')
      console.log(context.userData)
    }
  },[context.isLoggedIn, context.userData])

  //activate user account panel
  function userFunctions(isLoggedIn) {
    if (isLoggedIn) {
      return (
        <ul className="flex items-center gap-3">
          <li className="text-black/60">batial@github.com</li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) =>
                isActive ? activateStyle : undefined
              }
            >
              My account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive ? activateStyle : undefined
              }
            >
              My orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? activateStyle : undefined
              }
            >
              Log Out
            </NavLink>
          </li>
          <li className="flex justify-center items-center">
            <ShoppingBagIcon className="h-6 w-6 text-black-600" />
            <span>{context.cartItems.length}</span>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? activateStyle : undefined
              }
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center  gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("fornitures")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      {userFunctions()}
    </nav>
  );
}

export default NavBar;
