import mongoose, { Schema, Model, Document } from 'mongoose';
import { IUser } from 'webdav-server';

export interface FileDetails extends Document {
    filename: String,
    share: String,
    author: String,
    dateUploaded: Date,
    dateUpdated: Date,
}

const FileSchema: Readonly<Schema> = Object.freeze(new Schema({
    filename: {
        type: String
    },
    share: {
        type: String
    },
    author: {
        type: String,
    },
    dateUploaded: {
        type: Date,
    },
    dateUpdated: {
        type: Date,
    }
}));

const File = mongoose.model<FileDetails>('File', FileSchema);
export default File;
