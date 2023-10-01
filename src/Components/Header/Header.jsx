import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-16 mt-4">
      <div>
        <img src="/public/images/Logo.png" alt="" />
      </div>
      {/* Navbar */}
      <div>
        <nav className="  text-lg font-bold text-center text-[#0B0B0B]">
          <ul className="flex">
            <li className="mr-3">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : " "
              }>Home</NavLink>
            </li>
            <li className="mr-3">
              <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : " "
              }>Donation</NavLink>
            </li>
            <li className="mr-3">
              <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : " "
              }>Statistics</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;