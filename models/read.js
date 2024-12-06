import connection from "../config/database.js";

const readNotes = async () => {
    const sql = "SELECT * FROM notes";
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });

        return result;
    } catch (error) {
        console.error("Terjadi kesalahan dalam readNotes:", error);
    }
};

const readNotesById = async (id) => {
    const sql = "SELECT * FROM notes WHERE id = ?";
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });

        return result;
    } catch (error) {
        console.error("Terjadi kesalahan dalam readNotesById:", error);
    }
};

export { readNotes, readNotesById };