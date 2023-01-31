import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
