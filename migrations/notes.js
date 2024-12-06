import connection from "../config/database.js";

const notes = () => {
    const query = `
      CREATE TABLE IF NOT EXISTS notes (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        title TEXT NOT NULL,
        datetime DATETIME NOT NULL,
        note LONGTEXT NOT NULL
      ) ENGINE=InnoDB;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Terjadi kesalahan saat membuat tabel: ", err);
        } else {
            console.log("Tabel 'notes' berhasil dibuat.");
        }
        connection.end();
    });
};

notes();
