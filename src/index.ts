import moment from "moment";

// add ten so that it doesnt trigger twice every hour occasionally
const getnexttime = () => moment().endOf("hour").toDate().valueOf() - moment().valueOf() + 10;

let i = 0;

function lol() {
   console.log(++i);
   setTimeout(lol, getnexttime());
}

lol();
// get which hour of the day it is
// get end of hour
// set it to that wallpaper
// repeat yoy

// PROBLEM: could fire twice occasionally
