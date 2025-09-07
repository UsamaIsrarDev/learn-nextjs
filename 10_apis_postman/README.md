https://web.postman.co/workspace/Books-API~12d2e00d-b6f6-43ab-a2c9-a0aa51d519a5/request/37858321-151ffa18-da79-467c-8bfa-8f31f20a1b6b

https://rapidapi.com/hub

/ => path parameter

?limit=10 => query parameter

https://pro.coincap.io/api-docs

# 📚 API Concepts

This README provides a detailed overview of APIs, their components, tools, and practical examples to help you understand and work with APIs effectively.

---

## API Components

### 🔹 Request Components

- **Endpoint (URL)** → Represents a resource. Example: `/books`
- **Method** → Defines the action:
  - `GET` → Fetch data
  - `POST` → Create data
  - `PATCH/PUT` → Update data
  - `DELETE` → Remove data
- **Parameters**
  - **Query Parameters** → `?type=fiction&limit=5`
  - **Path Parameters** → `/books/1` (book with ID 1)
- **Request Body**
  - Data sent with POST/PUT/PATCH in JSON format.

### 🔹 Response Components

- **Status Code**
  - `2xx` → Success
  - `4xx` → Client Error
  - `5xx` → Server Error
- **Response Data** → JSON/object data returned.
- **Headers** → Metadata (content-type, authorization, etc.).

---

## Tools for Working with APIs

- **Postman** → Test APIs, send requests, view responses.
- **RapidAPI** → API marketplace (like App Store for APIs).
  - Examples: Payment APIs (PayPal, Stripe), Weather APIs, Crypto APIs.

👉 These tools save time, help developers integrate existing services, and avoid reinventing the wheel.

---

## Example: Books API

### 1. Endpoints

- `/status` → Check if API is running.
- `/books` → Get all books.
- `/books?type=fiction` → Filter by type.
- `/books?limit=5` → Limit results.
- `/books/1` → Get book by ID.

### 2. Authentication (Orders Endpoint)

- Required for creating new orders.
- Uses an **access token**.
- Token must be saved and applied to all requests in the collection.

### 3. CRUD Operations in Books API

- **GET** → Retrieve status, books, or a specific book.
- **POST** → Place a new order (`bookId`, `customerName`).
- **PATCH** → Update order (e.g., change customer name).
- **DELETE** → Delete an order.
- **Note**: No PUT method available, only PATCH for updates.

### 4. Postman Workflow

- Save requests inside **collections**.
- Duplicate requests when switching methods (GET → POST).
- Organize endpoints for easy testing.

---

## Learning Strategy

1. **Step 1** → Practice APIs in Postman before coding.
2. **Step 2** → Understand documentation → endpoints, params, auth, etc.
3. **Step 3** → Explore public APIs like CoinCap API for crypto data.
4. **Step 4** → Move to code once comfortable with API testing.

---

## Classroom Practice & Next Steps

- Students must practice API calls using Postman.
- Next class will shift towards coding APIs.
- Students facing issues should ask peers or use online resources.
- Deployed student applications will be reviewed in upcoming sessions.

---

## Summary

- **APIs = Bridges connecting applications.**
- They work through requests (endpoint, method, params, body) and responses (status code, data, headers).
- Tools like Postman and RapidAPI help in testing and exploring APIs.
- **Example: Books API** demonstrates GET, POST, PATCH, DELETE with authentication.
- Practicing API calls first makes actual coding much easier.

**Pro Tip**: Always read API documentation carefully. Once you master testing in Postman, integrating APIs into your applications will become second nature!
