import { app } from 'electron';
import { createMainWindow } from './windows';
import './remotes';

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => createMainWindow());
app.on('ready', () => {
  if (process.env.NODE_ENV === 'development') {
    require('devtron').install();
  }
  
  createMainWindow();
});
