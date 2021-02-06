import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ping(): Object {
    return {"result": "pong"};
  }
}
  