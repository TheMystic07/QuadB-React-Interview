import React, { useState } from 'react';
import './Form.css';

export default function Modal(props) {
  const [modal, setModal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    setIsBooked(false); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bookedShows = JSON.parse(localStorage.getItem('bookedShows')) || [];
    bookedShows.push(props.show);
    localStorage.setItem('bookedShows', JSON.stringify(bookedShows));
    setIsBooked(true);
  };

  if(modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal border border-white rounded-xl p-3 text-center m-3">
        Book Show
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {!isBooked ? (
              <form onSubmit={handleFormSubmit}>
                <label className="p-1 text-lg" htmlFor="name">Show Name: </label>
                <input type="text" id="name" value={props.show.name} className="m-1 border-solid border-white" disabled /><br />
                <label className="p-1 text-lg" htmlFor="lan">Language: </label>
                <input type="text" id="lan" value={props.show.language} className="m-1 border-solid border-white" disabled /><br />
                <label className="p-1 text-lg" htmlFor="gen">Genres: </label>
                <input type="text" id="gen" value={props.show.genres.join(', ')} className="m-1 border-solid border-white" disabled /><br />
                <label className="p-1 text-lg" htmlFor="type">Type: </label>
                <input type="text" id="type" value={props.show.type} className="m-1 border-solid border-white" disabled /><br />
                <label className="p-1 text-lg" htmlFor="rating">Rating: </label>
                <input type="text" id="rating" value={props.show.rating.average} className="m-1 border-solid border-white" disabled /><br />
                <label className="p-1 text-lg" htmlFor="day">Show Day: </label>
                <input type="text" id="day" value={props.show.schedule.days.join(', ')} className="m-1 border-solid border-white" disabled /><br />
                <label className="p-1 text-lg" htmlFor="phone">Contact: </label>
                <input type="text" id="phone" placeholder="Enter your Phone Number" className="m-1 border-solid border-white" /><br />
                <label className="p-1 text-lg" htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="Enter your Email" className="m-1 border-solid border-white" /><br />
                <button type="submit" className="m-1 p-2 border-white border rounded-xl">Book Show</button>
              </form>
            ) : (
              <div>
                <h2> Show  Booked </h2>
              </div>
            )}
            <button className="close-modal m-2 p-2 border-white border rounded-xl" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
