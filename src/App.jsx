import { useState } from "react";
import { Route, Routes } from "react-router";
import roomData from "./data/rooms.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import MyBooking from "./pages/MyBooking.jsx";

function App() {
  const [rooms, setRooms] = useState(roomData);
  const bookdRoom = rooms.find((room) => room.isBooked);

  function bookRoom(id) {
    setRooms((currentRooms) => {
      for (const room of currentRooms) {
        if (room.isBooked) {
          return currentRooms;
        }
      }

      return currentRooms.map((room) => {
        if (room.id === id && room.occupied < room.capacity) {
          return { ...room, isBooked: true, occupied: room.occupied + 1 };
        }
        return room;
      });
    });
  }

  function cancelBooking(id) {
    setRooms((currentRooms) => currentRooms.map((room) => {
      if (room.id === id && room.isBooked) {
        return { ...room, isBooked: false, occupied: room.occupied - 1 };
      }
      return room;
    }));
  }

  return (
    <>
      <Navbar bookingCount={bookdRoom ? 1 : 0} />
      <main>
        <Routes>
          <Route path="/" element={<Home rooms={rooms} bookedRoom={bookdRoom} />} />
          <Route path="/rooms" element={<Rooms rooms={rooms} bookedRoom={bookdRoom} bookRoom={bookRoom} cancelBooking={cancelBooking} />} />
          <Route path="/rooms/:id" element={<RoomDetails rooms={rooms} bookedRoom={bookdRoom} bookRoom={bookRoom} cancelBooking={cancelBooking} />} />
          <Route path="/my-booking" element={<MyBooking bookedRoom={bookdRoom} bookRoom={bookRoom} cancelBooking={cancelBooking} />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Page not found</h1>
                <p>The requested page does not exist.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
