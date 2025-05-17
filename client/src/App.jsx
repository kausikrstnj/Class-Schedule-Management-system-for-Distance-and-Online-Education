import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import ScheduleClass from './ScheduleClass.jsx'
import Papers from './Papers.jsx'
import AddPapers from './AddPapers.jsx';
import Staff from './Staff.jsx';
import AddStaff from './AddStaff.jsx';
import Classes from './Classes.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/scheduleClass" element={<ScheduleClass />} />
                <Route path="/papers" element={<Papers />} />
                <Route path="/addPapers" element={<AddPapers />} />
                <Route path="/staffs" element={<Staff />} />
                <Route path="/addStaff" element={<AddStaff />} />
                <Route path="/classes" element={<Classes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App