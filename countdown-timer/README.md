## Frontend Assignment - Countdown Timer Documentation

### 1. Introduction
The Frontend Assignment - Countdown Timer is a web application that enables users to set a specific date and time, after which the application displays a countdown timer. Users can interact with the timer by cancelling it or setting a new countdown.

### 2. Features
- User-friendly input for setting the target date and time.
- Real-time countdown display.
- Ability to cancel or create a new countdown at any time.
- Responsive design for seamless experience across various screen sizes.
- Optional sound notification upon countdown completion.
- Optional persistence of countdown even if the browser tab is reopened.

### 3. User Stories
- **Inputting Target Date and Time**: Users can easily input the target date and time for the countdown.
- **Real-time Countdown Display**: Users can see the countdown timer displayed in an intuitive format.
- **Responsive Design**: Users can access the application across different devices with ease.

### 4. Functional Requirements
#### 4.1 Input Form
- Provide a form for users to input the target date and time.
- Validate the input to ensure it is in a valid date and time format.

#### 4.2 Countdown Timer
- Display the countdown timer in a visually appealing format.
- Update the countdown timer in real-time to reflect the remaining time.

#### 4.3 Cancel / Stop Countdown Timer
- Allow users to stop the countdown timer at any point.

#### 4.4 Validations
- Ensure countdown limits: 
  - Maximum days: 99 days
  - Maximum hours: 23 hours
  - Maximum minutes: 59 minutes
  - Maximum seconds: 59 seconds
- Set cut-off date for date picker: 99 days from the current date.
- Ensure countdown timer does not go below 0.

#### 4.5 Responsive Design
- Make the application responsive and compatible with various devices.

### 5. Technologies
- **Frontend**: HTML, CSS, JavaScript, React
- **React App Setup**: 
  - Use `create-react-app` to initialize the project.
  - Start the React app using `npm start`.
- **Installing Node Dependencies**: After cloning the repository, run `npm install` to install necessary dependencies.
- **Important Notes**: 
  - Ensure Node.js is installed on your system.
  - Refer to the documentation of each technology for further guidance.
