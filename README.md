Project Overview:

✨ Key Features:
Admin Dashboard for managing trainers, classes, and users.
Trainer Management with the ability to create, update, and assign classes.
Class Scheduling system for adding and organizing gym sessions.
User Registration & Login with JWT authentication.
Membership Booking functionality for members to join classes.
Role-based Access Control for Admin and Trainer trainees.

###Technology Stack:
TypeScript,javascript, Express.js,node JS, MongoDB, Mongoose, JWT, Zod , bycript,cors,http-status

API Endpoints:
1️⃣ Auth Module
Path: /api/auth
| Route | Method | Access | Description |
| -------------------- | ------ | ------ | ----------------------- |
| `/api/auth/login` | POST | Public | User Login |
| `/api/auth/register` | POST | Public | Register (Trainee only) |

User Module (Admin Role Only)
Path: /api/trainer

| Route                       | Method | Access | Description      |
| --------------------------- | ------ | ------ | ---------------- |
| `/api/trainer/create-tainer` | POST   | Admin  | Create Trainer   |
| `/api/trainer`       | GET    | Admin  | Get All Trainers |
| `/api/trainer/:trainerId`   | DELETE | Admin  | Delete a Trainer |

3️⃣ Class Schedule Module
Path: /api/classSchedul

| Route                      | Method | Access  | Description                      |
| ------------------------   | ------ | ------- | -------------------------------- |
| `/api/classSchedul/create`  | POST   | Admin   | Create new class schedule       |
| `/api/classSchedul`         | GET    | Public  | Get all classSchedul            |
| `/api/classSchedul/:id`     | PATCH  | Admin   | Update schedule                 |
| `/api/classSchedul/:id`     | DELETE | Admin   | Delete schedule                 |


4️⃣ Booking Module
Path: /api/booking
| Route                     | Method | Access | Description |
| --------------------------| ------ | ------- | --------------------- |
| `/api/booking/booked`     | POST   | TRAINEE | Book a class schedule |
| `/api/booking/cancel/:id` | DELETE | TRAINEE | Cancel booking |
| `/api/booking/:id`        | GET    | TRAINEE | Get my bookings |

Relational Diagram:
User
├── \_id
├── name
├── email
├── password
├── role: 'ADMIN' | 'TRAINER' | 'TRAINEE'

ClassSchedule
├── \_id
├── date
├── startTime
├── endTime
├── trainer (ref: User)

Booking
├── \_id
├── trainee (ref: User)
├── schedule (ref: ClassSchedule)

Admin Credentials:
email :
password :

লোকালি রান করানোর জন্য:

git clone <your-repo-link>
cd project-folder
npm install
npm run dev

###Live Hosting Link:

[Postman Documentation](https://.postman.co/workspace/My-Workspace~04701e74-50e7-4767-8d09-e17c52d75a13/collection/34266685-b58c3f91-51b4-4dba-b3fe-cd218a77d192?action=share&creator=34266685)

Postman-এ করা API Collection : [link](https://api.postman.com/collections/34266685-b58c3f91-51b4-4dba-b3fe-cd218a77d192?access_key=PMAT-01JWDTBR0BM6VPDPQ45V25R4FG)
