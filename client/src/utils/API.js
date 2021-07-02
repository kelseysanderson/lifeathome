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
  updateSite: function (id, newData) {
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
  updatePost: function (id, newPost) {
    return axios.put("/api/post/" + id, newPost);
  },
  deletePost: function (id) {
    return axios.delete("/api/post/" + id);
  },

  //Comment
  getComments: function (query) {
    return axios.get("/api/comment?" + query);
  },
  getComment: function (id) {
    return axios.get("/api/comment/" + id);
  },
  postComment: function (newComment) {
    return axios.post("/api/comment", newComment);
  },
  updateComment: function (id, newComment) {
    return axios.put("/api/comment/" + id, newComment);
  },
  deleteComment: function (id) {
    return axios.delete("/api/comment/" + id);
  },

  //Email
  getEmails: function () {
    return axios.get("/api/email");
  },
  getEmail: function (id) {
    return axios.get("/api/email/" + id);
  },
  postEmail: function (newEmail) {
    return axios.post("/api/email", newEmail);
  },
  updateEmail: function (id, newEmail) {
    return axios.put("/api/email/" + id, newEmail);
  },
  deleteEmail: function (id) {
    return axios.delete("/api/email/" + id);
  },

    //Email
    getContributors: function () {
      return axios.get("/api/contributor");
    },
    getContributor: function (id) {
      return axios.get("/api/contributor/" + id);
    },
    postContributor: function (newContributor) {
      return axios.post("/api/contributor", newContributor);
    },
    updateContributor: function (id, newContributor) {
      return axios.put("/api/contributor/" + id, newContributor);
    },
    deleteContributor: function (id) {
      return axios.delete("/api/contributor/" + id);
    },

}