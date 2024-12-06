import connection from "../config/database.js";

const deleteNotes = async (id) => {
    const sql = "DELETE FROM notes WHERE id = ?";
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
        console.error("Terjadi kesalahan dalam deleteNotes:", error);
    }
};

export { deleteNotes };