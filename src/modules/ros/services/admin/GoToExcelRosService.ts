import xl from 'excel4node';
import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RosRepository from '../../repositories/RosRepository';


class GotoExcelRosService {
  async execute() {

    const wb = new xl.Workbook();

    const rosToExcel = wb.addWorksheet("ROS");

    const data = [ 
      {name: 'Abel', email: 'teste@gmail.com', cellphone: '65999010913'},
      {name: 'Marcos', email: 'marcos@gmail.com', cellphone: '65999010913'}
    ]

    const headingsColumnNames = [
      "name",
      "email",
      "celular"
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
