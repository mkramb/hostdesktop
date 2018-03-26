const electron = window.require('electron');
const remote = electron.ipcRenderer;

function updateLauncher(options) {
  remote.send('LAUNCHER_UPDATE', options);
}

export {
  updateLauncher
};
