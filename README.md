## Local Explorer

**Local Explorer** is a modern React-based web application that helps users discover events happening near them. With a clean and bold UI, users can explore events filtered by keyword, category, and distance — starting with a focus on the Bay Area. The app features a fixed top navbar, a conditional sidebar with a search panel, and dynamic route-based content display.

---

### Features

*  **Real-time event search**: Search events by name or keyword
*  **Filterable layout**: Sidebar with filters (categories, distance, etc.)
*  **Clean routing**: Navigation between “Explore” and “About” pages
*  **Route-aware layout**: Sidebar is only shown on the homepage (`/`)
*  **Modern UI**: Fixed top navbar with bold colors and hover effects
*  **React Router v6**: Seamless single-page navigation

---

###  Tech Stack

| Tech             | Description                                           |
| ---------------- | ----------------------------------------------------- |
| **React**        | Component-based frontend UI                           |
| **React Router** | Client-side routing and navigation                    |
| **CSS**          | Custom styling with modern layout principles          |
| *(Optional)*     | May later integrate with Eventbrite or a location API |

---

### 📁 Project Structure

```
src/
├── App.jsx                 # Main layout & routing logic
├── components/
│   ├── TopNavBar.jsx       # Fixed top navbar
│   └── SideBar.jsx         # Sidebar with search (only on "/")
├── pages/
│   ├── ExplorePage.jsx     # Displays search results
│   └── AboutPage.jsx       # Static "About" content
├── styles/
│   └── TopNavbar.css       # Custom styles for navbar
```

---

###  Example Behavior

* Visiting `/` shows:

  * The fixed top navbar
  * The sidebar with a live search input
  * The main content area showing search results
* Visiting `/about` shows:

  * The fixed navbar only (no sidebar)
  * About page content

---

###  Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/local-explorer.git
cd local-explorer
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start the development server

```bash
npm run dev
```

> Make sure you have Node.js and `npm` (or `yarn`) installed.

---

###  Future (Potential) Improvements

*  Use browser geolocation to show events near current location
*  Add filtering by date, time of day, etc
*  Optional mobile responsiveness
*  Save favorite events (local or user-specific)

---

### ✨ Screenshots *(Optional)*

You can add images like:

```
/assets/screenshot-main.png
/assets/screenshot-sidebar.png
```
