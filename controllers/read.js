import { readNotes, readNotesById } from "../models/read.js";

const handleRead = async (req, res) => {
    const note = await readNotes();
    res.status(200).json({
        data: note,
    });
};

const handleReadById = async (req, res) => {
    const id = req.params.id;
    const note = await readNotesById(id);
    res.status(200).json({
        data: note,
    });
};

export { handleRead, handleReadById };
