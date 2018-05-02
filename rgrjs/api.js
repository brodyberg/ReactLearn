import { get } from "jquery";
import ServerActions from './actions/serverActions';

let API = {
  fetchLinks() {
    console.log("1. In API")
    get("/data/links")
      .done(resp => {
        ServerActions.receiveLinks(resp);
      });
  }
}

export default API; 
