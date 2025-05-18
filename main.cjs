const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    x: 100,  // Set position to be always on screen
    y: 100, 
    frame: true,   // Make it visible with a window frame (for debugging)
    alwaysOnTop: true,
    transparent: false,  // Remove transparency (for debugging)
    backgroundColor: "#ffffff", // Set a visible background color
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  const indexPath = path.join(__dirname, "build", "index.html");
  console.log("Loading React build from:", indexPath);

  win.loadFile(indexPath)
    .then(() => {
      console.log("React app loaded successfully.");
      win.webContents.openDevTools(); // Auto-open DevTools to see errors
    })
    .catch((err) => {
      console.error("Failed to load React app:", err);
    });

  // Ensure window is always visible
  win.on("ready-to-show", () => {
    win.show();
    win.focus();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});