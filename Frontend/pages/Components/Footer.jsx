import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {

    return (
        <>
            <div className='row m-0' style={{ position: "absolute", bottom: 0, overflow: "hidden" }}>
                <Link href='/' style={{ color: "white", textDecoration: "none", background: "red" }} className="col-4 text-center p-2"><b>Homepage</b></Link>
                <Link href='/AddHabit' style={{ color: "white", textDecoration: "none", background: "green" }} className="col-4 text-center p-2"><b>Add Habit</b></Link>
                <Link href='/MyReport' style={{ color: "white", textDecoration: "none", background: "red", marginRight: "-20px" }} className="col-4 text-center p-2"><b>My Report</b></Link>
                <div className="col-4 text-center" style={{ visibility: "hidden", marginBottom: "-24px" }}>Madhur</div>
                <div className="col-4 text-center" style={{ visibility: "hidden", marginBottom: "-24px" }}>Madhur</div>
                <div className="col-4 text-center" style={{ visibility: "hidden", marginBottom: "-24px" }}>Madhur</div>
            </div>
        </>
    )
}
