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

    // criar folha 
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(`${titleFolha}`);

    // Add new row
    let titleRow = worksheet.addRow([titleFolha]);

    //Formata o titulo da linha Comic Sans MS 
    titleRow.font = { name: 'Comic Sans MS', family: 10, size: 12, bold: true };

    // pula 1 linha
    worksheet.addRow([]);

    //Adiciona data atual da geracao
    const date = new Date().toISOString().substring(0, 10);
    worksheet.addRow(['Date : ' + date]);

    // adiciona os headers 
    let headerRow = worksheet.addRow(header);

    // Formata os Headers
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.alignment = { horizontal: 'justify' };
      cell.border = {
        top: { style: 'thin' }, left: { style: 'thin' },
        bottom: { style: 'thin' }, right: { style: 'thin' }
      };
    });

    // adiciona os itens da lista
    dados.forEach(item => {
      const line = [item.id, item.model, item.color, item.price];
      worksheet.addRows([line]);
    });

    // formata altura das celulas do documento inteiro
    worksheet.properties.defaultRowHeight = 30;

    //gera o buffer excel no navegador do cliente
    workbook.xlsx.writeBuffer().then((items) => {
      let blob = new Blob([items],
        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, `${titleFolha}.xlsx`);
    }).catch((error) => {
      throw error;
    });
  }
}
