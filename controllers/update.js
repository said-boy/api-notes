import { updateNotes } from "../models/update.js";

export const handleUpdate = async (req, res) => {
    const id = req.params.id;
    const { title, datetime, note } = req.body;

    if (!id || id.trim() == "") {
        return res.status(400).json({
            message: "Title tidak boleh kosong.",
        });
    }

    if (!title || title.trim() == "") {
        return res.status(400).json({
            message: "Title tidak boleh kosong.",
        });
    }

    if (!datetime || datetime.trim() == "") {
        return res.status(400).json({
            message: "Tanggal dan waktu tidak boleh kosong.",
        });
    }

    if (!note || note.trim() == "") {
        return res.status(400).json({
            message: "Note tidak boleh kosong.",
        });
    }

    const updatedNote = await updateNotes(title, datetime, note, id);

    if (updatedNote.changedRows == 0) {
        return res.status(404).json({
            message: "Tidak ada note yang berubah.",
        });
    }

    res.status(201).json({
        'message': 'Note berhasil diupdate.',
    });
};
