const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  const role = user.customClaims && user.customClaims.role ? user.customClaims.role : "patient";

  
  axios.post(
      "https://api.chatengine.io/users/",
      {
        username: user.email,
        secret: user.uid,
        email: user.email,
        first_name: user.displayName,
      },
      {headers: {"Private-Key": "a523ad98-c2bd-4f8e-82bc-e0e18662e741"}},
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "32b58e76-3902-4cfe-a8cb-d6ddc210b648",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
