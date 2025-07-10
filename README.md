# PrivateConnect Backend (Render Hosting)

This is the backend for PrivateConnect – a Node.js/Express API connected to MongoDB Atlas and deployable via Render.com.

## 🚀 Hosting Steps

1. Push this folder to GitHub
2. Go to https://render.com > New > Web Service
3. Select this repo
4. Set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add Environment Variables from `.env.example`
6. Click **Create Web Service**
7. Done! Your backend URL will be live shortly.
