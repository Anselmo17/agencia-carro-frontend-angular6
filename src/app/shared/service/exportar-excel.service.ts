import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class ExportarExcelService {

  constructor() { }

  generateExcel(dados, titleFolha) {

    const title = 'Carros';
    const header = ['Id', 'Modelo', 'Cor', 'Preço'];

    console.log(dados);

    // criar folha 
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(`${titleFolha}`);

    // Add new row
    let titleRow = worksheet.addRow([titleFolha]);

    //Formata o titulo da linha 
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };
    // Blank Row
    worksheet.addRow([]);
    //Adiciona data atual da geracao
    let subTitleRow = worksheet.addRow(['Date : ' + new Date().toDateString()]);

    // adiciona os headers 
    //Add Header Row
    let headerRow = worksheet.addRow(header);

    // Formata os Headers
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });

    // adiciona os itens da lista
    dados.forEach(item => {
      const line = [item.id, item.model, item.color, item.price];
      worksheet.addRows([line]);
    });

    //gera o buffer excel no navegador cliente
    workbook.xlsx.writeBuffer().then((items) => {
      const a = items.toString();
      let blob = new Blob([items],
        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, `${titleFolha}.xlsx`);
    }).catch((error) => {
      throw error;
    });
  }
}
