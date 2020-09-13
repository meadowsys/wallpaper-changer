# wallpaper changer
a dinky thing that can run at startup and changes your wallpaper at each full hour. Currently tested and working on Linux Mint 20 (Cinnamon). Other platforms are not tested and not likely to work.

Might make this better later idk.

## System Requirements
node >14.0.0, npm comes with node, Linux Mint Cinnamon (20, but might work with other versions of Mint Cinnamon)
my setup: node 14.10.0, npm 6.14.8, Linux Mint 20 Cinnamon, Cinnamon version 4.6.7

## clone and setup the repository
1. `git clone https://github.com/pcelestia/wallpaper-changer.git`, then `cd wallpaper-changer`
2. `npm ci`

## add images to use
1. inside the repository folder (where the folders `build`, `node_modules`, `src` etc are), create a new folder called exactly `wallpapers`
2. inside create/add 24 png images, called `0.png`, `1.png`, `2.png`...`22.png`, `23.png`. they correspond to the hours. for example, `14.png` will be the wallpaper from 14:00 to right before 15:00, and `0.png` will be the wallpaper from 00:00 to right before 01:00. Currently only `.png` supported

## setup (run on startup)
1. clone and setup the repository
2. get your current working directory with `pwd`. the rest of this setup instructions assumes `/home/autumnblaze/Documents/GitHub/wallpaper-changer`.
3. get your node installation directory with `which node`. the rest of this setup instructions assumes `/usr/bin/node`.
4. open `System Settings`, click `Startup Applications`, click on the `+` button and choose `Custom command`.
5. Name: doesn't matter, for your own purposes
6. Command: `<node path> <working directory>/build`
   example:`/usr/bin/node /home/autumnblaze/Documents/GitHub/wallpaper-changer/build` (append `build` to the end of your current working directory)
7. Comment: whatever you want, also for your own purposes
8. Startup delay: I put 0, but if you want to delay it (if you have a lot of startup programs maybe) you can put it higher.
9. click "add"
10. On next system start, it will start and run in the background.

## run (in a terminal)
1. clone and setup the repository
2. `npm start`. when you want to stop, do `Ctrl + C`.

## swapping images
You can do it at any time. If you do it, the clock turns to the full hour, and there is no image for that hour, the wallpaper will be set to the default Linux Mint wallpaper.

## todo
- detect when images change and update them (maybe)
- support for other image formats
- detect naming scheme automatically
- auto updates (maybe)
