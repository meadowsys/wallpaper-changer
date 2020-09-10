import moment from "moment";
import { exec } from "child_process";
import { checkenv } from "./rando";
import { resolve } from "path";
// import { determinenames } from "./rando";

let unit: "minute" | "hour";
if (!checkenv("NODE_ENV") || process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development") unit = "minute";
else unit = "hour";

console.log(process.env.NODE_ENV);
mainfn();
// get which hour of the day it is
// get end of hour
// set it to that wallpaper
// repeat yoy


function mainfn(): void {
   const hour: number = moment().get(unit);
   exec(`gsettings set org.cinnamon.desktop.background picture-uri \"file://${resolve(__dirname, "../wallpapers", `${hour}.png`)}\"`);
   console.log(`gsettings set org.cinnamon.desktop.background picture-uri \"file://${resolve(__dirname, "../wallpapers", `${hour}.png`)}\"`);
   console.log(hour);
   setTimeout(mainfn, getnexttime());
}

function getnexttime(): number {
   // add ten is so that it doesnt trigger twice every hour occasionally
   return moment().endOf(unit).toDate().valueOf() - moment().valueOf() + 10;
}
