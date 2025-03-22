# AI Chat Analysis

A web application that analyzes chat logs using AI to provide personality insights and psychological characteristics. Powered by OpenRouter with Django backend and React frontend.

## 🌟 Features

- **User Authentication** - Secure login and registration system
- **Chat Analysis** - Upload chat logs for AI-powered analysis
- **Interactive Dashboard** - View personality insights and traits
- **Data Visualization** - User-friendly display of analysis results

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Django
- **AI Engine:** OpenRouter API
- **Database:** PostgreSQL/SQLite

## 📁 Project Structure

/ai-chat-analysis
├── backend/                 # Django backend
│   ├── manage.py            # Django management script
│   ├── ai_analysis/         # Analysis module
│   ├── users/               # User authentication module
│   ├── api/                 # REST API endpoints
│   └── requirements.txt     # Backend dependencies
├── frontend/                # ReactJS frontend
│   ├── src/                 # Source code
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── README.md            # Frontend documentation
└── README.md                # Project documentation

Installation

Prerequisites

Python (3.8+)

Node.js (16+)

PostgreSQL (or SQLite for local development)

Backend Setup

Clone the repository:

git clone https://github.com/your-username/ai-chat-analysis.git
cd ai-chat-analysis/backend

Create a virtual environment and install dependencies:

python -m venv venv
source venv/bin/activate  # On Windows, use `myenv\Scripts\activate`
pip install -r requirements.txt

Apply database migrations:

python manage.py migrate

Start the backend server:

python manage.py runserver

Activate the virtual environment:

myenv\Scripts\activate

Frontend Setup

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the development server:

npm start

API Endpoints

POST /api/upload - Uploads a chat log for analysis.

GET /api/results - Fetches analysis results for a user.

POST /api/login - User authentication.

POST /api/register - User registration.

Usage

Sign up or log in to the web app.

Upload a chat log file (e.g., .txt, .json format).

Wait for AI analysis to complete.

View personality insights and hidden traits on the dashboard.

Roadmap

Improve AI analysis with sentiment tracking and deeper NLP insights.

Add data visualization for better result interpretation.

Implement real-time chat analysis.

Optimize UI/UX for a seamless experience.