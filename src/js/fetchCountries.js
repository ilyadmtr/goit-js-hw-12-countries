import {error} from "@pnotify/core"
import "@pnotify/core/dist/PNotify.css"
import "@pnotify/core/dist/BrightTheme.css"
import {badreq} from "./errors.js"
export default function fetchCountries(searchQuery){
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then((response)=>{
    if(response.status > 200){
      error(badreq);
    }else{
      return response.json()
    }
  });

}