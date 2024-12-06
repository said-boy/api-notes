import { createNotes } from "../models/create.js";

export const handleCreate = async (req, res) => {
    const { title, datetime, note } = req.body;

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

    const newNote = await createNotes(title, datetime, note);

    res.status(201).json({
        message: "Catatan berhasil dibuat.",
    });
};
