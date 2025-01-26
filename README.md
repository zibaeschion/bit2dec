![bit2dec.png](client/src/assets/bit2dec.png)

## Description

Small Project that should help people understand, how to convert binary numbers to decimal numbers.

## Features

- Tutorial, that explains how to convert binary numbers into decimal numbers
- 4 Bit and 8 Bit Training Mode also Featuring Hints
- 4 Bit and 8 Bit Time Mode
- 4 Bit and 8 Bit Addition Mode
- Log In
- High Scores
- Leaderboard for 4 Bit and 8 Bit Time Mode

## Screenshots

Homepage
![Image](https://github.com/user-attachments/assets/cb069bde-7d49-4bb1-b615-98db68bcfcf4)

Tutorial
![Image](https://github.com/user-attachments/assets/5a37227d-2bc2-4f72-8465-ac352f3d51b2)
![Image](https://github.com/user-attachments/assets/0b7f17a0-77e3-49b5-a2b2-50ebeb45c0eb)
![Image](https://github.com/user-attachments/assets/8f94408f-48d9-40a3-b2db-b52084622abc)

Play page Example
![Image](https://github.com/user-attachments/assets/23531184-8248-4158-ab35-891c21d0febe)

Time Mode
![Image](https://github.com/user-attachments/assets/5eea0c9c-be6a-4d1e-bc19-b950edef498b)

Leaderboard
![Image](https://github.com/user-attachments/assets/02f76019-7948-446e-963f-eb48bea42008)

## Technical Architecture

![Image](https://github.com/user-attachments/assets/64f41878-445b-442b-8bea-9a5913dd7c16)

- Frontend: React, MaterielUI, Vite, Axios
- Backend: Node.js, Express.js, Cors, Bycript
- Database: MongoDB, Mongoose
- Others: Prettier

## 🚀 Get Started

#### Step 1: Pre-requisites

Download and install the following software:

- Nodist: [GitHub](https://github.com/nodists/nodist)
    - Alternatively you can just install Node.js
- Code editor
    - Webstorm Ultimate [Windows](https://www.jetbrains.com/de-de/webstorm/download/#section=windows)
    - Every other code editor for JavaScript works too, you might need to do things different in Step 3

#### Step 2: Clone the repository

- Open a new Project in your Code Editor:

  ![Image](https://github.com/user-attachments/assets/2ee0a637-2cfe-4637-a65e-9a134acbbf0b)

- Copy the Repository link:

  ![Image](https://github.com/user-attachments/assets/1caea11a-d49e-4115-9ac3-dc4a4d8bc169)


#### Step 3: Run the Project locally

- Go to /client/src/components/functions/APIFunctions.jsx
- In every function change the "https://[irgendein website link]" to "https://localhost:5173"
- Open the Terminal
- In the Server and Client directory run:
```bash
  npm install
  ```


  ![Image](https://github.com/user-attachments/assets/41d0928b-b2f0-4829-96da-fbab58cb6fac)

  ![Image](https://github.com/user-attachments/assets/061a24dc-2fa2-49d3-940a-80139502b77d)

- To start the Project in Webstorm follow the directions of the following pictures:

  ![Image](https://github.com/user-attachments/assets/9bcb6dbd-bcea-4d0e-8e88-6a12a2915d7e)

  ![Image](https://github.com/user-attachments/assets/0432cc7b-d380-44db-87a6-0bdc5f47e1e2)

  ![Image](https://github.com/user-attachments/assets/e74bf758-2552-4096-bf9b-dfc7d615f525)

  ![Image](https://github.com/user-attachments/assets/b28b7f65-fdc2-4637-b566-b9c1f7fef04c)

  ![Image](https://github.com/user-attachments/assets/7b992804-6109-460c-8b85-6cc9b19f88cc)

  ![Image](https://github.com/user-attachments/assets/9612b317-c8f6-4bfb-9f5d-664f4f76323e)

  ![Image](https://github.com/user-attachments/assets/ea8442f4-05bc-4e1b-bcb8-e7f5d911b8f4)

  ![Image](https://github.com/user-attachments/assets/31616a02-2c1a-4386-8e4e-69641ecc1430)

  ![Image](https://github.com/user-attachments/assets/053b162e-8ec6-4fde-a374-4a50952f0d78)

  ![Image](https://github.com/user-attachments/assets/f94d5e01-17a6-4af4-9cf1-953b0e1ad3c8)

  ![Image](https://github.com/user-attachments/assets/b479bd5f-e2da-4264-a723-0904814b9092)

  ![Image](https://github.com/user-attachments/assets/fc4d9b5a-b2be-4d5a-bdfd-57abfe490b7a)

- In a browser open "https://localhost:5173"

#### Step 4: Deploy the Project

- Go back to your code editor
- Go to /client/src/components/functions/APIFunctions.jsx
- In every function change from "https://localhost:5173" to the link "https://{projectName}.onrender.com"
- Open the Terminal and in the client run 
```bash
  npm run build
  ```
- Push the Project, including the complete dist directory in the client directory
- Open [Render](https://render.com)
- Create a Render account or log into yours
- Open the menu from the Render dashboard
- create a new web service
- Connect your GitHub account
- Allow Render to get your repository
- Choose the repo
- Click connect
- Provide a name
- Choose Node in the language field
- Select the main branch in the branch field
- Choose the closest server in the region field
- In the root directory type server
- In the build command field type: 
  ```bash
  server/ $ npm install
  ```
- In the start command field type:
  ```bash
  server/ $ npm run start
  ```
- Add env variable:
    - Name: "MONGO_URI"
    - Content: "mongodb+srv://groupteewebtech:Sk5hE2WH67pawCaA@bit2dec.8lxju.mongodb.net/?retryWrites=true&w=majority&appName=bit2dec"
- Click the deployed link to open the app in the browser, but wait until the deployment is successful
- Deployment is successful, click the deployed link to open the app in your browser

## Group Members

- Jason Knossalla
- Tillman Hegner
- Thomas Eteridis
- Nico Ziegenbalg
- Sebastian Köppen

This is a copy of our group project, that was made in our university gitlab and copied into GitHub to deploy it in Render
