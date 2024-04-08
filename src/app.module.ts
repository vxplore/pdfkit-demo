import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfController } from './pdf/pdf.controller';
import { Pdf2Controller } from './pdf2/pdf2.controller';
import { Pdf2Service } from './pdf2/pdf2.service';
import { Pdf3Controller } from './pdf3/pdf3.controller';
import { Pdf3Service } from './pdf3/pdf3.service';
import { PdfTestController } from './pdftest.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    PdfController,
    Pdf2Controller,
    Pdf3Controller,
    PdfTestController,
  ],
  providers: [AppService, Pdf2Service, Pdf3Service],
})
export class AppModule {}
