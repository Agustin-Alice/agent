require("dotenv").config();
const axios = require("axios");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const BASE_URL = "https://api.github.com";

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

module.exports = githubApi;
