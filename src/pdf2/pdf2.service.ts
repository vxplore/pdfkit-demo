import { Injectable } from '@nestjs/common';
import { TableDataType } from './pdf2.controller';

@Injectable()
export class Pdf2Service {
  generate(doc, tableData: TableDataType) {
    const m = 20;
    doc
      .font('Helvetica-Bold')
      .fill('blue')
      .fontSize(24)
      .text(tableData.companyInfo.name, m, 6);

    doc.rect(0, m * 1.5, doc.page.width, m * 1.5).fill('#00aaab');
    doc
      .fillColor('white')
      .fontSize(12)
      .text(tableData.companyInfo.slogan, m, m * 2, {
        characterSpacing: 0.2,
        wordSpacing: 0.2,
      });
    doc.image(tableData.companyInfo.logo, doc.page.width - 84 * 1.2, m / 1.5, {
      width: 84,
    });

    doc.fontSize(12).fillColor('black');
    doc.text(tableData.companyInfo.address, m, m * 3.5).moveDown(0.2);
    doc.text(tableData.companyInfo.landmark).moveDown(0.2);
    doc.text(tableData.companyInfo.pin).moveDown(0.2);

    doc.text('Tel: ' + tableData.companyInfo.phone, 0, m * 3.5, {
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

    doc
      .moveTo(0, m * 6)
      .lineTo(doc.page.width, m * 6)
      .stroke();
    doc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('GSTIN:', m, m * 6.5);
    doc
      .font('Helvetica')
      .fontSize(14)
      .text(tableData.companyInfo.gst, m * 4, m * 6.5);
    doc
      .fill('#0033ff')
      .font('Helvetica-Bold')
      .fontSize(18)
      .text('TAX INVOICE', 0, m * 6.5, {
        align: 'center',
        width: doc.page.width,
      });
    doc
      .fill('black')
      .fontSize(12)
      .text('ORIGINAL FOR RECIPIENT', 0, m * 6.5, {
        align: 'right',
        width: doc.page.width - m,
      });
    doc
      .moveTo(0, m * 7.5)
      .lineTo(doc.page.width, m * 7.5)
      .stroke();

    doc.fontSize(10);
    doc
      .moveTo(0, m * 9)
      .lineTo(doc.page.width / 2.5, m * 9)
      .stroke();
    doc.text('Customer Details', 0, m * 8, {
      align: 'center',
      width: doc.page.width / 2.5,
    });

    doc
      .text(tableData.customerInfo.name.label, m / 2, m * 9.5, { width: m * 3 })
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
      .text(tableData.customerInfo.name.value, m * 4, m * 9.5)
      .moveDown(0.5);

    doc.text(tableData.customerInfo.address.value).moveDown(0.5);
    doc.text('+91 ' + tableData.customerInfo.phone.value).moveDown(0.5);
    doc.text(tableData.customerInfo.gst.value).moveDown(0.5);
    doc.text(tableData.customerInfo.placeOfSupply.value).moveDown(0.5);

    doc
      .moveTo(doc.page.width / 2.5, m * 7.5)
      .lineTo(doc.page.width / 2.5, m * 15.5)
      .stroke();

    doc
      .text(
        tableData.invoiceDetails.invoice.label,
        doc.page.width / 2.5 + m / 2,
        m * 8,
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
        m * 8,
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
        m * 8,
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
        m * 8,
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

    doc
      .moveTo(0, m * 15.5)
      .lineTo(doc.page.width, m * 15.5)
      .stroke();
    doc
      .moveTo(0, m * 16.5)
      .lineTo(doc.page.width, m * 16.5)
      .stroke();

    doc.rect(0, m * 16.5, doc.page.width, m * 2).fillAndStroke('#ddd', 'black');
    doc.font('Helvetica-Bold').fill('black').fontSize(8);

    let th = doc.page.height - 250;
    let w = 20;
    let tableStartPoint = m * 19;
    const slWidth = 20;
    doc.text('SL No.', m / 2, m * 17, { align: 'center', width: slWidth });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th)
      .stroke();

    const nameWidth = 240;
    let p = w;
    w = p + nameWidth;
    doc.text('Name of Product/Service', p - m / 2, m * 17.25, {
      align: 'center',
      width: w,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th)
      .stroke();

    const hsnWidth = 60;
    p = w;
    w = p + hsnWidth;
    doc.text('HSN/SAC', p + m / 2, m * 17.25, {
      align: 'center',
      width: hsnWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th + m)
      .stroke();

    const qtyWidth = 40;
    p = w;
    w = p + qtyWidth;
    doc.text('Qty', p + m / 2, m * 17.25, {
      align: 'center',
      width: qtyWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th + m)
      .stroke();

    const rateWidth = 40;
    p = w;
    w = p + rateWidth;
    doc.text('Rate', p + m / 2, m * 17.25, {
      align: 'center',
      width: rateWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th + m)
      .stroke();

    const taxableWidth = 60;
    p = w;
    w = p + taxableWidth;
    doc.text('Taxable value', p + m / 2, m * 17.25, {
      align: 'center',
      width: taxableWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th + m)
      .stroke();

    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 17.5)
      .lineTo(w + m / 2 + 65, m * 17.5)
      .stroke();

    const taxWidth = 25;
    p = w;
    w = p + taxWidth;
    doc.text('%', p + m / 2, m * 17.75, {
      align: 'center',
      width: taxWidth,
    });
    doc.text('IGST', p + m / 2, m * 16.85, {
      align: 'center',
      width: 65,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 17.5)
      .lineTo(w + m / 2, th + m)
      .stroke();

    const amountWidth = 40;
    p = w;
    w = p + amountWidth;
    doc.text('Amount', p + m / 2, m * 17.75, {
      align: 'center',
      width: amountWidth,
    });
    doc
      .strokeColor('black')
      .moveTo(w + m / 2, m * 16.5)
      .lineTo(w + m / 2, th + m)
      .stroke();

    const totalWidth = doc.page.width - w;
    doc.text('Total', w + m / 2, m * 17.25, {
      align: 'center',
      width: totalWidth,
    });

    // ######## Table values ########
    tableData.products.forEach((item, i) => {
      let ls = m / 2;
      doc.font('Helvetica');
      doc.text(item.slNo, ls, tableStartPoint, {
        align: 'center',
        width: slWidth,
      });
      ls += slWidth;
      doc.font('Helvetica-Bold');
      doc.text(item.name, ls + 8, tableStartPoint, {
        width: nameWidth,
      });
      ls += nameWidth;
      doc.font('Helvetica');
      doc.text(item.HSN, ls, tableStartPoint, {
        align: 'center',
        width: hsnWidth,
      });
      ls += hsnWidth;
      doc.text(`${item.qty} ${item.unit}`, ls, tableStartPoint, {
        align: 'center',
        width: qtyWidth,
      });
      ls += qtyWidth;
      doc.text(item.rate.toFixed(2), ls, tableStartPoint, {
        align: 'center',
        width: rateWidth,
      });
      ls += rateWidth;
      doc.text(item.taxable.toFixed(2), ls, tableStartPoint, {
        align: 'center',
        width: taxableWidth,
      });
      ls += taxableWidth;
      doc.text(item.tax, ls, tableStartPoint, {
        align: 'center',
        width: taxWidth,
      });
      ls += taxWidth;
      doc.text(item.amount.toFixed(2), ls, tableStartPoint, {
        align: 'center',
        width: amountWidth,
      });
      ls += amountWidth;
      doc.text(item.total.toFixed(2), ls, tableStartPoint, {
        align: 'center',
        width: totalWidth,
      });
      if (item.desc) {
        doc.fillColor('#666').text(item.desc, m * 1.75, tableStartPoint + 8, {
          width: nameWidth,
          lineBreak: true,
        });
      }
      const height = doc.heightOfString(item.desc ? item.desc : item.name, {
        width: nameWidth,
      });
      doc.fillColor('black');
      tableStartPoint += height + 10;
      doc.font('Helvetica-Bold');
    });
    // ##############################

    doc
      .moveTo(0, m * 18.5)
      .lineTo(doc.page.width, m * 18.5)
      .stroke();

    doc.moveTo(0, th).lineTo(doc.page.width, th).stroke();
    doc
      .moveTo(0, th + m)
      .lineTo(doc.page.width, th + m)
      .stroke();

    w = 0;
    const btWidth = slWidth + nameWidth;
    doc.fontSize(12).text('Total', w, th + 8, {
      align: 'right',
      width: btWidth,
    });
    doc
      .moveTo(btWidth + m / 2, th)
      .lineTo(btWidth + m / 2, th + m)
      .stroke();

    w += btWidth + hsnWidth;
    doc.text('2.0', w, th + 8, {
      align: 'center',
      width: qtyWidth,
    });
    w += qtyWidth;
    doc.text('1150', w, th + 8, {
      align: 'right',
      width: rateWidth,
    });
    w += rateWidth;
    doc.text('1150', w, th + 8, {
      align: 'right',
      width: taxableWidth,
    });

    w += taxableWidth + taxWidth;
    doc.text('1150', w, th + 8, {
      align: 'right',
      width: amountWidth,
    });
    w += m;
    doc.text('1150', w, th + 8, {
      align: 'right',
      width: totalWidth,
    });

    let dw = doc.page.width / 1.75;
    let rsp = doc.page.width / 1.75;
    let rw = doc.page.width - rsp - m;
    th = th + m * 2;
    let fh = th + 6;
    let gth = th - m;
    doc.moveTo(0, th).lineTo(dw, th).stroke();
    th = th + m;
    doc.moveTo(0, th).lineTo(dw, th).stroke();
    doc
      .fontSize(8)
      .text('Total in words', m / 2, fh, {
        align: 'center',
        width: dw,
      })
      .moveDown(1.5);
    th = th + m;
    doc.moveTo(0, th).lineTo(dw, th).stroke();
    doc
      .font('Helvetica')
      .text('ONE THOUSAND TWO HUNDRED AND FIFTY', m / 2, th - m / 2, {
        align: 'center',
        width: dw,
      });
    th = th + m / 1.85;
    fh = th - 12;
    doc.moveTo(0, th).lineTo(dw, th).stroke();
    doc
      .font('Helvetica-Bold')
      .text('Bank Details', m / 2, fh + 4, {
        align: 'center',
        width: dw,
      })
      .moveDown(1.5);

    fh = fh + m;
    doc.text('Bank Name', m / 2, fh).moveDown(0.5);
    doc.text('Branch Name').moveDown(0.5);
    doc.text('Bank Account Number').moveDown(0.5);
    doc.text('Bank Branch IFSC').moveDown(0.5);

    doc.text(tableData.companyInfo.bankDetails.name, m * 7, fh).moveDown(0.5);
    doc.text(tableData.companyInfo.bankDetails.branch).moveDown(0.5);
    doc.text(tableData.companyInfo.bankDetails.accNo).moveDown(0.5);
    doc.text(tableData.companyInfo.bankDetails.ifsc).moveDown(0.5);

    th = th + m * 3;
    doc.moveTo(0, th).lineTo(dw, th).stroke();
    th = th + m / 1.85;
    fh = fh + m * 2.75;
    doc.moveTo(0, th).lineTo(dw, th).stroke();
    doc
      .font('Helvetica-Bold')
      .text('Terms and Conditions', m / 2, fh, {
        align: 'center',
        width: dw,
      })
      .moveDown();

    doc.font('Helvetica').fillColor('#333');
    doc.text('1. Subject to Kolkata jurisdiction').moveDown(0.6);
    doc
      .text('2. Our responsibility ceases as soon as you leave our premises.')
      .moveDown(0.6);
    doc.text('3. Goods are sold are not returnable').moveDown(0.6);
    doc.text('4. Delivery once made will not be taken back').moveDown(0.6);

    th = gth + m;

    doc.moveTo(rsp, th).lineTo(rsp, doc.page.height).stroke();
    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .text('Taxable Amount', rsp + m / 2, th + m / 2);
    doc.text('1250', rsp, th + m / 2, { width: rw, align: 'right' });
    th = th + m;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc.text('Add:IGST', rsp + m / 2, th + m / 2);
    doc.text('103.80', rsp, th + m / 2, { width: rw, align: 'right' });
    th = th + m;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc.text('Total Tax', rsp + m / 2, th + m / 2);
    doc.text('103.80', rsp, th + m / 2, { width: rw, align: 'right' });
    th = th + m;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc.text('Total amount after tax', rsp + m / 2, th + m / 2);
    doc
      .fontSize(14)
      .text('₹ 1258.00', rsp, th + m / 2, { width: rw, align: 'right' });
    th = th + m;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc.fontSize(8).text('(E/O.E)', rsp, th + 6, { width: rw, align: 'right' });
    th = th + m / 1.5;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc.text('GST payable on reverse charge', rsp, th + 4);
    doc.text('N/A', rsp, th + 4, { width: rw, align: 'right' });
    th = th + m / 1.5;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    doc
      .fontSize(7)
      .fillColor('#666')
      .text(
        'This is certified that the particulars given above are true',
        rsp,
        th + 4,
        {
          width: rw,
          align: 'center',
        },
      );
    doc
      .fontSize(12)
      .fillColor('blue')
      .text('For Bengal Fright Tools', rsp, th + 14, {
        width: rw,
        align: 'center',
      });
    th = th + m * 1.5;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();

    th = doc.page.height - m;
    doc.moveTo(rsp, th).lineTo(th, th).stroke();
    doc
      .fontSize(8)
      .fillColor('black')
      .text('Authorized Signatory', rsp, th + 6, {
        width: rw,
        align: 'center',
      });
  }
}
