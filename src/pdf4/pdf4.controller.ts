import { Controller, Get } from '@nestjs/common';
import { Pdf4Service } from './pdf4.service';
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
      slNo: 14,
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
  billDetails: {
    totalQuantity: 180,
    totalRate: 1800,
    totalTaxableValue: 1800,
    igst: 180,
    totalTax: 180,
    totalAmount: 1800,
    grandTotal: 1980,
    grandTotalInWords: 'One hundred eighty eight rupees only',
    reverseChargeGst: 0,
  },
};
export type TableDataType = typeof data;

@Controller('pdf4')
export class Pdf4Controller {
  constructor(private readonly pdfService: Pdf4Service) {}

  @Get()
  getPdf() {
    const doc = new PDFDocument({
      margin: 0,
      size: 'A4',
      bufferPages: true,
      font: 'fonts/Inter.ttf',
    });
    doc.pipe(fs.createWriteStream('output4.pdf'));

    const tableMandatoryData = {
      companyInfo: data.companyInfo,
      customerInfo: data.customerInfo,
      invoiceDetails: data.invoiceDetails,
      billDetails: data.billDetails,
    };

    const margin = this.pdfService.m;
    const tableFontSize = 8;

    const h1size = 24;
    const headerPSize = 12;
    const h1Height = doc.fontSize(h1size).heightOfString(data.companyInfo.name);
    const headerHeight = h1Height + margin * 2.5 + headerPSize * 3.1;

    const inH1Size = 14;
    const inPSize = 10;
    const inHeight = margin * 2 + inPSize * 12.5;
    const invoiceHeight = headerHeight + inHeight;

    const footerFontSize = 8;
    const footerTextHeight = doc
      .fontSize(footerFontSize)
      .heightOfString(data.companyInfo.bankDetails.branch);
    const footerHeight = margin * 7.5 + footerTextHeight * 5;
    const firstPageTableHeight = doc.page.height - invoiceHeight - margin * 3;

    const otherPageTableHeight =
      doc.page.height - headerHeight - footerHeight - margin;

    const nameColWidth = 240;
    let height = 0;
    const pageConfig: {
      itemStartCount: number;
      itemEndCount: number;
      height: number;
      page: number;
      showFooter?: boolean;
      showInvoice?: boolean;
    }[] = [];
    let page = 1;
    let itemStartCount = 0;

    const columnGap = 10;
    doc.fontSize(tableFontSize);
    data.products.forEach((item, i) => {
      const descHeight = doc.heightOfString(item.desc, {
        width: nameColWidth,
      });
      const nameHeight = doc.heightOfString(item.name, {
        width: nameColWidth,
      });
      height += descHeight + nameHeight + columnGap;

      if (
        i === data.products.length - 1 &&
        height < firstPageTableHeight - footerHeight &&
        page === 1
      ) {
        return pageConfig.push({
          itemStartCount,
          itemEndCount: i + 1,
          height,
          page,
          showInvoice: true,
          showFooter: true,
        });
      } else {
        if (height > firstPageTableHeight && page === 1) {
          pageConfig.push({
            itemStartCount,
            itemEndCount: i,
            height: Math.floor(height),
            page,
            showInvoice: true,
            showFooter: false,
          });
          height = 0;
          itemStartCount = i;
          ++page;
        } else if (i === data.products.length - 1) {
          pageConfig.push({
            itemStartCount,
            itemEndCount: i + 1,
            height: Math.floor(height),
            page,
            showInvoice: false,
            showFooter: true,
          });
        }
      }
    });

    console.log({
      headerHeight,
      invoiceHeight,
      first: firstPageTableHeight,
      other: otherPageTableHeight,
      height,
      length: data.products.length,
      pageConfig,
    });
    pageConfig.forEach((d, i) => {
      const tableData = {
        ...tableMandatoryData,
        products: data.products.slice(d.itemStartCount, d.itemEndCount),
      };

      this.pdfService.generateHeader(doc, tableData, h1size, headerPSize);

      d.showInvoice &&
        this.pdfService.generateInvoiceData(
          doc,
          headerHeight,
          tableData,
          inH1Size,
          inPSize,
        );

      const ts = d.showInvoice ? invoiceHeight : headerHeight + margin;
      const th = d.height + margin * 2;

      this.pdfService.generateTable(
        doc,
        ts,
        th,
        columnGap,
        tableData,
        d.showFooter,
        tableFontSize,
      );

      d.showFooter &&
        this.pdfService.generateFooter(
          doc,
          d.showInvoice
            ? invoiceHeight + d.height + margin * 7
            : headerHeight + d.height + margin * 7,
          tableData,
          footerFontSize,
        );

      i !== pageConfig.length - 1 && doc.addPage();
    });

    const range = doc.bufferedPageRange();
    const startPage = range.start;
    const endPage = range.start + range.count;
    if (range.count > 1) {
      for (let i = startPage; i < endPage; i++) {
        doc.switchToPage(i);
        doc.fillColor('#666').text(`Page ${i + 1}`, 10, doc.page.height - 10, {
          width: doc.page.width,
          align: 'center',
        });
      }
    }
    console.log(range);
    doc.end();

    return 'Reload page to generate pdf';
  }
}
