import { app } from 'electron';
import { createMainWindow } from './windows';

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => createMainWindow());
app.on('ready', () => createMainWindow());
