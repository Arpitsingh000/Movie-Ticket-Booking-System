import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState(1);

  // Sample movie data with actual image paths from public folder
  const moviesData = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      poster: '/avengers endgame.jpeg',
      genre: 'Action, Adventure',
      rating: 8.4,
      duration: '3h 1m',
      director: 'Anthony Russo, Joe Russo',
      cast: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
      description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\'s actions and restore balance to the universe.',
      trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
      showDates: ['2023-06-15', '2023-06-16', '2023-06-17', '2023-06-18'],
      showTimes: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'],
    },
    {
      id: 2,
      title: 'Joker',
      poster: '/joker.jpeg',
      genre: 'Crime, Drama',
      rating: 8.5,
      duration: '2h 2m',
      director: 'Todd Phillips',
      cast: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
      description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
      trailer: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
      showDates: ['2023-06-15', '2023-06-16', '2023-06-17', '2023-06-18'],
      showTimes: ['11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM', '11:00 PM'],
    },
    // Add more movies as needed
  ];

  // Find the movie by ID
  useEffect(() => {
    const foundMovie = moviesData.find(m => m.id === parseInt(id));
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      // Redirect to movies page if movie not found
      navigate('/movies');
    }
  }, [id, navigate]);

  // Generate seats layout (6 rows x 8 seats)
  const generateSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatsPerRow = 8;
    const seatMap = [];

    for (let i = 0; i < rows.length; i++) {
      const row = [];
      for (let j = 1; j <= seatsPerRow; j++) {
        // Randomly mark some seats as booked (for demo purposes)
        const isBooked = Math.random() > 0.8;
        row.push({
          id: `${rows[i]}${j}`,
          row: rows[i],
          number: j,
          isBooked,
        });
      }
      seatMap.push(row);
    }

    return seatMap;
  };

  const seats = generateSeats();

  const handleSeatClick = (seat) => {
    if (seat.isBooked) return;

    if (selectedSeats.some(s => s.id === seat.id)) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2 && selectedSeats.length > 0) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleBooking = () => {
    // In a real app, this would send the booking data to a server
    alert(`Booking confirmed!\nMovie: ${movie.title}\nDate: ${selectedDate}\nTime: ${selectedTime}\nSeats: ${selectedSeats.map(s => s.id).join(', ')}\nTotal: $${selectedSeats.length * 12}`);
    navigate('/');
  };

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-header">
        <div className="movie-detail-poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="movie-rating">{movie.rating}</span>
            <span className="movie-duration">{movie.duration}</span>
            <span className="movie-genre">{movie.genre}</span>
          </div>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-crew">
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
          </div>
          <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="trailer-btn">
            Watch Trailer
          </a>
        </div>
      </div>

      <div className="booking-section">
        <div className="booking-steps">
          <div className={`step ${step === 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1. Select Show</div>
          <div className={`step ${step === 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2. Select Seats</div>
          <div className={`step ${step === 3 ? 'active' : ''}`}>3. Confirm & Pay</div>
        </div>

        {step === 1 && (
          <div className="show-selection">
            <div className="date-selection">
              <h3>Select Date</h3>
              <div className="dates">
                {movie.showDates.map((date) => (
                  <div
                    key={date}
                    className={`date-item ${selectedDate === date ? 'selected' : ''}`}
                    onClick={() => handleDateSelect(date)}
                  >
                    {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                ))}
              </div>
            </div>

            <div className="time-selection">
              <h3>Select Time</h3>
              <div className="times">
                {movie.showTimes.map((time) => (
                  <div
                    key={time}
                    className={`time-item ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="seat-selection">
            <h3>Select Seats</h3>
            <div className="screen">SCREEN</div>
            <div className="seating-layout">
              {seats.map((row, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {row.map((seat) => (
                    <div
                      key={seat.id}
                      className={`seat ${seat.isBooked ? 'booked' : ''} ${selectedSeats.some(s => s.id === seat.id) ? 'selected' : ''}`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.id}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="seat-info">
              <div className="seat-type">
                <div className="seat-example available"></div>
                <span>Available</span>
              </div>
              <div className="seat-type">
                <div className="seat-example selected"></div>
                <span>Selected</span>
              </div>
              <div className="seat-type">
                <div className="seat-example booked"></div>
                <span>Booked</span>
              </div>
            </div>

            <div className="selected-seats-info">
              <p>Selected Seats: {selectedSeats.map(s => s.id).join(', ') || 'None'}</p>
              <p>Price per Ticket: $12</p>
              <p>Total: ${selectedSeats.length * 12}</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-details">
              <div className="summary-item">
                <span>Movie:</span>
                <span>{movie.title}</span>
              </div>
              <div className="summary-item">
                <span>Date:</span>
                <span>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="summary-item">
                <span>Time:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="summary-item">
                <span>Seats:</span>
                <span>{selectedSeats.map(s => s.id).join(', ')}</span>
              </div>
              <div className="summary-item">
                <span>Number of Tickets:</span>
                <span>{selectedSeats.length}</span>
              </div>
              <div className="summary-item">
                <span>Price per Ticket:</span>
                <span>$12</span>
              </div>
              <div className="summary-item total">
                <span>Total Amount:</span>
                <span>${selectedSeats.length * 12}</span>
              </div>
            </div>

            <div className="payment-options">
              <h4>Payment Method</h4>
              <div className="payment-methods">
                <div className="payment-method selected">
                  <input type="radio" id="credit-card" name="payment" checked readOnly />
                  <label htmlFor="credit-card">Credit Card</label>
                </div>
                <div className="payment-method">
                  <input type="radio" id="paypal" name="payment" disabled />
                  <label htmlFor="paypal">PayPal</label>
                </div>
                <div className="payment-method">
                  <input type="radio" id="google-pay" name="payment" disabled />
                  <label htmlFor="google-pay">Google Pay</label>
                </div>
              </div>

              <div className="credit-card-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Name on Card</label>
                  <input type="text" placeholder="John Doe" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="booking-actions">
          {step > 1 && (
            <button className="back-btn" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              className="continue-btn"
              onClick={handleContinue}
              disabled={(step === 1 && (!selectedDate || !selectedTime)) || (step === 2 && selectedSeats.length === 0)}
            >
              Continue
            </button>
          ) : (
            <button className="book-btn" onClick={handleBooking}>
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;