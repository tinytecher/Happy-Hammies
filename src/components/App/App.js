import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import styles from "./App.module.css"
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero.js";
import Hamsters from "../AdoptPage/AdoptPage.js";
import HamsterDetails from "../HamsterDetails/HamsterDetails";
import About from "../About/About.js";


function App() {
	return (
		<Router className={styles.App}>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Hero />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route
					path='/hamsters'
					element={<Hamsters />}
				></Route>
				<Route
					path='/hamsters/:id'
					element={<HamsterDetails />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
