import { Link } from "react-router";

function Home({ rooms, bookedRoom }) {
  let availbleCount = 0;
  for (const room of rooms) {
    if (room.occupied < room.capacity) {
      availbleCount += 1;
    }
  }

  return (
    <div>
      <h1>Hostel Room Booking</h1>
      <p>Total rooms: {rooms.length}</p>
      <p>Rooms with beds left: {availbleCount}</p>
      <p>Your booked room: {bookedRoom ? bookedRoom.roomNo : "No booking yet"}</p>
      <Link to="/rooms">View rooms</Link>
    </div>
  );
}

export default Home;
