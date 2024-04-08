import { Controller, Get } from '@nestjs/common';
import { Pdf3Service } from './pdf3.service';
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

@Controller('pdf3')
export class Pdf3Controller {
  constructor(private readonly pdfService: Pdf3Service) {}

  @Get()
  getPdf() {
    const doc = new PDFDocument({ margin: 0, size: 'A4', bufferPages: true });
    doc.pipe(fs.createWriteStream('output3.pdf'));

    const tableMandatoryData = {
      companyInfo: data.companyInfo,
      customerInfo: data.customerInfo,
      invoiceDetails: data.invoiceDetails,
      billDetails: data.billDetails,
    };

    const bottomMargin = 20;

    const headerHeight = this.pdfService.headerHeight;
    const invoiceHeight = this.pdfService.invoiceHeight;
    const footerHeight = this.pdfService.footerHeight;

    const firstPageTableHeight = doc.page.height - invoiceHeight - bottomMargin;

    const otherPageTableHeight =
      doc.page.height - headerHeight - footerHeight - bottomMargin;

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

    doc.fontSize(8);
    data.products.forEach((item, i) => {
      const descHeight = doc.heightOfString(item.desc, {
        width: nameColWidth,
      });
      const nameHeight = doc.heightOfString(item.name, {
        width: nameColWidth,
      });
      height += descHeight + nameHeight + 10;

      if (
        i === data.products.length - 1 &&
        height < firstPageTableHeight - footerHeight &&
        page === 1
      ) {
        pageConfig.push({
          itemStartCount,
          itemEndCount: i + 1,
          height,
          page,
          showInvoice: true,
          showFooter: true,
        });
      } else {
        if (
          height > firstPageTableHeight - bottomMargin &&
          height < firstPageTableHeight &&
          page === 1
        ) {
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

      this.pdfService.generateHeader(doc, tableData);

      d.showInvoice && this.pdfService.generateInvoiceData(doc, tableData);

      const ts = d.showInvoice
        ? this.pdfService.invoiceHeight
        : this.pdfService.headerHeight;
      const th = d.height + this.pdfService.tableHeaderHeight;
      this.pdfService.generateTable(doc, ts, th, tableData, d.showFooter);

      d.showFooter &&
        this.pdfService.generateFooter(
          doc,
          d.showInvoice
            ? this.pdfService.invoiceHeight + d.height + bottomMargin * 5
            : this.pdfService.headerHeight + d.height + bottomMargin * 5,
          tableData,
        );

      i !== pageConfig.length - 1 && doc.addPage();
    });

    const range = doc.bufferedPageRange();
    const startPage = range.start;
    const endPage = range.start + range.count;
    for (let i = startPage; i < endPage; i++) {
      doc.switchToPage(i);
      doc.fillColor('#666').text(`Page ${i + 1}`, 10, doc.page.height - 16, {
        width: doc.page.width,
        align: 'center',
      });
    }
    doc.end();

    return 'Reload page to generate pdf';
  }
}
