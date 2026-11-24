import { Link, useParams } from "react-router";
import RoomCard from "../components/RoomCard.jsx";

function RoomDetails({ rooms, bookedRoom, bookRoom, cancelBooking }) {
  const { id } = useParams();
  const roomId = Number(id);
  const room = rooms.find((item) => item.id === roomId);

  if (!room) {
    return (
      <section className="page-section not-found" aria-labelledby="room-not-found-heading">
        <h1 id="room-not-found-heading">Room not found</h1>
        <p>The room you requested is not available.</p>
        <Link className="text-link" to="/rooms">Back to rooms</Link>
      </section>
    );
  }

  return (
    <section className="page-section room-details" aria-labelledby="room-details-heading">
      <Link className="text-link back-link" to="/rooms">← Back to rooms</Link>
      <h1 id="room-details-heading">Room {room.roomNo}</h1>

      <div className="room-details-grid">
        <RoomCard
          room={room}
          bookedRoom={bookedRoom}
          bookRoom={bookRoom}
          cancelBooking={cancelBooking}
          showDetailsLink={false}
        />

        <div className="room-information">
          <h2>Room information</h2>
          <dl>
            <div>
              <dt>Block</dt>
              <dd>{room.block}</dd>
            </div>
            <div>
              <dt>Floor</dt>
              <dd>{room.floor}</dd>
            </div>
            <div>
              <dt>Capacity</dt>
              <dd>{room.capacity} {room.capacity === 1 ? "student" : "students"}</dd>
            </div>
            <div>
              <dt>Occupied</dt>
              <dd>{room.occupied}</dd>
            </div>
          </dl>

          <h3>Facilities</h3>
          {room.facilities.length > 0 ? (
            <ul className="facility-list">
              {room.facilities.map((facility) => (
                <li key={facility}>{facility}</li>
              ))}
            </ul>
          ) : (
            <p>No facilities listed.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RoomDetails;
