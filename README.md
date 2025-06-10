# 🗑️ Skip Hire Web App

I would like to thank the **Rem Waste** team for giving me the opportunity to modify and improve their **Skip Select Page** as part of a job offer evaluation. This task reflects my effort to enhance the user experience and modernize the interface while respecting the brand’s identity.

## 🚀 Tech Stack

- **React** – JavaScript UI library
- **Tailwind CSS** – Utility-first CSS framework
- **Redux Toolkit** – Scalable state management
- **Skeleton Loading** – Improves user perception during data fetching

## 🎨 Design Approach

- Removed unnecessary whitespace from the original layout for a cleaner look.
- Used **black and white** as the primary color scheme, inspired by the company logo.
- Added **green highlights** for validation feedback and call-to-action areas.
- Simple and modern component-driven design.

## 🧩 Project Structure

src/
├── assets/                 # Static images or icons
├── components/             # Reusable UI components (Card, Loader, Header, etc.)
├── redux/                  # Redux slices and store configuration
│   └── features/           # Feature-based slice organization
├── App.jsx                 # Main application component
├── index.js                # Entry point of the app
└── styles/                 # Tailwind and custom styling

Directory Overview

assets/ - Contains static files such as images, icons, and other media resources
components/ - Houses reusable UI components like Card, Loader, Header, and other shared components
redux/ - Contains Redux store configuration and state management

features/ - Organized by feature-specific Redux slices for better maintainability


App.jsx - The main application component that serves as the root of the component tree
index.js - Application entry point where React is rendered to the DOM
styles/ - Contains Tailwind CSS configuration and custom styling files


## ⚙️ Current Features

- Responsive design with Tailwind CSS
- Skip cards with image, size, location, and pricing
- Selection logic with visual feedback
- Skeleton loaders to enhance perceived loading time
- Centralized state management using Redux Toolkit

## 🔮 Future Enhancements

These features will be considered if the project expands to support multiple pages:

- 🔄 **Infinite Scrolling**
- 🧮 **Filtering & Sorting:**
  - By **price** (ascending & descending)
  - By **yard size**
  - By **on-road / off-road** availability
- 🛠️ **TypeScript Integration** for robust typing and validation

