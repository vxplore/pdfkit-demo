import { Controller, Get } from '@nestjs/common';
import { renderPdf } from './renderPdf';

@Controller('pdf4')
export class Pdf4Controller {
  constructor() {}

  @Get()
  render() {
    new renderPdf().render();
  }
}
