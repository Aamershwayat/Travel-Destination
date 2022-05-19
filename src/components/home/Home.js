import './Home.css';
import Header from "../header/Header.js";
import Tours from "../tours/Tours.js";
import Footer from "../footer/Footer.js";

export default function Home(props) {
    console.log("props of Home",props);
    console.log("props of props.tourData",props.tourData);
    return (
        <>
            <Header />
            <Tours tourData={props.tourData}/>
            <Footer />
        </>
    )
}