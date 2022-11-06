import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import 'bootstrap/dist/css/bootstrap.min.css';
const moment = require("moment")
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from "./Components/Footer";


export default function MyReport() {


    const [loading, setloading] = useState("")
    const [allHabit, setAllHabit] = useState([])
    const [todaysHabit, setTodaysHabit] = useState([])
    const [YesterdayData, setYesterdayData] = useState([])
    const [Yesterday2Data, setYesterday2Data] = useState([])
    const [Yesterday3Data, setYesterday3Data] = useState([])
    const [Yesterday4Data, setYesterday4Data] = useState([])
    const [Yesterday5Data, setYesterday5Data] = useState([])
    const [Yesterday6Data, setYesterday6Data] = useState([])

    let todaysPointsList = []
    let TotalPointsList = []
    let todaysHabitPointsList = []
    let YesterdayPointsList = []
    let Yesterday2PointsList = []
    let Yesterday3PointsList = []
    let Yesterday4PointsList = []
    let Yesterday5PointsList = []
    let Yesterday6PointsList = []

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/allData`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setAllHabit(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://127.0.0.1:5000/user-data/todaysData`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setTodaysHabit(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterdayData`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterdayData(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday2Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday2Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday3Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday3Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday4Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday4Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday5Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday5Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday6Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday6Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }


    const canvasEl = useRef(null);

    const colors = {
        purple: {
            default: "rgba(149, 76, 233, 1)",
            half: "rgba(149, 76, 233, 0.5)",
            quarter: "rgba(149, 76, 233, 0.25)",
            zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
            default: "rgba(80, 102, 120, 1)",
            quarter: "rgba(80, 102, 120, 0.25)"
        }
    };

    useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");
        // const ctx = document.getElementById("myChart");

        const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.65, colors.purple.quarter);
        gradient.addColorStop(1, colors.purple.zero);

        {
            todaysHabit.map((todaysHabit, i) =>
                <span style={{ display: "none" }}>{todaysHabitPointsList.push(todaysHabit.TotalPoints)}</span>
            )
        }

        {
            YesterdayData.map((YesterdayData, i) =>
                <span style={{ display: "none" }}>{YesterdayPointsList.push(YesterdayData.TotalPoints)}</span>
            )
        }

        {
            Yesterday2Data.map((Yesterday2Data, i) =>
                <span style={{ display: "none" }}>{Yesterday2PointsList.push(Yesterday2Data.TotalPoints)}</span>
            )
        }

        {
            Yesterday3Data.map((Yesterday3Data, i) =>
                <span style={{ display: "none" }}>{Yesterday3PointsList.push(Yesterday3Data.TotalPoints)}</span>
            )
        }

        {
            Yesterday4Data.map((Yesterday4Data, i) =>
                <span style={{ display: "none" }}>{Yesterday4PointsList.push(Yesterday4Data.TotalPoints)}</span>
            )
        }

        {
            Yesterday5Data.map((Yesterday5Data, i) =>
                <span style={{ display: "none" }}>{Yesterday5PointsList.push(Yesterday5Data.TotalPoints)}</span>
            )
        }

        {
            Yesterday6Data.map((Yesterday6Data, i) =>
                <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday6Data.TotalPoints)}</span>
            )
        }

        const weight = [(todaysHabitPointsList.reduce((partialSum, a) => partialSum + a, 0)), (YesterdayPointsList.reduce((partialSum, a) => partialSum + a, 0)), (Yesterday2PointsList.reduce((partialSum, a) => partialSum + a, 0)), (Yesterday3PointsList.reduce((partialSum, a) => partialSum + a, 0)), (Yesterday4PointsList.reduce((partialSum, a) => partialSum + a, 0)), (Yesterday5PointsList.reduce((partialSum, a) => partialSum + a, 0)), (Yesterday6PointsList.reduce((partialSum, a) => partialSum + a, 0))];

        var today = moment();


        const labels = [
            moment(today).add(0, 'days').format("DD-MM-YYYY"),
            moment(today).subtract(1, 'days').format("DD-MM-YYYY"),
            moment(today).subtract(2, 'days').format("DD-MM-YYYY"),
            moment(today).subtract(3, 'days').format("DD-MM-YYYY"),
            moment(today).subtract(4, 'days').format("DD-MM-YYYY"),
            moment(today).subtract(5, 'days').format("DD-MM-YYYY"),
            moment(today).subtract(6, 'days').format("DD-MM-YYYY")
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    backgroundColor: gradient,
                    label: "My Report",
                    data: weight,
                    fill: true,
                    borderWidth: 2,
                    borderColor: colors.purple.default,
                    lineTension: 0.2,
                    pointBackgroundColor: colors.purple.default,
                    pointRadius: 3
                }
            ]
        };
        const config = {
            type: "line",
            data: data
        };
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    });

    var todayDate = new Date()
    var date = todayDate.getDate() + '-' + (todayDate.getMonth() + 1) + '-' + (todayDate.getFullYear().toString().substr(-2))

    return (
        <div className={`container-md ${styles.making_mobile_size_scrn} p-0 ${styles.side_scrollbox_start}`}>
            <h1 className="text-center"><u>Habit Builder</u></h1>
            <div className="row mt-3 px-2 text-center">
                <h6 className="col-3">Date: {date}</h6>
                <h6 className="col-4">
                    {
                        allHabit.map((allHabit, i) =>
                            <span style={{ display: "none" }}>{TotalPointsList.push(allHabit.TotalPoints)}</span>
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
                <h5 className='row'>My Report:</h5>
                <canvas id="myChart" ref={canvasEl} height="100" />
                <div className="text-center mt-5">
                    <Link className="btn btn-primary" href="/" role="button">Homepage</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
