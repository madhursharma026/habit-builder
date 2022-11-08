import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddHabit() {

  const [tag, setTag] = useState("")
  const [points, setPoints] = useState("")
  const [habitName, setHabitName] = useState("")
  const [todaysHabit, setTodaysHabit] = useState([])
  const [allHabitUser, setAllHabitUser] = useState([])
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

  async function AddHabitFormSubmit(e) {
    e.preventDefault()
    let HabbitName = habitName
    let Points = points
    let Tag = tag
    let data = { HabbitName, Points, Tag }
    let result = await fetch(`http://127.0.0.1:5000/add-habit/addHabit`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    let output = ""
    output = await result.json()
    if (output.HabbitName === habitName) {
      // alert("success")
      setShowAlert(true)
      setAlertMessage("Category Added Successfully!")
      setAlertMessageBg("success")
      setHabitName("")
      setPoints("")
      setTag("")

      fetch(`http://127.0.0.1:5000/user-data/todaysData`)
        .then(response => response.json())
        .then(response => {
          setTodaysHabit(response);
        })
        .catch(err => console.error(err));

      fetch(`http://127.0.0.1:5000/user-data/allData`)
        .then(response => response.json())
        .then(response => {
          setAllHabitUser(response);
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
        <form className='px-3 mt-3' onSubmit={(e) => AddHabitFormSubmit(e)}>
          <h5>Add Habit: </h5>
          <label for="HabitName" className="form-label">Habit Name</label>
          <input type="text" className="form-control" id="HabitName" required value={habitName} onChange={(e) => setHabitName(e.target.value)} autoComplete="off" />

          <label for="Points" className="form-label mt-3">Points</label>
          <input type="number" className="form-control" id="Points" min='0' required value={points} onChange={(e) => setPoints(e.target.value)} autoComplete="off" />

          <label for="Tags" className="form-label mt-3">Tags</label>
          <input type="text" className="form-control" id="Tags" required value={tag} onChange={(e) => setTag(e.target.value)} autoComplete="off" />

          <button type="sumbit" className="btn btn-primary mt-3 w-100">Submit</button>
        </form>
        <Footer />
      </div>
    </>
  )
}
