## 📦 Installation

```bash
# clone repo
git clone <your-repo-url>

# go to project
cd <project-name>

# install dependencies
npm install
```

---

## ⚙️ Setup Environment

Create file `.env` in root project:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="secret_key"
RANDOM_USER_API="https://randomuser.me/api"
```

---

## 🗄️ Setup Database

```bash
# generate prisma client
npx prisma generate

# push schema to database
npx prisma db push

# run data seed
npx prisma db seed
```

---

## ▶️ Running Project

```bash
npm run start:dev
```

Server running on:

```
http://localhost:3000
```

---

# 📌 API Endpoints

---

## 1️⃣ Checkout API

### POST `/checkout`

### Request:

```json
{
  "price": 5000000,
  "voucher": 0.5
}
```

### Response:

```json
{
  "price": 5000000,
  "discount": 2500000,
  "finalPrice": 2500000,
  "point": 50000
}
```

---

## 2️⃣ Authentication API

### POST `/auth/login`

### Request:

```json
{
  "username": "joko"
}
```

### Response:

```json
{
  "message": "Login success",
  "user": {
    "id": "uuid",
    "username": "joko"
  }
}
```

📌 Token disimpan dalam **HTTP-only cookie**

---

## 3️⃣ User & Company Relation

### GET `/users`

### Response:

```json
[
  {
    "user_id": "12qwer",
    "company_id": "trew098",
    "nama": "Imron",
    "email": null,
    "telp": "081234567890",
    "company_code": "SPI",
    "company_name": "Samudera"
  }
]
```

---

## 4️⃣ Random User API (External Integration)

### GET `/random-users?results=10&page=1`

### Response:

```json
[
  {
    "name": "Ms, Emma Hakola",
    "location": "9208,Nordenskiöldinkatu, Lieksa,Åland , Finland",
    "email": "emma.hakola@example.com",
    "age": 21,
    "phone": "08-761-811",
    "cell": "048-075-31-27",
    "picture": ["large_url", "medium_url", "thumbnail_url"]
  }
]
```
