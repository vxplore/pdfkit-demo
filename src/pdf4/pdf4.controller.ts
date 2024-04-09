/* eslint-disable @typescript-eslint/no-var-requires */
import { Controller, Get } from '@nestjs/common';
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
  constructor() {}

  public margin = 20;
  public fontRegular = 'fonts/Playfair.ttf';
  public fontBold = 'fonts/Playfair-Bold.ttf';

  @Get()
  render() {
    const doc = new PDFDocument({
      margin: 0,
      size: 'A4',
      bufferPages: true,
      font: this.fontRegular,
    });
    doc.pipe(fs.createWriteStream('output4.pdf'));

    const tableMandatoryData = {
      companyInfo: data.companyInfo,
      customerInfo: data.customerInfo,
      invoiceDetails: data.invoiceDetails,
      billDetails: data.billDetails,
    };

    const margin = this.margin;
    const tableFontSize = 10;

    const h1size = 24;
    const headerPSize = 12;

    const headerHeight = this.calculateHeaderHeight(
      doc,
      h1size,
      headerPSize,
      margin,
    );

    const inH1Size = 14;
    const inPSize = 10;
    const invoiceHeight = this.calculateInvoiceHeight(
      doc,
      inH1Size,
      inPSize,
      margin,
    );

    const footerFontSize = 8;
    const footerTextHeight = doc
      .fontSize(footerFontSize)
      .heightOfString(data.companyInfo.bankDetails.branch);
    const footerHeight = margin * 7.5 + footerTextHeight * 5;

    const firstPageTableHeight =
      doc.page.height - (headerHeight + invoiceHeight + margin);
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

    doc.fontSize(tableFontSize);
    const tableFontHeight = doc
      .fontSize(tableFontSize)
      .heightOfString('invoice');
    data.products.forEach((item, i) => {
      const descHeight = doc.heightOfString(item.desc, {
        width: nameColWidth,
      });
      const nameHeight = doc.heightOfString(item.name, {
        width: nameColWidth,
      });
      height += descHeight + nameHeight + tableFontHeight / 2;

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

      this.generateHeader(doc, tableData, h1size, headerPSize);

      d.showInvoice &&
        this.generateInvoiceData(
          doc,
          headerHeight,
          tableData,
          inH1Size,
          inPSize,
        );

      const ts = d.showInvoice
        ? headerHeight + invoiceHeight
        : headerHeight + margin;
      const th = d.height + margin * 2;

      this.generateTable(doc, ts, th, tableData, d.showFooter);

      d.showFooter &&
        this.generateFooter(
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

  calculateHeaderHeight(doc, h1, p, m) {
    const h1Height = doc.fontSize(h1).heightOfString(data.companyInfo.name);
    const headPHeight = doc
      .fontSize(p)
      .heightOfString(data.companyInfo.address);
    return Math.ceil(h1Height + m * 2.5 + headPHeight * 3.3);
  }

  generateHeader(
    doc,
    tableData: TableDataType,
    titleFontSize?: number,
    bodyFontSize?: number,
  ) {
    const m = this.margin;
    let rh = 0;
    const h1size = titleFontSize || 24;
    const pSize = bodyFontSize || 12;
    doc
      .font(this.fontBold)
      .fill('blue')
      .fontSize(h1size)
      .text(tableData.companyInfo.name, m, 0);

    const headerFontHeight = doc
      .fontSize(h1size)
      .heightOfString(tableData.companyInfo.name);
    rh += headerFontHeight + m / 4;
    doc.rect(0, rh, doc.page.width, m * 1.5).fill('#00aaab');
    doc
      .fillColor('white')
      .fontSize(12)
      .text(tableData.companyInfo.slogan, m, rh + m / 3, {
        characterSpacing: 0.2,
        wordSpacing: 0.2,
      });
    doc.image(tableData.companyInfo.logo, doc.page.width - 84 * 1.2, m / 1.5, {
      width: 84,
    });

    rh += m * 1.5 + m / 5;
    doc.fontSize(pSize).fillColor('black');
    doc.text(tableData.companyInfo.address, m, rh);
    doc.text(tableData.companyInfo.landmark).moveDown(0.2);
    doc.text(tableData.companyInfo.pin);

    doc.text('Tel: ' + tableData.companyInfo.phone, 0, rh, {
      align: 'right',
      width: doc.page.width - 90 * 1.3,
    });
    doc
      .text('Web: ' + tableData.companyInfo.web, {
        align: 'right',
        width: doc.page.width - 90 * 1.3,
      })
      .moveDown(0.2);
    doc.text('Email: ' + tableData.companyInfo.email, {
      align: 'right',
      width: doc.page.width - 90 * 1.3,
    });
  }

  calculateInvoiceHeight(doc, h1, p, m) {
    const h1Height = doc.fontSize(h1).heightOfString('INVOICE');
    const pHeight = doc.fontSize(p).heightOfString('invoice');
    return Math.ceil(h1Height + m + pHeight * 9.5);
  }
  generateInvoiceData(
    doc,
    invoiceStartPoint: number,
    tableData: TableDataType,
    titleFontSize?: number,
    bodyFontSize?: number,
  ) {
    const m = this.margin;
    const h1size = titleFontSize || 14;
    const pSize = bodyFontSize || 10;
    let th = invoiceStartPoint;
    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();

    const h1Height = doc
      .font(this.fontRegular)
      .fontSize(h1size)
      .heightOfString('INVOICE');
    const pHeight = doc
      .font(this.fontRegular)
      .fontSize(pSize)
      .heightOfString(tableData.invoiceDetails.challan.label);

    th += h1Height / 6;
    doc.font(this.fontBold).fontSize(h1size).text('GSTIN:', m, th);
    doc
      .font(this.fontRegular)
      .fontSize(h1size)
      .text(tableData.companyInfo.gst, m * 4, th);
    doc
      .fill('#0033ff')
      .font(this.fontBold)
      .fontSize(h1size)
      .text('TAX INVOICE', 0, th, {
        align: 'center',
        width: doc.page.width,
      });
    doc
      .fill('black')
      .fontSize(pSize)
      .text('ORIGINAL FOR RECIPIENT', 0, th, {
        align: 'right',
        width: doc.page.width - m,
      });
    th += h1Height;
    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();

    let ts = th;
    doc.fontSize(pSize);
    th += pHeight / 5;
    doc.text('Customer Details', 0, th, {
      align: 'center',
      width: doc.page.width / 2.5,
    });
    th += pHeight;
    doc
      .moveTo(0, th)
      .lineTo(doc.page.width / 2.5, th)
      .stroke();

    th += pHeight / 5;
    doc
      .text(tableData.customerInfo.name.label, m / 2, th, { width: m * 3 })
      .moveDown(0.3);
    doc
      .text(tableData.customerInfo.address.label, { width: m * 3 })
      .moveDown(0.3);
    doc
      .text(tableData.customerInfo.phone.label, { width: m * 3 })
      .moveDown(0.3);
    doc.text(tableData.customerInfo.gst.label, { width: m * 3 }).moveDown(0.3);
    doc
      .text(tableData.customerInfo.placeOfSupply.label, { width: m * 3 })
      .moveDown(0.3);

    doc
      .font(this.fontRegular)
      .text(tableData.customerInfo.name.value, m * 4, th)
      .moveDown(0.3);

    doc.text(tableData.customerInfo.address.value).moveDown(0.3);
    doc.text('+91 ' + tableData.customerInfo.phone.value).moveDown(0.3);
    doc.text(tableData.customerInfo.gst.value).moveDown(0.3);
    doc.text(tableData.customerInfo.placeOfSupply.value).moveDown(0.3);

    const vh = ts + pHeight * 9;
    doc
      .moveTo(doc.page.width / 2.5, ts)
      .lineTo(doc.page.width / 2.5, vh)
      .stroke();

    ts += pHeight / 5;
    doc.text(
      tableData.invoiceDetails.invoice.label,
      doc.page.width / 2.5 + m / 2,
      ts,
    );
    doc.text(tableData.invoiceDetails.challan.label).moveDown(0.3);
    doc.text(tableData.invoiceDetails.po.label).moveDown(0.3);
    doc.text(tableData.invoiceDetails.deliveryDate.label).moveDown(0.3);
    doc.text(tableData.invoiceDetails.lr.label).moveDown(0.3);
    doc.text(tableData.invoiceDetails.eWay.label).moveDown(0.3);

    doc
      .text(
        tableData.invoiceDetails.invoice.value,
        doc.page.width / 2.5 + m * 6,
        ts,
      )
      .moveDown(0.3);
    doc.text(tableData.invoiceDetails.challan.value).moveDown(0.3);
    doc.text(tableData.invoiceDetails.po.value).moveDown(0.3);
    doc.text(tableData.invoiceDetails.deliveryDate.value).moveDown(0.3);
    doc.text(tableData.invoiceDetails.lr.value).moveDown(0.3);
    doc.text(tableData.invoiceDetails.eWay.value).moveDown(0.3);

    doc
      .text(
        tableData.invoiceDetails.invoiceDate.label,
        doc.page.width / 2.5 + 190,
        ts,
        { width: 100 },
      )
      .moveDown(0.4);
    doc
      .text(tableData.invoiceDetails.challanDate.label, { width: 100 })
      .moveDown(2.5);
    doc
      .text(tableData.invoiceDetails.reverseCharge.label, { width: 100 })
      .moveDown(0.4);
    doc
      .text(tableData.invoiceDetails.dueDate.label, { width: 100 })
      .moveDown(0.4);
    doc
      .text(
        tableData.invoiceDetails.invoiceDate.value,
        doc.page.width / 2.5 + 280,
        ts,
        { width: 100 },
      )
      .moveDown(0.4);
    doc
      .text(tableData.invoiceDetails.challanDate.value, { width: 100 })
      .moveDown(2.5);
    doc
      .text(tableData.invoiceDetails.reverseCharge.value, { width: 100 })
      .moveDown(0.4);
    doc
      .text(tableData.invoiceDetails.dueDate.value, { width: 100 })
      .moveDown(0.4);

    doc.moveTo(0, vh).lineTo(doc.page.width, vh).stroke();
  }

  generateTable(
    doc,
    tableStart: number,
    tableHeight: number,
    tableData: TableDataType,
    showFooter?: boolean,
    bodyFontSize?: number,
  ) {
    const m = this.margin;
    let ts = tableStart;

    const pSize = bodyFontSize || 8;
    const pHeight = doc.fontSize(pSize).heightOfString('invoice');

    doc.rect(0, ts, doc.page.width, m * 2).fillAndStroke('#ddd', 'black');
    doc.font(this.fontBold).fill('black').fontSize(pSize);

    const th = tableHeight + tableStart + m * 2;

    let w = 20;
    const slWidth = 20;
    doc.text('SL No.', m / 2, ts + m / 2, { align: 'center', width: slWidth });
    doc
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    const nameWidth = 240;
    let p = w;
    w = p + nameWidth;
    doc.text('Name of Product/Service', p - m / 2, ts + m / 2, {
      align: 'center',
      width: w,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    const hsnWidth = 60;
    p = w;
    w = p + hsnWidth;
    doc.text('HSN/SAC', p + m / 2, ts + m / 2, {
      align: 'center',
      width: hsnWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    const qtyWidth = 40;
    p = w;
    w = p + qtyWidth;
    doc.text('Qty', p + m / 2, ts + m / 2, {
      align: 'center',
      width: qtyWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    const rateWidth = 40;
    p = w;
    w = p + rateWidth;
    doc.text('Rate', p + m / 2, ts + m / 2, {
      align: 'center',
      width: rateWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    const taxableWidth = 60;
    p = w;
    w = p + taxableWidth;
    doc.text('Taxable value', p + m / 2, ts + m / 2, {
      align: 'center',
      width: taxableWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts + m)
      .lineTo(w + m / 2 + 65, ts + m)
      .stroke();

    const taxWidth = 25;
    p = w;
    w = p + taxWidth;
    doc.text('%', p + m / 2, ts + m * 1.3, {
      align: 'center',
      width: taxWidth,
    });
    doc.text('IGST', p + m / 2, ts + m / 2.5, {
      align: 'center',
      width: 65,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts + m)
      .lineTo(w + m / 2, th)
      .stroke();

    const amountWidth = 40;
    p = w;
    w = p + amountWidth;
    doc.text('Amount', p + m / 2, ts + m * 1.3, {
      align: 'center',
      width: amountWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, ts)
      .lineTo(w + m / 2, th)
      .stroke();

    const totalWidth = doc.page.width - w;
    doc.text('Total', w + m / 2, ts + m, {
      align: 'center',
      width: totalWidth,
    });

    // ######## Table values ########
    ts = ts + m * 2.2;
    tableData.products.forEach((item) => {
      let ls = m / 2;
      doc.font(this.fontRegular);
      doc.text(item.slNo, ls, ts, {
        align: 'center',
        width: slWidth,
      });
      ls += slWidth;
      doc.font(this.fontBold);
      doc.text(item.name, ls + 8, ts, {
        width: nameWidth,
      });
      ls += nameWidth;
      doc.font(this.fontRegular);
      doc.text(item.HSN, ls, ts, {
        align: 'center',
        width: hsnWidth,
      });
      ls += hsnWidth;
      doc.text(`${item.qty} ${item.unit}`, ls, ts, {
        align: 'center',
        width: qtyWidth,
      });
      ls += qtyWidth;
      doc.text(item.rate.toFixed(2), ls, ts, {
        align: 'center',
        width: rateWidth,
      });
      ls += rateWidth;
      doc.text(item.taxable.toFixed(2), ls, ts, {
        align: 'center',
        width: taxableWidth,
      });
      ls += taxableWidth;
      doc.text(item.tax, ls, ts, {
        align: 'center',
        width: taxWidth,
      });
      ls += taxWidth;
      doc.text(item.amount.toFixed(2), ls, ts, {
        align: 'center',
        width: amountWidth,
      });
      ls += amountWidth;
      doc.text(item.total.toFixed(2), ls, ts, {
        align: 'center',
        width: totalWidth,
      });
      let height = doc.heightOfString(item.name, {
        width: nameWidth,
      });
      if (item.desc) {
        doc.fillColor('#666').text(item.desc, m * 1.75, ts + height, {
          width: nameWidth,
        });
      }

      if (item.desc) {
        height += doc.heightOfString(item.desc, {
          width: nameWidth,
        });
      }

      doc.fillColor('black');
      ts += height + pHeight / 2;
      doc.font(this.fontBold);
    });
    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();
    // ##############################

    if (showFooter) {
      // th += m * 3;

      doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();
      doc
        .moveTo(0, th + m)
        .lineTo(doc.page.width, th + m)
        .stroke();

      w = 0;
      const btWidth = slWidth + nameWidth;
      doc.text('Total', w, th, {
        align: 'right',
        width: btWidth,
      });
      doc
        .moveTo(btWidth + m / 2, th)
        .lineTo(btWidth + m / 2, th + m)
        .stroke();

      w += btWidth + hsnWidth;
      doc.text(tableData.billDetails.totalQuantity, w + m / 3, th, {
        align: 'center',
        width: qtyWidth,
      });
      doc
        .moveTo(w + m / 2, th)
        .lineTo(w + m / 2, th + m)
        .stroke();
      w += qtyWidth;
      doc.text(tableData.billDetails.totalRate, w + m / 3, th, {
        align: 'right',
        width: rateWidth,
      });
      doc
        .moveTo(w + m / 2, th)
        .lineTo(w + m / 2, th + m)
        .stroke();
      w += rateWidth;
      doc.text(tableData.billDetails.totalTaxableValue, w, th, {
        align: 'right',
        width: taxableWidth,
      });
      doc
        .moveTo(w + m / 2, th)
        .lineTo(w + m / 2, th + m)
        .stroke();
      doc
        .moveTo(w + taxableWidth + m / 2, th)
        .lineTo(w + taxableWidth + m / 2, th + m)
        .stroke();
      w += taxableWidth + taxWidth;
      doc.text(tableData.billDetails.totalTax, w, th, {
        align: 'right',
        width: amountWidth,
      });
      doc
        .moveTo(w + amountWidth + m / 2, th)
        .lineTo(w + amountWidth + m / 2, th + m)
        .stroke();
      w += m;
      doc.text(tableData.billDetails.grandTotal, w, th, {
        align: 'right',
        width: totalWidth,
      });
    }
  }

  generateFooter(
    doc,
    tableHeight: number,
    tableData: TableDataType,
    footerFontSize?: number,
  ) {
    const m = this.margin;
    const pSize = footerFontSize || 8;
    let th = tableHeight;
    const w = doc.page.width / 1.75;
    const rw = doc.page.width - w - m;
    const gth = th - m;
    const txh = doc
      .fontSize(pSize)
      .heightOfString(tableData.companyInfo.bankDetails.branch);

    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();

    let fh = th + m * 7.5 + 5 * txh;
    doc.moveTo(w, th).lineTo(w, fh).stroke();

    doc.fontSize(pSize).text('Total in words', m / 2, th + txh / 2, {
      align: 'center',
      width: w,
    });
    th = th + m;
    doc.moveTo(0, th).lineTo(w, th).stroke();
    doc
      .font(this.fontRegular)
      .text(tableData.billDetails.grandTotalInWords, m / 2, th + txh / 2, {
        align: 'center',
        width: w,
      });
    th = th + m;
    doc.moveTo(0, th).lineTo(w, th).stroke();
    doc.font(this.fontBold).text('Bank Details', m / 2, th + txh / 2, {
      align: 'center',
      width: w,
    });
    th = th + m * 0.85;
    doc.moveTo(0, th).lineTo(w, th).stroke();

    fh = th + txh / 2;
    doc.text('Bank Name', m / 2, fh).moveDown(0.5);
    doc.text('Branch Name').moveDown(0.5);
    doc.text('Bank Account Number').moveDown(0.5);
    doc.text('Bank Branch IFSC').moveDown(0.5);

    doc.text(tableData.companyInfo.bankDetails.name, m * 7, fh).moveDown(0.5);
    doc.text(tableData.companyInfo.bankDetails.branch).moveDown(0.5);
    doc.text(tableData.companyInfo.bankDetails.accNo).moveDown(0.5);
    doc.text(tableData.companyInfo.bankDetails.ifsc).moveDown(0.5);

    th = fh + txh * 5.5;
    doc.moveTo(0, th).lineTo(w, th).stroke();
    doc
      .font(this.fontBold)
      .text('Terms and Conditions', m / 2, th + txh / 2, {
        align: 'center',
        width: w,
      })
      .moveDown(0.5);
    th = th + m * 0.85;
    doc.moveTo(0, th).lineTo(w, th).stroke();

    doc.font(this.fontRegular).fillColor('#333');
    doc.text('1. Subject to Kolkata jurisdiction').moveDown(0.2);
    doc
      .text('2. Our responsibility ceases as soon as you leave our premises.')
      .moveDown(0.2);
    doc.text('3. Goods are sold are not returnable').moveDown(0.2);
    doc.text('4. Delivery once made will not be taken back').moveDown(0.2);

    th = gth + m;

    doc
      .font(this.fontBold)
      .fillColor('black')
      .text('Taxable Amount', w + m / 2, th + txh / 2);
    doc.text(tableData.billDetails.totalTaxableValue, w, th + txh / 2, {
      width: rw,
      align: 'right',
    });
    th = th + m;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();

    doc.text('Add:IGST', w + m / 2, th + txh / 2);
    doc.text(tableData.billDetails.igst, w, th + txh / 2, {
      width: rw,
      align: 'right',
    });
    th = th + m;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();

    doc.text('Total Tax', w + m / 2, th + txh / 2);
    doc.text(tableData.billDetails.totalTax, w, th + txh / 2, {
      width: rw,
      align: 'right',
    });
    th = th + m;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();

    doc.text('Total amount after tax', w + m / 2, th + txh / 2);
    doc
      .fontSize(pSize * 1.25)
      .text(`₹ ${tableData.billDetails.grandTotal}`, w, th + 6, {
        width: rw,
        align: 'right',
      });
    th = th + m;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();

    doc.fontSize(pSize);
    doc.text('GST payable on reverse charge', w + m / 2, th + txh / 2);
    doc.text(tableData.billDetails.reverseChargeGst || 'N/A', w, th + txh / 2, {
      width: rw,
      align: 'right',
    });
    th = th + m;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();

    doc
      .fontSize(pSize * 0.75)
      .fillColor('#666')
      .text(
        'This is certified that the particulars given above are true',
        w,
        th + 4,
        {
          width: rw,
          align: 'center',
        },
      );
    doc
      .fontSize(pSize * 1.25)
      .fillColor('blue')
      .text('For Bengal Fright Tools', w, th + 14, {
        width: rw,
        align: 'center',
      });
    th = th + m * 1.5;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();
    th += 5 * txh;
    doc.moveTo(w, th).lineTo(doc.page.width, th).stroke();
    doc
      .fontSize(pSize)
      .fillColor('black')
      .text('Authorized Signatory', w, th + txh / 2, {
        width: rw,
        align: 'center',
      });
    th += m;
    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();
  }
}
