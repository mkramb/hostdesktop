import windowManager from 'electron-window-manager';

windowManager.templates.set('launcher', {
  width: 800,
  height: 100,
  center: true,
  resizable: false,
  show: false
});

export * from './main.js';
