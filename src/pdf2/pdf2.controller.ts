import { Controller, Get } from '@nestjs/common';
import { Pdf2Service } from './pdf2.service';
const PDFDocument = require('pdfkit');
const fs = require('fs');

const data = {
  companyInfo: {
    name: 'Bengal Fright Tools',
    slogan:
      'Manufacturing and supply of Precision Press Tools and Room Components',
    address: '12, AC Bose Road, Kolkata',
    landmark: 'Near Park Street',
    pin: 'Kolkata 700021',
    phone: '1234567890',
    email: 'rCjQs@example.com',
    web: 'www.bengalfrighttools.com',
    gst: 'BAG1264321BAC',
    logo: 'logo2.png',
    bankDetails: {
      name: 'State Bank of India',
      branch: 'Kolkata',
      accNo: '1234567890',
      ifsc: 'SBIN00100123',
      accType: 'Saving',
    },
  },
  customerInfo: {
    name: { label: 'M/S', value: 'Ramlal Ghorui' },
    address: { label: 'Address', value: 'Singur, Hooghly, 712409' },
    phone: { label: 'Phone', value: '1234567890' },
    email: { label: 'Email', value: 'rCjQs@example.com' },
    gst: { label: 'GSTIN', value: 'BAG1264321BAC' },
    placeOfSupply: {
      label: 'Place of Supply',
      value: 'Singur, Hooghly, 712409',
    },
  },
  invoiceDetails: {
    invoice: { label: 'Invoice No', value: 'INV-1234' },
    challan: { label: 'Challan No', value: 'CH-1234' },
    po: { label: 'PO No', value: 'PO-1234' },
    lr: { label: 'LR No', value: 'LR-1234' },
    eWay: { label: 'E-Way No', value: 'E-1234' },
    reverseCharge: { label: 'Reverse Charge', value: 0 },
    invoiceDate: { label: 'Invoice Date', value: '12/12/2023' },
    challanDate: { label: 'Challan Date', value: '12/12/2023' },
    dueDate: { label: 'Due Date', value: '12/12/2023' },
    deliveryDate: { label: 'Delivery Date', value: '12/12/2023' },
  },
  products: [
    {
      slNo: 1,
      name: 'Automatic saw',
      desc: '',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 2,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 3,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome) Claw hammer (BlackandChrome) Claw hammer (Black and Chrome) Claw hammer (BlackandChrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 4,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 5,
      name: 'Automatic saw',
      desc: '',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 6,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 7,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome) Claw hammer (BlackandChrome) Claw hammer (Black and Chrome) Claw hammer (BlackandChrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 8,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 9,
      name: 'Automatic saw',
      desc: '',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 10,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 11,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome) Claw hammer (BlackandChrome) Claw hammer (Black and Chrome) Claw hammer (BlackandChrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 12,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 13,
      name: 'Automatic saw',
      desc: '',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 15,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 15,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome) Claw hammer (BlackandChrome) Claw hammer (Black and Chrome) Claw hammer (BlackandChrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 16,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 17,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
    {
      slNo: 18,
      name: 'Automatic saw',
      desc: 'Claw hammer (Black and Chrome)',
      HSN: '1234',
      qty: 10,
      unit: 'pcs',
      rate: 12,
      taxable: 12,
      tax: 10,
      amount: 132,
      total: 120,
    },
  ],
};
export type TableDataType = typeof data;

@Controller('pdf2')
export class Pdf2Controller {
  constructor(private readonly pdfService: Pdf2Service) {}

  @Get()
  getPdf() {
    const doc = new PDFDocument({ margin: 0, size: 'A4', bufferPages: true });
    doc.pipe(fs.createWriteStream('output2.pdf'));

    const tableMandatoryData = {
      companyInfo: data.companyInfo,
      customerInfo: data.customerInfo,
      invoiceDetails: data.invoiceDetails,
    };

    const tableTotalHeight = 275;
    const nameColWidth = 240;
    let height = 0;
    let pageConfig: {
      itemStartCount: number;
      itemEndCount: number;
      page: number;
    }[] = [];
    let page = 1;
    let itemStartCount = 0;
    data.products.forEach((item, i) => {
      height +=
        doc.heightOfString(item.desc ? item.desc : item.name, {
          width: nameColWidth,
        }) + 10;

      if (height > tableTotalHeight) {
        pageConfig.push({ itemStartCount, itemEndCount: i, page });
        itemStartCount = i;
        height = 0;
        ++page;
      }
      if (i === data.products.length - 1) {
        pageConfig.push({
          itemStartCount,
          itemEndCount: data.products.length,
          page,
        });
      }
    });

    pageConfig.forEach((d, i) => {
      this.pdfService.generate(doc, {
        ...tableMandatoryData,
        products: data.products.slice(d.itemStartCount, d.itemEndCount),
      });
      i !== pageConfig.length - 1 && doc.addPage();
    });

    const range = doc.bufferedPageRange();
    let startPage = range.start;
    let endPage = range.start + range.count;
    for (let i = startPage; i < endPage; i++) {
      doc.switchToPage(i);
      doc
        .fontSize(12)
        .fillColor('#666')
        .text(`Page ${i + 1}`, 10, doc.page.height - 16, {
          width: 300,
          align: 'center',
        });
    }
    doc.end();

    return 'Reload page to generate pdf';
  }
}
