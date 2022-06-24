import {
    Controller,
    Post,
    Body,
    Get,
  } from '@nestjs/common';
  
  import { CardService } from './card.service';
  
  @Controller('card')
  export class CardController {
    constructor(private readonly cardService: CardService) {}
  
    @Post()
    async addCard(
      @Body() data,
    ) {
      const response = await this.cardService.insertCard(
        data.CardNumber,
        data.ExpDate,
        data.Cvv,
        data.Amount
      );
      
      const result = { RequestId: response.id as string, Amount: response.Amount };
      return result;
    }
  }