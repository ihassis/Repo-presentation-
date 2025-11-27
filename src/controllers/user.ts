/**function getUser(req, res) {
  const user = { id: "123", name: "Imane", age: "25" }; // age en string (bug)
  res.json(user);
}

module.exports = { getUser };*/


import { Request, Response } from 'express';

interface User {
  id: string;
  name: string;
  age: number;
}

export function getUser(req: Request, res: Response) {
  const user: User = { id: "123", name: "Imane", age: 25 }; // corrected
  res.json(user);
}
