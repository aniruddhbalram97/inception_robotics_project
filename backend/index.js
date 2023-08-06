const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

//Create an entry
app.post("/add_entry", async (req, res) => {
  try {
    const {
      unique_id,
      robot_name,
      length_m,
      width_m,
      height_m,
      sensor_type,
      image_url,
    } = req.body;
    const newEntry = await pool.query(
      `INSERT INTO CLOUD_ROBOTICS_MASTER (UNIQUE_ID, ROBOT_NAME, LENGTH_M, WIDTH_M, 
        HEIGHT_M, SENSOR_TYPE, IMAGE_URL) VALUES 
        ('${unique_id}', '${robot_name}','${length_m}','${width_m}', '${height_m}','${sensor_type}','${image_url}');`
    );
    res.json(newEntry);
  } catch (err) {
    console.log("Error: ", err.message);
  }
});

app.get("/get_all_entries", async (req, res) => {
  try {
    const getEntries = await pool.query("SELECT * FROM CLOUD_ROBOTICS_MASTER;");
    res.json(getEntries.rows);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
