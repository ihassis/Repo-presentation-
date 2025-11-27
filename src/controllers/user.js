//fonction controleur qui recoit requete zt znvoie reponse au navigateur 
function getUser(req, res) {
  const user = { id: "123", name: "Imane", age: "25" }; // age en string (bug)
  res.json(user);
}

module.exports = { getUser };
