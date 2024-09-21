import mongoose from "mongoose";

const taskScheema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //Este es el export default de user.model.js
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('Task', taskScheema)