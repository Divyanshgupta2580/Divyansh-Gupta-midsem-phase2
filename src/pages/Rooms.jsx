import { useState } from "react";
import RoomCard from "../components/RoomCard.jsx";

function Rooms({ rooms, bookedRoom, bookRoom, cancelBooking }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const searchText = search.toLowerCase();
  const filterdRooms = [];
  for (const room of rooms) {
    const matchesSearch = room.roomNo.toLowerCase().includes(searchText);
    const matchesType = type === "All" || room.type === type;
    if (matchesSearch && matchesType) {
      filterdRooms.push(room);
    }
  }

  return (
    <div>
      <h1>Rooms</h1>
      <label htmlFor="search">Search by room number: </label>
      <input id="search" value={search} onChange={(event) => setSearch(event.target.value)} />
      <label htmlFor="type"> Type: </label>
      <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
        <option value="All">All</option>
        <option value="AC">AC</option>
        <option value="Non-AC">Non-AC</option>
      </select>
      {filterdRooms.length === 0 && <p>No rooms found.</p>}
      {filterdRooms.map((room) => (
        <RoomCard key={room.id} room={room} bookedRoom={bookedRoom} bookRoom={bookRoom} cancelBooking={cancelBooking} />
      ))}
    </div>
  );
}

export default Rooms;
