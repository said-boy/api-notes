import { deleteNotes } from "../models/delete.js";

export const handleDelete = async (req, res) => {
    const id = req.params.id;

    if (!id || id.trim() == "") {
        return res.status(400).json({
            message: "Title tidak boleh kosong.",
        });
    }

    const deletedNote = await deleteNotes(id);

    if (deletedNote.changedRows == 0) {
        return res.status(404).json({
            message: "Tidak ada note yang terhapus.",
        });
    }

    res.status(200).json({
        'message': 'Note berhasil dihapus.',
    });
};
