import { Controller, Get } from '@nestjs/common';
const PDFDocument = require('pdfkit-table');
const fs = require('fs');

const tableArray = {
  headers: ['Name', 'Qty', 'Rate', 'Total'],
  rows: [
    ['Items', '10', '12', '120'],
    ['Items', '10', '12', '120'],
    ['Items', '10', '12', '120'],
    ['Items', '10', '12', '120'],
    ['Items', '10', '12', '120'],
  ],
};

@Controller('pdf')
export class PdfController {
  constructor() {}

  @Get()
  async generatePdf() {
    const m = 20;
    const doc = new PDFDocument({ margin: m * 1.5, size: 'A4' });
    doc.pipe(fs.createWriteStream('output.pdf'));

    doc.image('logo.png', 10, 20, {
      height: 90,
      align: 'center',
      valign: 'center',
    });

    doc
      .fontSize(22)
      .font('Helvetica-Bold')
      .text('INVOICE', 0, 30, { align: 'right' });
    doc.font('Helvetica').fontSize(14);
    doc.text('Date: 12/12/2023', { align: 'right' }).moveDown(0.5);
    doc.text('Due Date: 12/12/2023', { align: 'right' }).moveDown(0.5);
    doc.text('Address: Bally, WB, 712345', { align: 'right' }).moveDown(0.5);
    doc.text('GST NO: BAG1264321AHGSF', { align: 'right' }).moveDown(0.5);

    doc.moveTo(0, 150).lineTo(doc.page.width, 150).stroke();

    doc.moveDown(1.5);

    doc.roundedRect(m * 6, 172, 450, 20 * 13, 10).strokeColor('#666');
    await doc
      .fontSize(14)
      .stroke()
      .table(tableArray, {
        columnsSize: [150, 100, 100, 100],
        x: m * 6,
        padding: 5,
        minRowHeight: 20,
        align: 'center',
        divider: {
          header: { disabled: false, width: 1, opacity: 1 },
          horizontal: { disabled: false, width: 0.5, opacity: 0.5 },
        },
        prepareHeader: () => doc.font('Helvetica-Bold').fontSize(14),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font('Helvetica').fontSize(12);
          if (indexColumn === 0) {
            doc.fillColor('black');
          } else {
            doc.fillColor('#666');
          }
        },
      });
    doc
      .fillColor('black')
      .font('Helvetica-Bold')
      .text('Subtotal', m * 6.2, 172 + 20 * 8.5)
      .moveDown(1.5);
    doc.text('Tax(10%)').moveDown(1.5);
    doc.fillColor('#F86624');
    doc.text('Total Due').moveDown(1.5);

    doc
      .fillColor('black')
      .text('6000', m * 6.2, 172 + 20 * 8.5, { align: 'right' })
      .moveDown(1.5);
    doc.text('60', { align: 'right' }).moveDown(1);
    doc.fillColor('#F86624');
    doc.text('3600', { align: 'right' }).moveDown(2);

    doc
      .fillColor('#666')
      .text('Please pay within 15 days of receiving this invoice.', {
        align: 'center',
      })
      .moveDown(5);

    doc.fontSize(12);
    doc.fillColor('black').text('Invoice #', m, 180);
    doc.fillColor('#666').text('BAG12643');

    doc.fillColor('black').text('Invoice Date #', m, 240);
    doc.fillColor('#666').text('12/04/2024');

    doc.fillColor('black').text('Reference #', m, 300);
    doc.fillColor('#666').text('BAG12643');

    doc.fillColor('black').text('Last Due Date #', m, 360);
    doc.fillColor('#666').text('15/04/2024');

    doc
      .rect(0, doc.page.height - 80, doc.page.width, 80)
      .fill('#F2F2F2')
      .opacity(0.4);
    doc.fillColor('black');
    doc.text('www.google.com', m, 790);
    doc.text('+91 123456789', 0, 790, { align: 'center' });
    doc.text('www.google.com', 0, 790, { align: 'right' });

    doc.end();
  }
}
