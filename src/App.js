import './App.css';
import Home from "./components/home/Home.js";
const travelData = require("./data/db.json");

export default function App() {
  return (
    <>
      <Home tourData={travelData}/>
    </>
  )
}