# Backend Wizards — Stage 0 Task: Dynamic Profile API

This is my submission for the **Backend Wizards Stage 0 Task** — a simple RESTful API that returns my profile information along with a **dynamic cat fact** fetched from the Cat Facts API 

---

##  Endpoint

**GET** `/me`

Returns JSON data in this exact format:

```json
{
  "status": "success",
  "user": {
    "email": "abdulsalamakinyoola@gmail.com",
    "name": "Abdulsalam Akinyoola",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

---

## ⚙️Technologies Used

- Node.js  
- Express.js  
- Axios (for external API requests)  
- CORS  
- dotenv  

---

## Live Demo
```
API Endpoint: https://backend-wizards-stage.pxxl.click/me
```
