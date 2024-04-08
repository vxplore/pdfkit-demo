import { Controller, Get } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PDFDocument = require('pdfkit');
import * as fs from 'fs';

@Controller('mypdf')
export class PdfTestController {
  constructor() {}
  putContent(doc: any) {
    doc.fontSize(20);
    const text = 'I am software developer 123';
    const x = 100;
    const y = 100;
    const maxWidth = 100;
    doc.text(text, x, y, { width: maxWidth });
    doc.fillColor('#8000FF00').text(text, x, y);
    const w = doc.widthOfString(text, { width: maxWidth });
    const h = doc.heightOfString(text, { width: maxWidth });
    doc.rect(x, y, w, h).stroke();
    doc.rect(x, y, 100, 100).strokeColor('red').stroke();
    console.log(x, y, w, h);
  }
  @Get('generate')
  async generate() {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('mypdf.pdf'));
    this.putContent(doc);
    doc.end();
  }
}
