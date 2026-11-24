import { Link } from "react-router";

function RoomCard({ room, bookedRoom, bookRoom, cancelBooking, showDetailsLink = true }) {
  const bedLeft = room.capacity - room.occupied;
  const isFull = bedLeft === 0;

  let roomAction;
  if (room.isBooked) {
    roomAction = <button onClick={() => cancelBooking(room.id)}>Cancel</button>;
  } else if (isFull) {
    roomAction = <span>Room Full</span>;
  } else if (bookedRoom) {
    roomAction = <span>Already booked another room</span>;
  } else {
    roomAction = <button onClick={() => bookRoom(room.id)}>Book</button>;
  }

  return (
    <div className="room-card">
      <h3>Room {room.roomNo}</h3>
      <p>Block: {room.block}</p>
      <p>Type: {room.type}</p>
      <p>Rent per month: ₹{room.rentPerMonth}</p>
      <p>
        <span className={isFull ? "badge badge-full" : "badge badge-available"}>
          {isFull ? "Full" : `${bedLeft} beds left`}
        </span>
      </p>
      {showDetailsLink && <Link to={`/rooms/${room.id}`}>View details</Link>}
      <div className="action">{roomAction}</div>
    </div>
  );
}

export default RoomCard;
