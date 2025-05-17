import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'

function Staff() {
    const navigate = useNavigate();
    const [staffs, setStaffs] = useState("");
    const [userName, setUserName] = useState("");

    const [searchInput, setSearchInput] = useState('');
    const [filteredStaffs, setFilteredStaffs] = useState([]);


    const handleSearch = () => {
        const lower = searchInput.trim().toLowerCase();
        const filteredStaff = staffs.filter(staff =>
            (staff.name && staff.name.toLowerCase().includes(lower)) ||
            (staff.email && staff.email.toLowerCase().includes(lower)) ||
            (staff.phone && staff.phone.toString().toLowerCase().includes(lower))
        );
        setFilteredStaffs(filteredStaff);
    };

    useEffect(() => {
        const fetchStaffs = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/getAllStaffs", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setUserName(localStorage.getItem('userName'));
                if (data && data.staffs) {
                    setStaffs(data.staffs);
                    setFilteredStaffs(data.staffs);
                    console.log("staffs-- ", data.staffs);
                }
            } catch (error) {
                console.error("Error fetching staffs:", error);
            }
        };
        fetchStaffs();
    }, []);

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2 className="sidebar-title">Class Schedule</h2>
                <br />
                <nav className="sidebar-nav">
                    <button id="bottone5" onClick={() => navigate('/home')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg> Home</button>
                    <button id="bottone5" onClick={() => navigate('/classes')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
                        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                    </svg> Classes</button>
                    <button className="sidebar-link" id="bottone5" onClick={() => navigate('/scheduleClass')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg> Schedule </button>
                    <button className="sidebar-link" id="bottone5" style={{ backgroundColor: '#e2e8f0', fontWeight: 'bold', color: '#1e3a8a' }} onClick={() => navigate('/staffs')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg> Staffs</button>
                    <button className="sidebar-link" id="bottone5"
                        onClick={() => navigate('/papers')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-richtext" viewBox="0 0 16 16">
                            <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                        </svg> Papers</button>
                    <button className="sidebar-link" id="bottone5" onClick={() => navigate('/logout')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                        <path d="M7.5 1v7h1V1z" />
                        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                    </svg> Logout</button>
                </nav>
            </aside>


            <main className="main-content">
                <header className="dashboard-navbar">

                    <div className="search">
                        <input type="text" className="search__input" placeholder="Search..."
                            value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />

                        <button className="search__button" onClick={handleSearch}>
                            <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </button>
                        <button className="search__button" onClick={() => setSearchInput("")}>
                            <svg className="search__icon" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </g>

                            </svg>
                        </button>
                    </div>

                    <div className="navbar-right">
                        <div className="profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            <span className="profile-name">
                                {userName}</span>
                        </div>
                    </div>
                </header>
                <br />
                <div className='header-container'>
                    <h3>Staffs</h3>
                    <button className='add-paper' onClick={() => navigate('/addStaff')}>Add Staff</button>
                </div>
                {staffs.length === 0 ? (
                    <div>
                        <table className='scheduledClass'>
                            <thead>
                                <tr>
                                    <th>Recently Added Staffs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>No staff members have been added yet.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : filteredStaffs.length === 0 ? (
                    <div>
                        <table className='scheduledClass'>
                            <thead>
                                <tr>
                                    <th>Staff Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="2"><span>No staff members match your search.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <table className='scheduledClass'>
                            <thead>
                                <tr>
                                    <th>Staff Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStaffs.map((staff, index) => (
                                    <tr key={index}>
                                        <td>{staff.name}</td>
                                        <td>{staff.email}</td>
                                        <td>{staff.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </main>

        </div >
    )
}

export default Staff