import { NavLink } from "react-router";

function Navbar({ bookingCount: bookCount }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>
      <NavLink to="/my-booking">My Booking ({bookCount})</NavLink>
    </nav>
  );
}

export default Navbar;
