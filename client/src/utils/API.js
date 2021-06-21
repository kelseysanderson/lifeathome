/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all Site Data
  getSite: function () {
    return axios.get("/api/site");
  },
  // Gets all Posts
  getPosts: function () {
    return axios.get("/api/post/");
  },
  // Gets the Post with the given id
  getPost: function (id) {
    return axios.get("/api/post/" + id);
  },

  updatePost: function (id, postData) {
    return axios.put("/api/post/" + id, postData);
  },
  
  // Deletes the Post with the given id
  deleteUser: function (id) {
    return axios.delete("/api/post/" + id);
  },
  // save user after sign up
  getComments: function (id) {
    return axios.get("/api/comment/" + id);
  },
//   // check for login match in database 
//   authLogin: function(userData) {
//     return axios.post("/api/auth/login", userData)
//   },
//   // Gets all Games
//   getGames: function () {
//     return axios.get("/api/game");
//   },
//   // Gets all Games
//   getActiveGames: function () {
//     return axios.get("/api/game");
//   },
//   // Gets the Game with the given id
//   getGame: function (id) {
//     return axios.get("/api/game/" + id);
//   },
//   updateGame: function (id, gameData) {
//     // console.log("HERE","/api/game/" + id )
//     return axios.put("/api/game/" + id, gameData);
//   },
//   // Deletes the Game with the given id
//   deleteGame: function (id) {
//     return axios.delete("/api/game/" + id);
//   },
//   // Saves a Game to the database
//   saveGame: function (gameData) {
//     return axios.post("/api/game", gameData);
//   },
};
