const {app, BrowserWindow} = require('electron')

let url = process.env.URL

if (!url) {
  console.error("No URL!")
  app.quit()
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
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