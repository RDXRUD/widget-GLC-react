# GitHub Contribution Widget (React + Electron)

This project is a desktop widget built with React and Electron, displaying your GitHub Contribution Calendar directly on your Mac desktop.

## 📌 Features

* Displays your GitHub Contribution Calendar in a beautiful UI.
* Color-coded contribution squares (gray for 0, green for 1+).
* Auto-updates every time you open it.
* Lightweight and fast.

## 🚀 How It Works

* The widget fetches your GitHub contribution calendar data using a public GitHub API.
* The React app is wrapped in an Electron window for a clean desktop experience.

## 🛠️ Setup Instructions

1. Clone this project:

   ```bash
   git clone https://github.com/YOUR_USERNAME/GitHub-Contribution-Widget.git
   cd GitHub-Contribution-Widget
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the React app:

   ```bash
   npm run build
   ```

4. Run the Electron app:

   ```bash
   npm run electron
   ```

## ⚡ Customization

* You can modify the UI in `src/App.js`.
* Change the GitHub username in the fetch URL to display your data.
* Adjust the window size or style in `main.cjs` (Electron entry).

## 🔧 Troubleshooting

* If the widget is blank, ensure the GitHub API URL is correct.
* Make sure you have a working internet connection.
* If the widget does not load properly, try clearing the build folder and rebuilding:

  ```bash
  rm -rf build
  npm run build
  ```

## 📄 License

This project is licensed under the MIT License.
