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

}