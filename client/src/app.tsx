import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AllMovies from './components/AllMovies'
import AddNew from './components/AddNew'
import { HomeLayout } from './components/HomeLayout';

const App = () => {

    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<AllMovies />} />
                <Route path="/addnew" element={<AddNew />} />
            </Route>
        </Routes>)
};

export default App;