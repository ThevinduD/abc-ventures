# ABC Ventures Restaurant Management System

## Overview

This is an Restaurant management system designed with scalability, performance, and security in mind.
This website empowers users to reserve tables, order foods manage, and contact support with ease. 

Built using modern web technologies like Next.js App Router and JavaScript, the application features dynamic data handling, and a User friendly interface that adapts beautifully. Integrated with a cloud-based MongoDB Atlas database, it ensures reliable data storage and fast queries.

Checkout it live - https://abc-ventures-dun.vercel.app/

## Features 

- **User-Friendly Navigation:** Simple and intuitive navigation structure for ease of use.
- **Complete CRUD Functionality:** Create, update, and delete order records effortlessly.
- **Real-Time Updates:** Orders and reservations sync instantly, giving users live feedback and updates.

## Technologies 

- **Frontend:** Built with React and Tailwind CSS for responsive, modern UI components. Developed using JavaScript.
- **Backend:** Powered by Next.js, enabling full-stack capabilities and scalable backend logic.
- **Database:** Integrated with cloud database using MongoDB Atlas for reliable and high-performance data storage.

---

## Getting Started
### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB Atlas database

## Installation
### Clone the Repository
```bash
git clone https://github.com/ThevinduD/abc-ventures.git
cd abc-ventures
```

### Install dependencies
```bash 
pnpm install
# or
yarn install
```

### Env File
Setup a MongoDB Atlas cluster and put the access resources in a .env.local file
```bash
MONGODB_URI="your_db_uri"
MONGODB_DB="your_dbName"
```

### Run the development server
```bash
pnpm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to see the application.
