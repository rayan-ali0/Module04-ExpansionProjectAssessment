import bcryptjs from "bcryptjs";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  try {
    const exist = await User.findOne({ where: { email } });
    if (exist) {
      res.status(404).json({ message: "Email already Exists" });
    }
    const user = await User.create({
    name,
      email,
      password: hashedPass,
      role:"user"
      
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("Error Creating a user");
  }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "User doesn't exist!" });
      }
      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(500).json({ message: "Wrong Password" });
      }
  
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          role:user.role
        },
        process.env.JWT_SECRET
      );
  
      res.cookie("access_token", token, {
          secure: true,
          httpOnly: true,
          sameSite: "None",
        })
        .status(200)
        .json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error Sign In" });
    }
  };
