/* eslint-disable no-unused-vars */
import  { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Destination.css';

const Destination = () => {
  const [destinations, setDestinations] = useState(['New York', 'London', 'Paris', 'Tokyo', 'Sydney','Karachchi','Colombo','Aucklond','Swisland']);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPassengerCount, setSelectedPassengerCount] = useState(1);

  

  const [dateOptions, setDateOptions] = useState([]);

  useEffect(() => {
    // Function to generate an array of dates for the next 7 days
    const generateDateOptions = () => {
      const today = new Date();
      const next7Days = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() + index);
        return date.toISOString().split('T')[0];
      });
      return next7Days;
    };

    // Set the generated date options
    setDateOptions(generateDateOptions());
  }, []); // Empty dependency array to run the effect only once when the component mounts


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleFormSubmit = () => {
    // Add logic to handle form submission
    console.log('Booking submitted:', {
      destination: selectedDestination,
      date: selectedDate,
      passengers: selectedPassengerCount,
    });
  };

  return (
    <div className="ss">
    <div className="formcontainer">
      <h2 className="form-title">Flight Booking</h2>

      {/* Destination dropdown */}
      <div className="form-field">
        <label htmlFor="destination" className="label">
          Select Destination:
        </label>
        <select
          id="destination"
          className="select"
          onChange={(e) => setSelectedDestination(e.target.value)}
          value={selectedDestination}
        >
          <option value="" disabled>
            Select a destination
          </option>
          {destinations.map((destination, index) => (
            <option key={index} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>

      {/* Date selection */}
      <div className="form-field">
      <label htmlFor="date" className="label">
        Select Date:
      </label>
      <select
        id="date"
        className="select"
        onChange={(e) => setSelectedDate(e.target.value)}
        value={selectedDate}
      >
        <option value="" disabled>
          Select a date
        </option>
        {dateOptions.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
    
      {/* Passenger count selection */}
      <div className="form-field">
        <label htmlFor="passengers" className="label">
          Select Passengers:
        </label>
        <select
          id="passengers"
          className="select"
          onChange={(e) => setSelectedPassengerCount(Number(e.target.value))}
          value={selectedPassengerCount}
        >
          {[1, 2, 3, 4, 5, 6].map((count, index) => (
            <option key={index} value={count}>
              {count} {count === 1 ? 'Passenger' : 'Passengers'}
            </option>
          ))}
        </select>
      </div>

      {/* Submit button */}
      <button className="submit-button" onClick={handleFormSubmit}>
        Book Flight
      </button>
    </div>
    </div>
  );
};

export default Destination;
