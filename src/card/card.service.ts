import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './card.model';

@Injectable()
export class CardService {
  constructor(@InjectModel('Card') private CardModel: Model<Card>) {}

  async insertCard(CardNumber: string, ExpDate: string, Cvv: string, Amount: string) {
    const newCard = new this.CardModel({ CardNumber, ExpDate, Cvv, Amount });
    const result = await newCard.save();

    return result;
  }
  
}
