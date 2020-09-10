import { readdirSync } from "fs";
export function checkenv(varname: string): boolean {
   return !!process.env[varname];
}

// export function getwallpapers(): wallpapernames {
//
// }

// export const fileextensions: RegExp = /\.|(.png|.jpg)?/;

export const sep = "|s";

export const wallpapernames: Array<string> = [
   `${sep}.png`,
   `${sep}00.png`
];

// export function getwallpapername(num: number): string {
//
// }
