import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
    CardNumber: String,
    ExpDate: String,
    Cvv: String,
    Amount: String
});

export interface Card {
    id: string;
    CardNumber: string;
    ExpDate: string;
    Cvv: string;
    Amount: string;
}