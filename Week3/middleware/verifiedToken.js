import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {

  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Please login" });
  }

  try {
    const decodedToken = jwt.verify(token, "abcdef");

    req.user = decodedToken;

    next();
  } 
  catch (err) {
    return res.status(401).json({ message: "Session expired. Please login again" });
  }
}