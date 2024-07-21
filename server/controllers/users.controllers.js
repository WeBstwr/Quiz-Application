import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const client = new PrismaClient();
const convertBigIntToString = (obj) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => {
    if (typeof newObj[key] === "bigint") {
      newObj[key] = newObj[key].toString();
    } else if (typeof newObj[key] === "object" && newObj[key] !== null) {
      newObj[key] = convertBigIntToString(newObj[key]);
    }
  });
  return newObj;
};

export const registerAccount = async (req, res) => {
  try {
    const {
      fullName,
      emailAddress,
      phoneNumber,
      approvedAccount,
      role,
      password,
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await client.user.create({
      data: {
        fullName: fullName,
        emailAddress: emailAddress,
        phoneNumber: BigInt(phoneNumber),
        password: hashedPassword,
        approvedAccount: approvedAccount,
        role: role,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "Account registered successfully" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const users = await client.user.findMany({
      where: { approvedAccount: true },
      select: {
        fullName: true,
        emailAddress: true,
        phoneNumber: true,
      },
    });
    const usersWithBigIntAsString = users.map((user) =>
      convertBigIntToString(user),
    );
    res.status(200).json({ success: true, data: usersWithBigIntAsString });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
