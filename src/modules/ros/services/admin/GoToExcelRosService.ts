import xl from 'excel4node';
import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RosRepository from '../../repositories/RosRepository';


class GotoExcelRosService {
  async execute() {

    const wb = new xl.Workbook();

    const rosToExcel = wb.addWorksheet("ROS");

    const data = [ 
      {
        name: 'Abel', 
        email: 'teste@gmail.com', 
        cellphone: '65999010913', 
        name1: 'Abel', 
        name11: 'Abel',
        name12: 'Abel',
        name13: 'Abel',
        name14: 'Abel',
        name15: 'Abel',
        name16: 'Abel',
        name17: 'Abel',
        name18: 'Abel',
        name19: 'Abel',
        name20: 'Abel',
      },
      {
        name: 'Abel', 
        email: 'teste@gmail.com', 
        cellphone: '65999010913', 
        name1: 'Abel', 
        name11: 'Abel',
        name12: 'Abel',
        name13: 'Abel',
        name14: 'Abel',
        name15: 'Abel',
        name16: 'Abel',
        name17: 'Abel',
        name18: 'Abel',
        name19: 'Abel',
        name20: 'Abel',
      },
      {
        name: 'Abel', 
        email: 'teste@gmail.com', 
        cellphone: '65999010913', 
        name1: 'Abel', 
        name11: 'Abel',
        name12: 'Abel',
        name13: 'Abel',
        name14: 'Abel',
        name15: 'Abel',
        name16: 'Abel',
        name17: 'Abel',
        name18: 'Abel',
        name19: 'Abel',
        name20: 'Abel',
      },
    ]

    const headingsColumnNames = [
      "DATA",
      "OBSERVADOR",
      "GESTOR",
      "ÁREA",
      "LOCAL",
      "NATUREZA",
      "OPCAO",
      "DESCRIÇÃO",
      "AÇÃO DE BLOQUEIO/ PROPOSTAS/ SUGESTOES",
      "Parecer do Respónsável pela ação",
      "TRATATIVAS",
      "STATUS",
      "AREA RESPONSAVEL",
      "RESPONSAVEL",
    ];

    let  headingsColumnIndex = 1;

    headingsColumnNames.forEach(heading => {
      rosToExcel.cell(1, headingsColumnIndex++).string(heading)
    });

    let rowIndex = 2;
    data.forEach(record => {
      let columnIndex = 1;
      Object.keys(record).forEach(columnName => {
        rosToExcel.cell(rowIndex, columnIndex++).string(record[columnName])
      });
      rowIndex++;
    });

    wb.write('ros.xlsx');

    return;
  } 
}

export default GotoExcelRosService;
