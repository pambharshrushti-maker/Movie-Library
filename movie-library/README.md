# 🎬 Movie Library App

A Movie Library web application built using **React.js, Redux, React Router, Axios, and Bootstrap**. Users can browse TV shows, search for shows, view details, and manage their favorite shows.

## 📌 Project Overview

The Movie Library App provides a simple interface for discovering and exploring shows. Users can browse available shows, search for specific titles, view show details, and add shows to their favorites list.

## ✨ Features

* 🏠 **Home Page** — Displays available shows.
* 🔍 **Search Shows** — Search for shows by name.
* 📄 **Show Details** — View information about a selected show.
* ❤️ **Favorites** — Add shows to or remove shows from the favorites list.
* 🔐 **Login Page** — Login interface.
* 👤 **Profile Page** — Protected profile route.
* 📱 **Responsive Design** — Built with Bootstrap.
* 🔄 **Redux State Management** — Manages shows, loading states, errors, and favorites.

## 🛠️ Technologies Used

* React.js
* Redux
* React Redux
* Redux Thunk
* React Router DOM
* Axios
* Bootstrap
* JavaScript
* HTML5
* CSS3
* TVmaze API

## 📂 Project Structure

```text
movie-library/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieSearch.jsx
│   │   ├── MovieDetails.jsx
│   │   └── PrivateRoute.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── Favorites.jsx
│   ├── redux/
│   │   ├── actions/
│   │   │   └── movieActions.js
│   │   ├── reducers/
│   │   │   └── movieReducer.js
│   │   └── store.js
│   ├── services/
│   │   └── movieAPI.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

*Note: This structure is based on the project's current organization. Your actual filenames may differ.*

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your GitHub repository URL.

### 2. Open the Project Folder

```bash
cd movie-library
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Application

```bash
npm start
```

If your project was created using Vite, run:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🌐 API Information

This project uses the **TVmaze API** to retrieve TV show information.

API base URL:

https://api.tvmaze.com

The API provides show titles, images, ratings, descriptions, and other available details.

**Note:** The current API integration displays TV shows rather than a dedicated movie catalog.

## ❤️ Favorites Functionality

Users can select **Add to Favorites** on a show card to add a show to their favorites list. They can visit the Favorites page to view saved shows and remove them when needed.

## 🎯 Learning Objectives

This project demonstrates the use of:

* React components and props
* React Hooks
* React Router for navigation
* Redux for state management
* Redux Thunk for asynchronous actions
* Axios for API requests
* Bootstrap for styling
* Reusable components and API integration

## 🚀 Future Improvements

* Persistent favorites using localStorage
* Improved search and filtering
* Enhanced show details
* User authentication
* Deployment to a hosting platform

## 👩‍💻 Author

**Srushti Pambhar**

Frontend Web Development Student

## 📄 License

This project was created for educational and learning purposes.

````

### 📌 README ફાઇલ GitHub પર કેવી રીતે ઉમેરવી?

1. VS Code માં તમારા Movie Library project નું મુખ્ય folder ખોલો.
2. ત્યાં `README.md` નામની નવી ફાઇલ બનાવો.
3. ઉપર આપેલું લખાણ તેમાં paste કરો અને save કરો.
4. Terminal ખોલીને આ commands ચલાવો:

```bash
git add README.md
git commit -m "Add Movie Library project README"
git push origin main
````

**નોંધ:** જો README ફાઇલ પહેલેથી GitHub પર હોય, તો નવી ફાઇલ બનાવવાને બદલે હાલની ફાઇલમાં ફેરફાર કરો.

તમારા project માં ખરેખર જે features કામ કરે છે એ જ college માં રજૂ કરશો.
