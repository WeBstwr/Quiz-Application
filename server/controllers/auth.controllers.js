import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const client = new PrismaClient();

export const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const user = await client.user.findFirst({
      where: { emailAddress: emailAddress },
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid login credentials" });
    }
    if (user.approvedAccount === false) {
      return res
        .status(400)
        .json({ success: false, message: "Account not yet approved" });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      const payload = {
        id: user.id.toString(),
        emailAddress: user.emailAddress,
        fullName: user.fullName,
        role: user.role,
        phoneNumber: user.phoneNumber.toString(),
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res
        .cookie("access_token", token)
        .json({ success: true, data: payload });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid login credentials" });
    }
  } catch (e) {
    console.error("Error during login:", e);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
