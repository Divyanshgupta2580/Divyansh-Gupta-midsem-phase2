import RoomCard from "../components/RoomCard.jsx";

function MyBooking({ bookedRoom, bookRoom, cancelBooking }) {
  if (!bookedRoom) {
    return (
      <div>
        <h1>My Booking</h1>
        <p>You have not booked any room</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Booking</h1>
      <RoomCard room={bookedRoom} bookedRoom={bookedRoom} bookRoom={bookRoom} cancelBooking={cancelBooking} />
    </div>
  );
}

export default MyBooking;
