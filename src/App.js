import React from 'react';
import Navigation from './components/Navigation';
import SearchModule from './components/SearchModule';
import About from './components/About';
import './app.scss';

function App() {
	return (
		<div className="App">
			<Navigation />
			<main className="main">
				<SearchModule />
				<About />
			</main>
		</div>
	);
}

export default App;
