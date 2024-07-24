import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.access_token;
  if (!accessToken) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }
    req.user = decoded;
    next();
  });
};

export default verifyToken;
