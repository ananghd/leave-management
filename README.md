# Employee Leave Management System

This project is a web application designed to manage employee leave data, including admin management, employee management, and leave management functionalities.

## Features

### Admin Management
- Admins can log in to manage data.
- Admins can create, read, update, and delete (CRUD) admin profiles.
- Admins can update their own profile information.
- Admins can log out.

### Employee Management
- CRUD operations for employee data, including:
  - First Name
  - Last Name
  - Email
  - Phone Number
  - Address
  - Gender

### Employee Leave Management
- CRUD operations for employee leave records, including:
  - Leave Reason
  - Leave Start Date
  - Leave End Date
- Each employee can take a maximum of 12 leave days per year.
- Each employee can only take 1 leave day in the same month.

### Employee List with Leave Data
- Display a list of employees along with their leave records.

## Technical Stack

- **Frontend**: Next.js with Bootstrap
- **Backend**: NestJS
- **Database**: MySQL/MariaDB
- **Containerization**: Docker

## Getting Started

### Prerequisites
- Node.js
- Docker
- MySQL

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/ananghd/employee-leave-management.git
   cd employee-leave-management
   ```

2. Set up the backend:
   - Navigate to the `backend` directory and install dependencies:
     ```
     cd backend
     npm install
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory and install dependencies:
     ```
     cd frontend
     npm install
     ```

4. Run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

## Usage

- Access the application at `http://localhost:3000`.
- Admins can log in at `http://localhost:3000/admin/login`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.