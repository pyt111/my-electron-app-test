const packager = require('electron-packager');

const ignore = [
    "/README.md",
    "/node_modules",
    "/node_modules/less",
    "/node_modules/grunt",
    "/node_modules/grunt-cli",
    "/node_modules/grunt-contrib-uglify",
];

const options = {
    ignore,
    dir: './',
    name: 'DemoApp',
    platform: 'win32',
    arch: 'x64',
    // version: '2.0.1',
    out: './out1',
    icon: './icon.ico'
};
packager(options, (err, appPaths) => {
    console.log(err);
    console.log(appPaths);
});
