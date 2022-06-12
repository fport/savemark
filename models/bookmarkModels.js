import mongoose from "mongoose"
import validator from "validator"

const bookmarkSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please enter valid url"],
    }
})

export default mongoose.models.Bookmark || mongoose.model("Bookmark", bookmarkSchema)