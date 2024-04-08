import { Injectable } from '@nestjs/common';
import { TableDataType } from './pdf4.controller';

@Injectable()
export class Pdf4Service {
  constructor() {}
  public m = 20;

  public fontRegular = 'fonts/Inter.ttf';
  public fontBold = 'fonts/Inter-Bold.ttf';
  generateHeader(
    doc,
    tableData: TableDataType,
    titleFontSize?: number,
    bodyFontSize?: number,
  ) {
    const m = this.m;
    let rh = m / 3;
    const h1size = titleFontSize || 24;
    doc
      .font(this.fontBold)
      .fill('blue')
      .fontSize(h1size)
      .text(tableData.companyInfo.name, m, rh);

    const headerFontHeight = doc
      .fontSize(h1size)
      .heightOfString(tableData.companyInfo.name);
    rh += headerFontHeight;
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
    doc.fontSize(bodyFontSize || 12).fillColor('black');
    doc.text(tableData.companyInfo.address, m, rh).moveDown(0.1);
    doc.text(tableData.companyInfo.landmark).moveDown(0.1);
    doc.text(tableData.companyInfo.pin).moveDown(0.1);

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
    doc
      .text('Email: ' + tableData.companyInfo.email, {
        align: 'right',
        width: doc.page.width - 90 * 1.3,
      })
      .moveDown(2);

    rh += bodyFontSize * 3.1;
    doc
      .moveTo(0, rh + m / 2)
      .lineTo(doc.page.width, rh + m / 2)
      .stroke();
  }

  generateInvoiceData(
    doc,
    invoiceStartPoint: number,
    tableData: TableDataType,
    titleFontSize?: number,
    bodyFontSize?: number,
  ) {
    const m = this.m;
    const h1size = titleFontSize || 14;
    const pSize = bodyFontSize || 10;
    let th = invoiceStartPoint;
    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();

    th += m / 2;
    doc.font(this.fontBold).fontSize(h1size).text('GSTIN:', m, th);
    doc
      .font('Helvetica')
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
      .fontSize(12)
      .text('ORIGINAL FOR RECIPIENT', 0, th, {
        align: 'right',
        width: doc.page.width - m,
      });
    th += m;
    let ts = th;
    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();

    doc.fontSize(pSize);
    th += m / 4;
    doc.text('Customer Details', 0, th, {
      align: 'center',
      width: doc.page.width / 2.5,
    });
    th += m / 1.75;
    doc
      .moveTo(0, th)
      .lineTo(doc.page.width / 2.5, th)
      .stroke();

    th += m / 2;
    doc
      .text(tableData.customerInfo.name.label, m / 2, th, { width: m * 3 })
      .moveDown(0.5);
    doc
      .text(tableData.customerInfo.address.label, { width: m * 3 })
      .moveDown(0.5);
    doc
      .text(tableData.customerInfo.phone.label, { width: m * 3 })
      .moveDown(0.5);
    doc.text(tableData.customerInfo.gst.label, { width: m * 3 }).moveDown(0.5);
    doc
      .text(tableData.customerInfo.placeOfSupply.label, { width: m * 3 })
      .moveDown(0.5);

    doc
      .font('Helvetica')
      .text(tableData.customerInfo.name.value, m * 4, th)
      .moveDown(0.5);

    doc.text(tableData.customerInfo.address.value).moveDown(0.5);
    doc.text('+91 ' + tableData.customerInfo.phone.value).moveDown(0.5);
    doc.text(tableData.customerInfo.gst.value).moveDown(0.5);
    doc.text(tableData.customerInfo.placeOfSupply.value).moveDown(0.5);

    const vh = ts + pSize * 12.5;
    doc
      .moveTo(doc.page.width / 2.5, ts)
      .lineTo(doc.page.width / 2.5, vh)
      .stroke();

    ts += m / 2;
    doc
      .text(
        tableData.invoiceDetails.invoice.label,
        doc.page.width / 2.5 + m / 2,
        ts,
      )
      .moveDown(0.6);
    doc.text(tableData.invoiceDetails.challan.label).moveDown(0.6);
    doc.text(tableData.invoiceDetails.po.label).moveDown(0.6);
    doc.text(tableData.invoiceDetails.deliveryDate.label).moveDown(0.6);
    doc.text(tableData.invoiceDetails.lr.label).moveDown(0.6);
    doc.text(tableData.invoiceDetails.eWay.label).moveDown(0.6);

    doc
      .text(
        tableData.invoiceDetails.invoice.value,
        doc.page.width / 2.5 + m * 6,
        ts,
      )
      .moveDown(0.6);
    doc.text(tableData.invoiceDetails.challan.value).moveDown(0.6);
    doc.text(tableData.invoiceDetails.po.value).moveDown(0.6);
    doc.text(tableData.invoiceDetails.deliveryDate.value).moveDown(0.6);
    doc.text(tableData.invoiceDetails.lr.value).moveDown(0.6);
    doc.text(tableData.invoiceDetails.eWay.value).moveDown(0.6);

    doc
      .text(
        tableData.invoiceDetails.invoiceDate.label,
        doc.page.width / 2.5 + 190,
        ts,
        { width: 100 },
      )
      .moveDown(0.6);
    doc
      .text(tableData.invoiceDetails.challanDate.label, { width: 100 })
      .moveDown(2.5);
    doc
      .text(tableData.invoiceDetails.reverseCharge.label, { width: 100 })
      .moveDown(0.6);
    doc
      .text(tableData.invoiceDetails.dueDate.label, { width: 100 })
      .moveDown(0.6);
    doc
      .text(
        tableData.invoiceDetails.invoiceDate.value,
        doc.page.width / 2.5 + 280,
        ts,
        { width: 100 },
      )
      .moveDown(0.6);
    doc
      .text(tableData.invoiceDetails.challanDate.value, { width: 100 })
      .moveDown(2.5);
    doc
      .text(tableData.invoiceDetails.reverseCharge.value, { width: 100 })
      .moveDown(0.6);
    doc
      .text(tableData.invoiceDetails.dueDate.value, { width: 100 })
      .moveDown(0.6);

    doc.moveTo(0, vh).lineTo(doc.page.width, vh).stroke();
  }

  generateTable(
    doc,
    tableStart: number,
    tableHeight: number,
    columnGap: number,
    tableData: TableDataType,
    showFooter?: boolean,
    bodyFontSize?: number,
  ) {
    const m = this.m;
    let ts = tableStart;
    const tableRectHeight = m * 2;

    const pSize = bodyFontSize || 8;
    doc
      .rect(0, ts, doc.page.width, tableRectHeight)
      .fillAndStroke('#ddd', 'black');
    doc.font(this.fontBold).fill('black').fontSize(pSize);

    let th = tableHeight + tableStart + tableRectHeight;
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
      doc.font('Helvetica');
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
      doc.font('Helvetica');
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
      ts += height + columnGap;
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

  public footerHeight = this.m * 12;
  generateFooter(
    doc,
    tableHeight: number,
    tableData: TableDataType,
    footerFontSize?: number,
  ) {
    const m = this.m;
    const pSize = footerFontSize || 8;
    let th = tableHeight;
    let w = doc.page.width / 1.75;
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
      .font('Helvetica')
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

    doc.font('Helvetica').fillColor('#333');
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
