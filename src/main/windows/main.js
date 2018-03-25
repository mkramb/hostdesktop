import windowManager from 'electron-window-manager';

function createMainWindow() {
  let mainWindow = windowManager.get('launcher');
  let contentUrl = 'http://localhost:3000';

  if (mainWindow && mainWindow.object) {
    mainWindow.object.show();
  }
  else {
    if (process.env.NODE_ENV === 'production') {
      contentUrl = `file://${__dirname}/renderer/index.html`;
    }

    mainWindow = windowManager.createNew(
      'launcher', false, contentUrl, 'launcher'
    );

    mainWindow.open(false, true);
    mainWindow.object.setMenu(null);
    mainWindow.content().on('dom-ready', () => {
      mainWindow.object.show();
    });
  }

	return mainWindow;
}

export {
  createMainWindow
};
