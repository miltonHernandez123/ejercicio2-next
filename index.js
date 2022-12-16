import fs  from 'fs'
import axios from 'axios'

const INITIAL_ID_XKCD_COMIC = 2500;
const MAX_ID_XKCD_COMICS = 2501;

for (id = INITIAL_ID_XKCD_COMIC; id < MAX_ID_XKCD_COMICS; id++){
const url = `https://xkcd.com/${id}/info.0.json`;
const {data} =  await axios.get(url)
console.log(data)
}
