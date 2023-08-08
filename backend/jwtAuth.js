const router = require("express").Router();
const pool = require("./db");
const bcrypt = require("bcrypt");
const authorize = require("./authorize");
const validInfo = require("./validInfo");
const jwtGenerator = require("./jwtGenerator");
//registering

router.post("/register", async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body;
    const user = await pool.query(
      `SELECT * FROM USERS WHERE USER_EMAIL = '${user_email}';`
    );
    if (user.rows.length != 0) {
      return res.status(401).send("User Already Registered");
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(user_password, salt);
    const newUser =
      await pool.query(`INSERT INTO USERS (user_name, user_email, user_password) VALUES
    ('${user_name}','${user_email}','${bcryptPassword}') RETURNING *;`);
    const token = jwtGenerator(newUser.rows[0]["user_id"]);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", validInfo, async (req, res) => {
  const { user_email, user_password } = req.body;
  console.log(user_email);
  try {
    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1;",
      [user_email]
    );
    console.log("user: ", user.rows[0]);
    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );
    console.log("validPassword", validPassword);
    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    console.log("jwtToken", jwtToken);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
