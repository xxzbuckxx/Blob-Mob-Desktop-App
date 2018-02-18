const electron = require('electron');
const url = require('url');
const path = require('path');
var monce;

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//Listen for app to be ready
app.on('ready', function(){
    //Create new window
    mainWindow = new BrowserWindow({width: 900, height: 800, title: 'Blob Mob', icon: 'favicon.ico'});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});

//Create menu template
const mainMenuTemplate = [
    {
        label: 'file',
        submenu: [
            {
                label: 'Quit',
                click(){
                    app.quit();
                }
            }
        ]
    }
];