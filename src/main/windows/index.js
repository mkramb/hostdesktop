import windowManager from 'electron-window-manager';

windowManager.templates.set('launcher', {
  width: 640,
  height: 210,
  center: true,
  resizable: false,
  frame: true,
  show: false
});

export * from './main.js';
