// const {BrowserWindow} = require("electron")
const electron = require("electron")
const BrowserWindow = electron.remote.BrowserWindow;

const createOAuthWindow = () => {
    return new BrowserWindow({
        width: 500,
        height: 800,
        center: true,
        resizable: false,
        title: "Github OAuth",
        webPreferences: {
            contextIsolation: true,
            devTools: true,
        }
    })
}

module.exports = {
    createOAuthWindow
}
