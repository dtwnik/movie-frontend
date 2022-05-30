import clsx from 'clsx'
import { useEffect, useState } from "react";
import axios from 'axios'
import Modal from './Modal'



const seats = Array.from({ length: 8 * 6 }, (_, i) => i)

export default function App({ data }) {

  const seansUrl = data.url

  const occupid = data.seat.map((value) => value.split('/')[5])
  const [selectedMovie, setSelectedMovie] = useState()
  const [selectedSeats, setSelectedSeats] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const token = `Token ${localStorage.getItem('token')}`
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsAuth(true)
    }
    else {
      setIsAuth(false)
    }
  }, [])

  const title = data.name
  const seansTime = data.time
  const modalSeat = selectedSeats.map((value) => `${value + 1}`)

  const patchReq = () => {

    if (modalSeat.length !== 0 && isAuth) {

      const newSeat = selectedSeats.map((value) => `https://movie-drf-backend.herokuapp.com/api/Seat/${value + 1}/`)
      const array = newSeat.concat(data.seat)
      const userid = localStorage.getItem("id")
      axios.patch(seansUrl, { "seat": array }, {
        headers: {
          "Authorization": token
        }
      }
      )
      axios.post(`https://movie-drf-backend.herokuapp.com/api/Ticket/`, { "no": newSeat, "buyers": `https://movie-drf-backend.herokuapp.com/api/User/${userid}/`, "movie_name": title, "seans_time": seansTime }, {
        headers: {
          "Authorization": token
        }
      })
      setModalActive(true)

    }
    else if (modalSeat.length === 0 && isAuth) {
      alert("Пожалуйста выберите места")
    }
    else
      alert("Пожалуйста авторизуйтесь")
  }
  return (
    <div className="App">
      <ShowCase />
      <Cinema
        data={data}
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        Вы выбрали <span className="count">{selectedSeats.length}</span>{' '}
        мест, общяя стоимостью{' '}
        <span className="total">
          {selectedSeats.length * 1000} Тг
        </span>
      </p>
      <button onClick={patchReq} className="knopkabroni">Забронировать</button>
      <Modal active={modalActive} setActive={setModalActive} data={modalSeat} title={title} time={seansTime}></Modal>
    </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Пустое


        </small>
      </li>
      <li>
        <span className="seat selected" /> <small>Выбрано</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Куплено</small>
      </li>
    </ul>
  )
}
function Cinema({ movie, selectedSeats, onSelectedSeatsChange, data }) {
  const asd = data.seat.map((value) => Number(value.split('/')[5]))
  function handleSelectedState(seat, id) {
    asd.push(id + 1)
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (<div className="Cinema">
    <div className="screen" />

    <div className="seats">
      {seats.map((seat, id) => {
        const isSelected = selectedSeats.includes(seat)
        const isOccupied = asd.includes(seat + 1)

        return (
          <span
            tabIndex="0"
            key={seat}
            className={clsx(
              'seat',
              isSelected && 'selected',
              isOccupied && 'occupied',
            )}
            onClick={isOccupied ? null : () => handleSelectedState(seat)}
            onKeyPress={
              isOccupied
                ? null
                : e => {
                  if (e.key === 'Enter') {
                    handleSelectedState(seat)
                  }
                }
            }
          />
        )
      })}
    </div>
  </div>
  )
}
