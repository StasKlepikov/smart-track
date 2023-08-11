import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import { MainPage } from './components/mainPage/MainPage';
import { Dashboard } from './components/mainPage/dashboard/Dashboard';
import { Stuff } from './components/mainPage/stuff/Stuff';
import { Allerts } from './components/mainPage/allerts/Allerts';
import { Sequence } from './components/mainPage/sequence/Sequence';
import { NotFoundPage } from './components/notFoundPage/NotFoundPage';
import { Doctors } from './components/mainPage/stuff/doctors/Doctors';
import { Assistants } from './components/mainPage/stuff/assistants/Assistants';
import { Receptionist } from './components/mainPage/stuff/receptionist/Receptionist';


function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Routes>
					<Route path='/' element={<MainPage />}>
						<Route path='/' element={<Dashboard />}></Route>
						<Route path='/stuff' element={<Stuff />}>
							<Route path='/stuff' element={<Doctors />}></Route>
							<Route path='/stuff/assistants' element={<Assistants />}></Route>
							<Route path='/stuff/receptionist' element={<Receptionist />}></Route>
						</Route>
						<Route path='/allerts' element={<Allerts />}></Route>
						<Route path='/sequence' element={<Sequence />}></Route>
						<Route path='*' element={<NotFoundPage />}></Route>
					</Route>
				</Routes>
			</div>
		</Provider>
  	);
}

export default App;
