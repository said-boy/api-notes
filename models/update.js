import connection from "../config/database.js";

const updateNotes = async (title, datetime, note, id) => {
    const sql = "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?";
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [title, datetime, note, id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });

        return result;
    } catch (error) {
        console.error("Terjadi kesalahan dalam updateNotes:", error);
    }
};

export { updateNotes };