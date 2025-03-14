# Contact Manager App Backend
A **Contact Manager App Backend** is a server-side application that provides APIs to store, retrieve, update, and delete contact information. It serves as the backbone for a contact management system, handling business logic, authentication, and data persistence.

Technologies Used
Programming Language : Node.js
Framework :  `Express.js` (Node.js)
Database : MongoDB
Authentication: `JWT` (JSON Web Token)

## Features
### 1. User Authentication & Authorization
- Register and login users
- Password hashing using `bcrypt`
   
### 2. Contact Management
- Add, update, delete, and retrieve contacts
- Store name, email, phone number
- Search and filter contacts

### 3. Data Security
- Secure API endpoints with **JWT authentication**
- Encrypted storage for sensitive data

## API Endpoints
### Authentication
```http
POST /api/users/register
```
- Register a new user

```http
POST /api/users/login
```
- Authenticate user and issue token

### Contact Management
```http
GET /api/contacts
```
- Retrieve all contacts

```http
POST /api/contacts
```
- Create a new contact

```http
PUT /api/contacts/{id}
```
- Update a contact

```http
DELETE /api/contacts/{id}
```
- Delete a contact

## Conclusion
This backend serves as a robust foundation for a **Contact Manager App**, ensuring secure data storage, efficient API design, and seamless scalability. Future enhancements could include **AI-powered contact suggestions** and **integration with messaging services** like WhatsApp or Telegram.

