# Class-Schedule-Management-for-Distance-and-Online-Education (Frontend + Backend)

## 🔐 Auth Routes

### Sign In
- Route: /auth/signin  
- Method: POST  
- Description: Authenticates users (Admin or Staff).  
- Controller: authController.signin  

### Sign Out
- Route: /auth/signout  
- Method: GET  
- Description: Signs out a user and clears the session.  
- Controller: authController.signout  


## 📚 Class & Schedule Routes

### Create Class
- Route: /api/createClass  
- Method: POST  
- Description: Creates a new class with department, degree, and section details.  
- Controller: classController.create  

### Get All Classes
- Route: /api/classes  
- Method: GET  
- Description: Fetches the list of all classes.  
- Controller: classController.list  

### Assign Staff to Class Hour
- Route: /api/scheduleClass  
- Method: POST  
- Description: Assigns a staff member to a specific class and hour.  
- Controller: scheduleController.assign  

### Get Timetable by Class
- Route: /api/getSchedule/:classId  
- Method: GET  
- Description: Fetches scheduled staff for a specific class.  
- Controller: scheduleController.getSchedule  


## 🧑‍🏫 Staff Routes

### Create Staff
- Route: /api/createStaff  
- Method: POST  
- Description: Registers a new staff member.  
- Controller: staffController.create  

### Get All Staffs
- Route: /api/getAllStaffs  
- Method: GET  
- Description: Returns the list of all registered staff members.  
- Controller: staffController.list  


## 📄 Paper Routes

### Create Paper
- Route: /api/createPaper  
- Method: POST  
- Description: Adds a new subject or paper for a specific degree.  
- Controller: paperController.create  

### Get All Papers
- Route: /api/getAllPapers  
- Method: GET  
- Description: Returns all available papers along with degree mapping.  
- Controller: paperController.list  


## 📊 Chart & Dashboard Routes

### Fetch Counts (Dashboard Summary)
- Route: /api/dashboardCounts  
- Method: GET  
- Description: Returns total counts of papers, staffs, and degree-wise paper count (for charting).  
- Controller: dashboardController.fetchCounts
