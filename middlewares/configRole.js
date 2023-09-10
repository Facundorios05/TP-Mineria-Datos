import { ROLES } from "../models/user.model.js";

export const isAdmin = (req, res, next) => {
  if (req.user.role !== ROLES.ADMIN) {
    return res.sendStatus(403);
  }

  next();
};
