import connection from "../config/database.js";

const createNotes = async (title, datetime, note) => {
    const sql = "INSERT INTO notes (title, datetime, note) VALUES (?,?,?)";
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [title, datetime, note], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });

        return result;
    } catch (error) {
        console.error("Terjadi kesalahan dalam createNotes:", error);
    }
};

export { createNotes };