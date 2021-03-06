import { post } from "jquery";
import ServerActions from './actions/serverActions';

let API = {
  fetchLinks() {
    console.log("1. In API")
    post("/graphql", {
      query: `{
        links {
          _id, 
          title, 
          url
        }
      }`
    })
      .done(resp => {
        ServerActions.receiveLinks(resp.data.links);
      });
  }
}

export default API; 
