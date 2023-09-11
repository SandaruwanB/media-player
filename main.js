const Electron = require('electron');
const path = require('path');

const {app, BrowserWindow} = Electron;

const mainWindow = async ()=>{
    const window = new BrowserWindow(
        {
            width : 600,
            height : 600,
        }
    )
    await window.loadFile(path.join(__dirname, 'app/index.html'));
}

app.whenReady().then(()=>{
    mainWindow();
});


app.on('window-all-closed', ()=>{
    app.quit();
})