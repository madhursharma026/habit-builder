import Link from 'next/link'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Home() {

  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reverse, setReverse] = useState("")
  const [multiple, setMultiple] = useState("")
  const [allHabit, setAllHabit] = useState([])
  const [todaysHabit, setTodaysHabit] = useState([])
  const [allHabitUser, setAllHabitUser] = useState([])
  const [selectedHabitId, setSelectedHabitId] = useState("")
  const [taskRepeatedTimes, setTaskRepeatedTimes] = useState("")
  const [selectedHabitPoints, setSelectedHabitPoints] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertMessageBg, setAlertMessageBg] = useState("")

  let todaysPointsList = []
  let TotalPointsList = []

  {
    useEffect(() => {
      fetch(`http://127.0.0.1:5000/user-data/todaysData`)
        .then(response => response.json())
        .then(response => {
          setTodaysHabit(response);
        })
        .catch(err => console.error(err));
    }, [])
  }

  {
    useEffect(() => {
      fetch(`http://127.0.0.1:5000/user-data/allData`)
        .then(response => response.json())
        .then(response => {
          setAllHabitUser(response);
        })
        .catch(err => console.error(err));
    }, [])
  }

  {
    useEffect(() => {
      fetch(`http://127.0.0.1:5000/add-habit/allHabit`)
        .then(response => response.json())
        .then(response => {
          setAllHabit(response);
        })
        .catch(err => console.error(err));
    }, [])
  }

  async function AddHabitFormSubmit(e) {
    e.preventDefault()
    handleClose()
    let selectedHabitPointsString = String(selectedHabitPoints)
    let Reverse = reverse
    let habitDataId = selected
    let Multiple = multiple
    let TaskRepeatedTimes = ""
    if (reverse === true) {
      selectedHabitPointsString = -selectedHabitPoints
    } else {
      selectedHabitPointsString = selectedHabitPoints
    }
    if (taskRepeatedTimes === "") {
      TaskRepeatedTimes = 1
    } else {
      TaskRepeatedTimes = taskRepeatedTimes
    }
    let data = { Multiple, Reverse, TaskRepeatedTimes, habitDataId }
    let result = await fetch(`http://127.0.0.1:5000/user-data/addUserData/${selectedHabitPointsString}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    let output = ""
    output = await result.json()
    if (output.habitDataId === selected) {
      // alert("success")
      setShowAlert(true)
      setAlertMessage("Today's Category Added Successfully!")
      setAlertMessageBg("success")
      setReverse("")
      setMultiple("")
      setTaskRepeatedTimes("")
      setSelectedHabitId("")
      fetch(`http://127.0.0.1:5000/user-data/todaysData`)
        .then(response => response.json())
        .then(response => {
          setTodaysHabit(response);
        })
        .catch(err => console.error(err));
    } else {
      // alert("danger")
      setShowAlert(true)
      setAlertMessage("Something went wrong!")
      setAlertMessageBg("danger")
    }
  }

  var todayDate = new Date()
  var date = todayDate.getDate() + '-' + (todayDate.getMonth() + 1) + '-' + (todayDate.getFullYear().toString().substr(-2))

  let lookup = []
  
  {
    allHabit.map((allHabit, i) =>
    lookup.push({ id: allHabit.Id, value: allHabit.Points, name: allHabit.HabbitName })
    )
  }
  const [selected, setSelected] = useState(-1);
  const value = selected !== -1 && lookup[selected];

  return (
    <>
      <div className={`container-md ${styles.making_mobile_size_scrn} p-0 ${styles.side_scrollbox_start}`}>
        {
          (showAlert === true) ?
            <div class={`alert alert-dismissible alert-${alertMessageBg}`}>
              <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={() => setShowAlert(false)}></button>
              {alertMessage}
            </div>
            :
            <></>
        }
        <h1 className="text-center"><u>Habit Builder</u></h1>
        <div className="row mt-3 px-2 text-center">
          <h6 className="col-3">Date: {date}</h6>
          <h6 className="col-4">
            {
              allHabitUser.map((allHabitUser, i) =>
                <span style={{ display: "none" }}>{TotalPointsList.push(allHabitUser.TotalPoints)}</span>
              )}
            <>Total Point: {TotalPointsList.reduce((partialSum, a) => partialSum + a, 0)}</>
          </h6>
          <h6 className="col-5">
            {
              todaysHabit.map((todaysHabit, i) =>
                <span style={{ display: "none" }}>{todaysPointsList.push(todaysHabit.TotalPoints)}</span>
              )}
            <>Today's Point: {(todaysPointsList.reduce((partialSum, a) => partialSum + a, 0))}</>
          </h6>
        </div>

        <div className='px-3 mt-3'>
          <h5 className='row'>
            <div className="col-6">Tracker:</div>
            <div className="col-6" style={{ textAlign: "right" }}>
              <Button variant="primary" onClick={handleShow}>
                Add Today's Habit
              </Button>
            </div>
          </h5>

          <ul className="list-group mt-4">
            {
              todaysHabit.map((todaysHabit, i) =>
                <li className="list-group-item">{i + 1}. {todaysHabit.habitData.HabbitName}</li>
              )}
          </ul>
        </div>
        <Footer />
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <form onSubmit={(e) => AddHabitFormSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Today's Habit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <select className='w-100 form-control' required onChange={(e) => setSelectedHabitId(e.target.value)}>
              <option value="">Select Habit</option>
              {
                allHabit.map((allHabit, i) =>
                  <option value={allHabit.Id}>{allHabit.HabbitName}</option>
                )}
            </select> */}


            <select
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
              required
              style={{ width: "100%", fontSize: "18px" }}
            >
              <option value="">Select Habit</option>
              {lookup.map((m, ix) => {
                return (
                  <option key={m.id} value={ix}>
                    {m.name}
                  </option>
                );
              })}
              ;
            </select>

            <label for="Reverse" className="form-label mt-3">Reverse: </label>&emsp;
            <input type="radio" id="ReverseTrue" name="Reverse" value={reverse} required onChange={(e) => setReverse(true)} />
            <label for="ReverseTrue">True</label>&emsp;
            <input type="radio" id="ReverseFalse" name="Reverse" value={reverse} required onChange={(e) => setReverse(false)} />
            <label for="ReverseFalse">False</label>

            <br />

            <label for="Multiple" className="form-label">Multiple: </label>&emsp;
            <input type="radio" id="MultipleTrue" name="Multiple" value={multiple} required onChange={(e) => setMultiple(true)} />
            <label for="MultipleTrue">True</label>&emsp;
            <input type="radio" id="MultipleFalse" name="Multiple" value={multiple} required onChange={(e) => setMultiple(false)} />
            <label for="MultipleFalse">False</label>

            <br />
            {multiple === true ?
              <>
                <label for="TaskRepeatedTimes" className="form-label">Task Repeated Times</label>
                <input type="number" className="form-control" id="TaskRepeatedTimes" required value={taskRepeatedTimes} onChange={(e) => setTaskRepeatedTimes(e.target.value)} />
              </>
              :
              <></>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type='submit' onClick={() => setSelectedHabitPoints(value.value)} >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}