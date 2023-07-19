import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext, useEffect, useState } from "react";

function NavBar() {
  const activateStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);

  //activate / desactivate user Nav
  const [navUserFunctions, setNavUserFunctions] = useState(null);

  useEffect(() => {
    if (context.isLoggedIn) {
      setNavUserFunctions(
        <ul className="flex items-center gap-3">
          <li className="text-black/60">{context.userData?.email}</li>
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
              onClick={() => {
                context.setIsLoggedIn(false);
                context.setOrder([]);
                context.setUserData(null);
              }}
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
      setNavUserFunctions(
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
  }, [context, context.cartItems.length, context.isLoggedIn, context.userData]);

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
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => context.setSearchByCategory("furniture")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            onClick={() => context.setSearchByCategory("shoes")}
            className={({ isActive }) => (isActive ? activateStyle : undefined)}
          >
            Shoes
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
      {navUserFunctions}
    </nav>
  );
}

export default NavBar;
