const {app, BrowserWindow} = require("electron")
const urlLib = require("url")

let url = process.env.URL
let sessionPartition = process.env.SESSION_PARTITION
let sessionPersistRaw = process.env.SESSION_PERSIST ?? ""

if (!url) {
  console.error("No URL!")
  app.quit()
}

function createWindow () {
  if (!sessionPartition) {
    const x = new urlLib.URL(url)
    sessionPartition = x.host + x.pathname
  }

  const sessionPersist = sessionPersistRaw.toLowerCase() !== "false"

  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      partition: (sessionPersist ? "persist:" : "") + sessionPartition,
    }
  })

  mainWindow.maximize()
  mainWindow.loadURL(url)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})