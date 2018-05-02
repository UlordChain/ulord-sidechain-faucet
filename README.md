## How to build and run locally

- Install NPM
- Run: `$ npm install`   
    If you get an error installing canvas package, refer to the section bellow 'Installing dependencies'.
    
- node usc-faucet.js
- Open index.html in a browser


## Configuration for deployment to prod/testnet
- Copy example-config.json to config.json and configure with your data.
- usc-Faucet.js configuration variables on top of file
- lib/usc-helper.js configure urlOfFaucetServer
- put some SBTCs on the faucet address


## TODO
- Error msg show in red
- Success msg: include amount and address



## INSTALLING DEPENDENCIES
If `npm install canvas` fails on your system then you need to install these system-libraries and trying again.


#### On ubuntu

    At your shell execute these commands:
        > sudo apt-get install libgif-dev
 
    if that isn't enough for you then:
        > sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++


#### On MAC OSX

    At your shell execute these commands:
        > npm install node-gyp -g
        > brew install giflib cairo libjpeg giflib pixman
        > npm install canvas

    if that isn't enough for you then:
        > xcode-select --install      # I thought this was dumb, but was key to one of my issues 
        > npm install node-gyp -g
        > brew install giflib cairo libjpeg giflib pixman
        > export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
        > OTHER_CFLAGS=-I/usr/local/include npm install canvas


#### On RedHat

    At your shell execute these commands:
        > sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel -y

#### On Windows
    
**1. Installing node-gyp** 

Follow the instructions [here](https://github.com/nodejs/node-gyp#on-windows).

**2. Installing GTK 2**

You will need the [cairo](http://cairographics.org/) library which is bundled in GTK. Download the GTK 2 bundle for [Win32](http://ftp.gnome.org/pub/GNOME/binaries/win32/gtk+/2.24/gtk+-bundle_2.24.10-20120208_win32.zip) or [Win64](http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip). Unzip the contents in `C:\GTK`.

Notes:
- Both GTK and Node.js need either be 64bit or 32bit to compile successfully.
- Download GTK 2, **not GTK 3**, which is missing the required libpng. If you get linker errors you've most likely picked the wrong bundle.
- If you use a different location than `C:\GTK`, add a `GTK_Root` argument to `npm install` or `node-gyp rebuild`. For example: `node-gyp rebuild --GTK_Root=C:\somewhere\GTK`.
	
**3. Installing libjpeg-turbo (optional, for JPEG support; node-canvas 2.0 and later)**

Download the latest [libjpeg-turbo SDK for Visual C++](http://sourceforge.net/projects/libjpeg-turbo/files/) (currently `libjpeg-turbo-1.5.1-vc.exe` or `libjpeg-turbo-1.5.1-vc64.exe`) and install to its default location (`C:\libjpeg-turbo` if 32bit or `C:\libjpeg-turbo64` if 64bit).

Notes:
	
- Both libjpeg-turbo and Node.js need either be 64bit or 32bit to compile successfully.
- If you use a different location, add a `jpeg_root` argument to `npm install` or `node-gyp rebuild`. For example: `node-gyp rebuild --jpeg_root=C:\somewhere\libjpeg-turbo`.
	
**4. Installing node-canvas**

After all dependencies are setup, `npm install canvas` or `yarn add canvas`.