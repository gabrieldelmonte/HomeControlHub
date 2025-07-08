# Backend-Frontend Integration Documentation

## 🎯 Integration Summary

The login/register functionality has been successfully integrated between the backend and frontend with the following changes:

### ✅ Backend Changes

1. **Database Schema Updates**
   - Added `email` field to User model in `schema.prisma`
   - Updated User entity to include email field
   - Added email validation and uniqueness constraints

2. **AuthController Updates**
   - Modified `register` endpoint to accept `username`, `email`, and `password`
   - Updated `login` endpoint to authenticate with `email` instead of `username`
   - Added validation for both username and email uniqueness
   - Updated response objects to include email field

3. **UserRepository Updates**
   - Added `findByEmail()` method
   - Updated all User constructor calls to include email
   - Modified repository methods to handle email field

4. **API Documentation Updates**
   - Updated Swagger documentation to reflect email-based authentication
   - Updated request/response schemas

5. **Server Configuration**
   - Changed default port from 3000 to 8080 to match frontend proxy

### ✅ Frontend Changes

1. **Authentication Components**
   - Updated Login component to send email instead of username
   - Updated Register component to send both username and email
   - Implemented real API calls instead of mock responses
   - Added proper error handling for API responses

2. **Data Storage**
   - Login stores both token and user information in localStorage
   - User information includes id, username, email, and role

3. **Error Handling**
   - Proper error messages for network failures
   - Server error message display
   - Validation error handling

### 🔧 Configuration

- **Frontend**: Runs on port 3000 with Vite dev server
- **Backend**: Runs on port 8080
- **Proxy**: Frontend proxies `/api/*` requests to `http://localhost:8080`

### 🚀 How to Test

1. **Start Backend**:
   ```bash
   cd src
   npm run build
   npm start  # or node dist/main.js
   ```

2. **Start Frontend** (in separate terminal):
   ```bash
   cd src
   npm run dev:ui
   ```

3. **Access Application**:
   - Frontend: http://localhost:3000
   - Backend API Docs: http://localhost:8080/api-docs

### 📝 API Endpoints

#### Register
- **POST** `/api/v1/auth/register`
- **Body**: `{ username: string, email: string, password: string }`
- **Response**: `{ id: string, username: string, email: string, role: string }`

#### Login
- **POST** `/api/v1/auth/login`
- **Body**: `{ email: string, password: string }`
- **Response**: `{ token: string, user: { id, username, email, role } }`

### 🔑 Test Credentials (when database is seeded)

- **Admin**: `admin@smarthome.com` / `Admin@1234`
- **User**: `user@smarthome.com` / `User@1234`

### ⚠️ Database Setup Required

For full functionality, you need to:

1. Start PostgreSQL database (via Docker or local installation)
2. Run migrations: `npm run migrate:dev init`
3. Seed database: `npm run seed`

### 🐛 Troubleshooting

- **"Can't reach database"**: Ensure PostgreSQL is running on port 5432
- **CORS errors**: Backend includes CORS middleware
- **Proxy issues**: Ensure backend is running on port 8080
- **Build errors**: Run `npm run generate` after schema changes

### 🎉 What Works Now

✅ **Registration**: Create new users with email and password
✅ **Login**: Authenticate users with email and password  
✅ **Token Storage**: JWT tokens stored in localStorage
✅ **Error Handling**: Proper error messages for invalid credentials
✅ **API Integration**: Real HTTP requests to backend
✅ **Navigation**: Successful login redirects to dashboard
✅ **Logout**: Clears stored tokens and redirects to login

### 🔄 Next Steps

The login/register integration is complete! The next phase would be:

1. Device management integration (CRUD operations)
2. Real-time device status updates
3. User profile management
4. Dashboard data integration

All the groundwork for these features is already in place with the authentication system working end-to-end.
