import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const client = new PrismaClient();

export const registerAccount = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, approvedAccount, password } =
      req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await client.user.create({
      data: {
        fullName: fullName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        password: hashedPassword,
        approvedAccount: approvedAccount,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "account registered successfully" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
