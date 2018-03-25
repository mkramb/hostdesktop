import { app, BrowserWindow } from 'electron';

let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 620,
		height: 100
	});

	win.loadURL('http://localhost:3000');
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
