"use strict";
/**function getUser(req, res) {
  const user = { id: "123", name: "Imane", age: "25" }; // age en string (bug)
  res.json(user);
}

module.exports = { getUser };*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
function getUser(req, res) {
    const user = { id: "123", name: "Imane", age: 25 }; // corrected
    res.json(user);
}
//# sourceMappingURL=user.js.map