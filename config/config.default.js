"use strict";

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + "_1501817502166_7037";

  // add your config here

  return config;
};

module.exports.mysql = {
  client: {
    host: "localhost",
    port: "3306",
    user: "",
    passsword: "",
    database: "mysql"
  }
};
