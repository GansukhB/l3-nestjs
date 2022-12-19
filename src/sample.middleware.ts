import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

interface userData {
  username?: string;
  userId?: number;
}

@Injectable()
export class SampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    //res.send('Forbidden');
    res.locals;
    next();
  }
}
