import { ipcMain } from 'electron';
import windowManager from 'electron-window-manager';
import { templates } from '../windows'; 

ipcMain.on('LAUNCHER_UPDATE_WINDOW', (event, options) => {
  const laucherWindow = windowManager
    .get('launcher').object;

  if (laucherWindow) {
    options.expanded ?
      laucherWindow.setSize(templates.launcher.width, 210, true) :
      laucherWindow.setSize(templates.launcher.width, templates.launcher.height, true);
  }
});
