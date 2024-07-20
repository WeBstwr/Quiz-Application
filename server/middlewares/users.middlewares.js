import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const validateUserInformation = async (req, res, next) => {
  const { fullName, emailAddress, phoneNumber, password } = req.body;
  if (!fullName || !emailAddress || !phoneNumber || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields." });
  }

  const userWithPhoneNumber = await client.user.findFirst({
    where: {
      phoneNumber: phoneNumber,
    },
  });

  if (userWithPhoneNumber) {
    return res
      .status(400)
      .json({ success: false, message: "Phone number already exists." });
  }
  next();
};
