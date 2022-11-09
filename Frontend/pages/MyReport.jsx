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
    const [Yesterday7Data, setYesterday7Data] = useState([])
    const [Yesterday8Data, setYesterday8Data] = useState([])
    const [Yesterday9Data, setYesterday9Data] = useState([])
    const [Yesterday10Data, setYesterday10Data] = useState([])
    const [Yesterday11Data, setYesterday11Data] = useState([])
    const [Yesterday12Data, setYesterday12Data] = useState([])
    const [Yesterday13Data, setYesterday13Data] = useState([])
    const [Yesterday14Data, setYesterday14Data] = useState([])
    const [Yesterday15Data, setYesterday15Data] = useState([])
    const [Yesterday16Data, setYesterday16Data] = useState([])
    const [Yesterday17Data, setYesterday17Data] = useState([])
    const [Yesterday18Data, setYesterday18Data] = useState([])
    const [Yesterday19Data, setYesterday19Data] = useState([])
    const [Yesterday20Data, setYesterday20Data] = useState([])
    const [Yesterday21Data, setYesterday21Data] = useState([])
    const [Yesterday22Data, setYesterday22Data] = useState([])
    const [Yesterday23Data, setYesterday23Data] = useState([])
    const [Yesterday24Data, setYesterday24Data] = useState([])
    const [Yesterday25Data, setYesterday25Data] = useState([])
    const [Yesterday26Data, setYesterday26Data] = useState([])
    const [Yesterday27Data, setYesterday27Data] = useState([])
    const [Yesterday28Data, setYesterday28Data] = useState([])
    const [Yesterday29Data, setYesterday29Data] = useState([])
    const [Days, setDays] = useState("")
    const [specificDate, setSpecificDate] = useState("")
    const [specificDateData, setSpecificDateData] = useState([])


    let todaysPointsList = []
    let TotalPointsList = []
    let todaysHabitPointsList = []
    let YesterdayPointsList = []
    let Yesterday2PointsList = []
    let Yesterday3PointsList = []
    let Yesterday4PointsList = []
    let Yesterday5PointsList = []
    let Yesterday6PointsList = []
    let Yesterday7PointsList = []
    let Yesterday8PointsList = []
    let Yesterday9PointsList = []
    let Yesterday10PointsList = []
    let Yesterday11PointsList = []
    let Yesterday12PointsList = []
    let Yesterday13PointsList = []
    let Yesterday14PointsList = []
    let Yesterday15PointsList = []
    let Yesterday16PointsList = []
    let Yesterday17PointsList = []
    let Yesterday18PointsList = []
    let Yesterday19PointsList = []
    let Yesterday20PointsList = []
    let Yesterday21PointsList = []
    let Yesterday22PointsList = []
    let Yesterday23PointsList = []
    let Yesterday24PointsList = []
    let Yesterday25PointsList = []
    let Yesterday26PointsList = []
    let Yesterday27PointsList = []
    let Yesterday28PointsList = []
    let Yesterday29PointsList = []
    let specificDateDataList = []

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

    function callSpecificData(gettingSpecificDate) {
        fetch(`http://127.0.0.1:5000/user-data/getvalueofspecificdate/${gettingSpecificDate}`)
            .then(response => response.json())
            .then(response => {
                setloading(false)
                setloading(true)
                setSpecificDateData(response);
                setSpecificDate(gettingSpecificDate)
            })
            .catch(err => console.error(err));
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

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday7Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday7Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday8Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday8Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday9Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday9Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday10Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday10Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday11Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday11Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday12Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday12Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday13Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday13Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday14Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday14Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday15Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday15Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday16Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday16Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday17Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday17Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday18Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday18Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday19Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday19Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday20Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday20Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday21Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday21Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday22Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday22Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday23Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday23Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday24Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday24Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday25Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday25Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday26Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday26Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday27Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday27Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday28Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday28Data(response);
                })
                .catch(err => console.error(err));
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/user-data/findYesterday29Data`)
                .then(response => response.json())
                .then(response => {
                    setloading(false)
                    setloading(true)
                    setYesterday29Data(response);
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
        if (Days === '7') {
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
        } if (Days === '30') {
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
                Yesterday7Data.map((Yesterday7Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday7Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday7Data.map((Yesterday7Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday7Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday8Data.map((Yesterday8Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday8Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday9Data.map((Yesterday9Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday9Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday10Data.map((Yesterday10Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday10Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday11Data.map((Yesterday11Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday11Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday12Data.map((Yesterday12Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday12Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday13Data.map((Yesterday13Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday13Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday14Data.map((Yesterday14Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday14Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday15Data.map((Yesterday15Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday15Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday16Data.map((Yesterday16Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday16Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday17Data.map((Yesterday17Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday17Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday18Data.map((Yesterday18Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday18Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday19Data.map((Yesterday19Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday19Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday20Data.map((Yesterday20Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday20Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday21Data.map((Yesterday21Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday21Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday22Data.map((Yesterday22Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday22Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday23Data.map((Yesterday23Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday23Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday24Data.map((Yesterday24Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday24Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday25Data.map((Yesterday25Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday25Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday26Data.map((Yesterday26Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday26Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday27Data.map((Yesterday27Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday27Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday28Data.map((Yesterday28Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday28Data.TotalPoints)}</span>
                )
            }

            {
                Yesterday29Data.map((Yesterday29Data, i) =>
                    <span style={{ display: "none" }}>{Yesterday6PointsList.push(Yesterday29Data.TotalPoints)}</span>
                )
            }

            const weight = [
                (todaysHabitPointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (YesterdayPointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday2PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday3PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday4PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday5PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday6PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday7PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday8PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday9PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday10PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday11PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday12PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday13PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday14PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday15PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday16PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday17PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday18PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday19PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday20PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday21PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday22PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday23PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday24PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday25PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday26PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday27PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday28PointsList.reduce((partialSum, a) => partialSum + a, 0)),
                (Yesterday29PointsList.reduce((partialSum, a) => partialSum + a, 0))
            ];

            var today = moment();


            const labels = [
                moment(today).add(0, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(1, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(2, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(3, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(4, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(5, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(6, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(7, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(8, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(9, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(10, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(11, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(12, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(13, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(14, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(15, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(16, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(17, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(18, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(19, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(20, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(21, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(22, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(23, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(24, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(25, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(26, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(27, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(28, 'days').format("DD-MM-YYYY"),
                moment(today).subtract(29, 'days').format("DD-MM-YYYY"),
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
        } else {
            const ctx = canvasEl.current.getContext("2d");
            // const ctx = document.getElementById("myChart");

            const gradient = ctx.createLinearGradient(0, 16, 0, 600);
            gradient.addColorStop(0, colors.purple.half);
            gradient.addColorStop(0.65, colors.purple.quarter);
            gradient.addColorStop(1, colors.purple.zero);


            {
                specificDateData.map((specificDateData, i) =>
                    <span style={{ display: "none" }}>{specificDateDataList.push(specificDateData.TotalPoints)}</span>
                )
            }

            const weight = [0, (specificDateDataList.reduce((partialSum, a) => partialSum + a, 0))];

            var today = moment();


            const labels = [
                'Initial Value',
                moment(specificDate).add(0, 'days').format("DD-MM-YYYY"),
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
        }
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
                <div className="row mb-3">
                    <div className="col-6">
                        <h5 className='row'>My Report:</h5>
                    </div>
                    <div className="col-6">
                        <input type="date" onChange={(e) => (callSpecificData(e.target.value), setDays(""))} className='form-control' max={moment().format("YYYY-MM-DD")} defaultValue={moment().format("YYYY-MM-DD")} />
                    </div>
                </div>

                <label for="selectSpecificPeriod">Choose a Specific Period:</label>
                <select id="selectSpecificPeriod" className="mb-3 w-100" onChange={(e) => (setDays(e.target.value))} value={Days}>
                    {Days !== "" ?
                        <>
                            <option value={moment().format("YYYY-MM-DD")}>Today</option>
                            <option value="7">7</option>
                            <option value="30">30</option>
                        </>
                        :
                        <>
                            <option value="">Select Specific Period</option>
                            <option value="7">7</option>
                            <option value="30">30</option>
                        </>
                    }
                </select>

                <canvas id="myChart" ref={canvasEl} height="200" />
                <div className="text-center mt-5">
                    <Link className="btn btn-primary" href="/" role="button">Homepage</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}