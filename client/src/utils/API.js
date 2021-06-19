/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  //Site 
  getSite: function () {
    return axios.get("/api/site");
  },
  replaceSite: function (id, newData) {
    return axios.put("/api/site/"+ id, newData);
  },

  //Post
  getPosts: function () {
    return axios.get("/api/post");
  },
  getPost: function (id) {
    return axios.get("/api/post/" + id);
  },
  postPost: function (newPost) {
    return axios.post("/api/post", newPost);
  },
  updatePost: function (newPost, id) {
    return axios.put("/api/post/" + id, newPost);
  },
  deletePost: function (id) {
    return axios.delete("/api/post/" + id);
  },

  //Commet
  getComments: function () {
    return axios.get("/api/comment");
  },
  getComment: function (id) {
    return axios.get("/api/comment/" + id);
  },
  postComment: function (newComment) {
    return axios.post("/api/comment", newComment);
  },
  updateComment: function (newComment, id) {
    return axios.put("/api/comment/" + id, newComment);
  },
  deleteComment: function (id) {
    return axios.delete("/api/comment/" + id);
  },

  //User
  getUsers: function () {
    return axios.get("/api/user");
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  postUser: function (newUser) {
    return axios.post("/api/user", newUser);
  },
  updateUser: function (newUser, id) {
    return axios.put("/api/user/" + id, newUser);
  },
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

//   // Gets the User with the given id
//   getUser: function (id) {
//     return axios.get("/api/users/" + id);
//   },

//   updateUser: function (id, userData) {
//     return axios.put("/api/users/" + id, userData);
//   },
  
//   // Deletes the User with the given id, unregister?
//   deleteUser: function (id) {
//     return axios.delete("/api/users/" + id);
//   },
//   // save user after sign up
//   saveUser: function(userData) {
//     return axios.post("/api/auth/signup", userData)
//   },
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
