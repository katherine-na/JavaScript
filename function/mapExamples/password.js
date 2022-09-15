const passwordSocialMedia = [
  { socialMedia: "Instagram", password: "****" },
  { socialMedia: "Facebook", password: "****" },
  { socialMedia: "Gmail", password: "****" },
  { socialMedia: "YouTube", password: "****" },
];

const password = passwordSocialMedia.map((obj) => {
  let passwordObj = {};
  passwordObj[obj.socialMedia] = obj.password;
  return passwordObj;
});

console.log(password);
