const electron = window.require('electron');
const remote = electron.ipcRenderer;

function updateLauncherWindow(options) {
  remote.send('LAUNCHER_UPDATE_WINDOW', options);
}

export {
  updateLauncherWindow
};
