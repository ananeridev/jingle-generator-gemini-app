# Jingle Generator

A web application that generates custom jingles using Google's Gemini AI. Users can input their ideas, and the AI will create a jingle with lyrics and musical style description.

## Features

- Simple web interface for jingle generation
- AI-powered jingle creation using Google's Gemini Pro model
- Real-time generation and display of results
- Error handling and user feedback

## Prerequisites

- Node.js installed on your system
- A Google API key for Gemini AI
- npm (Node Package Manager)

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Google API key:
   ```
   GOOGLE_API_KEY=your_api_key_here
   ```

## Running the Application

1. Start the server:
   ```bash
   node index.js
   ```
2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter your jingle idea in the text area
2. Click the "Generate" button
3. Wait for the AI to generate your jingle
4. View the generated jingle with lyrics and musical style description

## Project Structure

- `index.js` - Main server file with Express setup and AI integration
- `web/index.html` - Frontend HTML interface
- `web/script.js` - Frontend JavaScript for handling user interactions
- `.env` - Environment variables (create this file with your API key)

## Technologies Used

- Node.js
- Express.js
- Google Gemini AI
- HTML/CSS/JavaScript # jingle-generator-gemini-app
