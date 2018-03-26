import windowManager from 'electron-window-manager';

windowManager.init({
  devMode: (process.env.NODE_ENV === 'development')
});

const templates = {
  launcher: {
    width: 640,
    height: 48,
    center: true,
    resizable: false,
    frame: false,
    show: false
  }
};

windowManager.templates.set('launcher', templates.launcher);

export * from './main.js';

export {
  templates
};
