import {Schema, model} from 'mongoose';

const person = new Schema({
    dni: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    birthday: {
        type: Date,
    },
    civilStatus: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    state: {
        type: Boolean,
    }
},
{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    versionKey: false,
    timestamps: true
});

export default model('Person', person)