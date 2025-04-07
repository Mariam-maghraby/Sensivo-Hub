
# Sensivo Hub

## Overview
Sensivo Hub is a web application built with React.js on the frontend and Node.js/Express.js on the backend. It provides functionality for managing IOT devices, visualizing data such as device status, power consumption, and location. The app includes login functionality with role-based access for different types of users: operators and admins.

## Features
- **Login Page**: User authentication with validation for username and password.
- **Home Page**: Displays a table of all devices, a map showing the device locations, and a pie chart visualizing power consumption across devices.
- **Device Details Page**: Displays detailed data for a specific device, including a power consumption chart and other device metrics like temperature, humidity, and power consumption over time.
- **Role-Based Access**: Admin users have access to detailed device information (via `/devices/:id`), while operator users do not.
  
## Technology Stack
- **Frontend**: 
  - React.js
  - React Router
  - React Query
  - Mantine UI
  - Axios
  - Chart.js
  - Leaflet (for map display)
- **Backend**:
  - Node.js with Express.js
  - TypeScript
  - JSON Web Tokens (JWT) for authentication
  - Supertest for testing
- **Database**: Data is stored in memory as global variables for simplicity.

## Backend Endpoints
- **POST /login**: Authenticates the user and issues a JWT token for further requests.
- **GET /devices**: Fetches a list of devices. Only accessible by authenticated users.
- **GET /devices/:id**: Fetches details of a specific device. Only accessible by admin users.

## Installation

### Prerequisites
- Node.js (v18 or above)
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/sensivo-hub.git
   cd sensivo-hub
   ```

2. **Frontend Setup**:
   - Navigate to the `client` directory and install dependencies:
     ```
     cd client
     npm install
     ```
   - Start the development server:
     ```
     npm run dev
     ```

3. **Backend Setup**:
   - Navigate to the `server` directory and install dependencies:
     ```
     cd server
     npm install
     ```
   - Start the backend server in development mode:
     ```
     npm run dev
     ```

4. **Accessing the Application**:
   - Once both frontend and backend servers are running, open the application in your browser at `http://localhost:3000`.

## API Documentation

### Authentication

- **POST /login**  
  Authenticates a user based on the provided username and password.

  **Request Body**:
  ```json
  {
    "username": "user",
    "password": "password"
  }
  ```

  **Response**:
  ```json
  {
    "token": "jwt-token"
  }
  ```

### Devices

- **GET /devices**  
  Fetches a list of all devices. Requires authentication.

  **Response**:
  ```json
  [
    {
      "id": "1",
      "name": "sensor-1",
      "status": "on",
      "temperature": "23°C",
      "humidity": "90%",
      "totalPowerConsumption": "23 kW"
    },
    {
      "id": "2",
      "name": "sensor-2",
      "status": "off",
      "temperature": "21°C",
      "humidity": "92%",
      "totalPowerConsumption": "22 kW"
    }
  ]
  ```

- **GET /devices/:id**  
  Fetches details of a specific device. Requires admin access.

  **Response**:
  ```json
  {
    "id": "1",
    "name": "sensor-1",
    "status": "on",
    "temperature": "23°C",
    "humidity": "90%",
    "totalPowerConsumption": "23 kW",
    "monthlyPowerConsumption": {
      "jan": "24 kW",
      "feb": "21 kW",
      "march": "22 kW",
      "april": "28 kW",
      "may": "29 kW",
      "june": "31 kW",
      "july": "34 kW",
      "august": "23 kW",
      "september": "44 kW",
      "october": "41 kW",
      "november": "24 kW",
      "december": "21 kW"
    }
  }
  ```

## Frontend

The frontend provides three main pages:

1. **Login Page**: A simple login form with username and password fields.
2. **Home Page**: Displays a table with all devices, a map with device locations, and a pie chart for power consumption.
3. **Device Details Page**: Provides detailed device data, including a power consumption chart and other metrics.

### Dependencies:
- Mantine UI components for styling and form validation.
- React Query for data fetching and caching.
- Chart.js for data visualization (pie charts and other visualizations).
- Leaflet for map rendering.

## Testing

### Backend Testing

1. **Unit Tests**: Tests are written using Jest and Supertest to verify the API routes and logic.
2. To run tests:
   ```
   npm run test
   ```

### Frontend Testing

1. **Unit Tests**: Basic unit tests for components are written using Jest and React Testing Library.
2. To run tests:
   ```
   npm run test
   ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions
Contributions are welcome! Please fork the repository and create a pull request for any changes you would like to contribute.
