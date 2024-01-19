mkdir icons.iconset
sips -z 16 16 logo.png --out icons.iconset/icon_16x16.png 
sips -z 32 32 logo.png --out icons.iconset/icon_16x16@2x.png 
sips -z 32 32 logo.png --out icons.iconset/icon_32x32.png 
sips -z 64 64 logo.png --out icons.iconset/icon_32x32@2x.png 
sips -z 128 128 logo.png --out icons.iconset/icon_128x128.png

sips -z 256 256 logo.png --out favicon_256.ico

iconutil -c icns icons.iconset


electron-packager . myapp --platform=win32 --arch=ia32 --out=./release-builds --overwrite
node build-installer.js
