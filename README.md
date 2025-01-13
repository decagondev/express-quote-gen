# Express Quote Generator
Express Quote Generator is a web application built with Express.js that provides random quotes to users. It features user authentication using JSON Web Tokens (JWT) and stores data in MongoDB.

## Features
- Generate random quotes for users.
- User authentication with JWT.
- Data storage using MongoDB.

## Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 18 or higher)
MongoDB
Installation
Clone the repository:

```bash
git clone https://github.com/decagondev/express-quote-gen.git
```

Navigate to the project directory:

```bash
cd express-quote-gen
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

Create a .env file in the root directory and add the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret with a secure secret key for JWT.

## Available Scripts

- `npm start` - Run the server in production mode
- `npm run dev` - Run the server in development mode with hot reload
- `npm run seed` - Seed the database with initial quotes

## Usage
Start the application:

```bash
npm start
```

Access the application:

Open your browser and navigate to http://localhost:3000.

## API Endpoints
Register a new user:

```http
POST /api/register
```

Request body:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

Login:

```http
POST /api/login
```

Request body:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

Get a random quote (requires authentication):

```http
GET /api/quote
```

Headers:

```http
Authorization: Bearer your_jwt_token
```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
