const db = require("../config/db");

class Stadium {
  constructor(stadium_name, address, phone, Stadium_style_id, Staff_id) {
    this.stadium_name = stadium_name;
    this.address = address;
    this.phone = phone;
    this.Stadium_style_id = Stadium_style_id;
    this.Staff_id = Staff_id;
  }

  async save() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const createdAtDate = `${yyyy}-${mm}-${dd}`;

    const sql = `
      INSERT INTO stadium.stadium (stadium_name, address, phone, Stadium_style_id, Staff_id)
      VALUES (?, ?, ?, ?, ?);
    `;

    return db.execute(sql, [this.stadium_name, this.address, this.phone, this.Stadium_style_id, this.Staff_id]);
  }

   static findAll() {
    const sql = "SELECT * FROM stadium.stadium";
    return db.execute(sql);
  }

  static findById(id) {
    const sql = "SELECT * FROM stadium.stadium WHERE id = ?;";
    return db.execute(sql, [id]);
  }
}

module.exports = Stadium;
