import xl from 'excel4node';
import { getCustomRepository } from 'typeorm';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { AppError } from '@shared/errors/AppError';

import RosRepository from '../../repositories/RosRepository';
import ZoneRepository from '@modules/zone/repositories/ZoneRepository';
import LocalRepository from '@modules/local/repositories/LocalRepository';
import NatureRepository from '@modules/nature/repositories/NatureRepository';
import ReasonRepository from '@modules/reason/repositories/ReasonRepository';
import ObserverRepository from '@modules/observer/repositories/ObserverRepository';
import UserRepository from '@modules/users/repositories/UserRepository';
import ResponsibleAreaRepository from '@modules/responsibleArea/repositories/ResponsibleAreaRepository';


class GotoExcelRosService {
  async execute() {

    const rosRepository = getCustomRepository(RosRepository);
    const zoneRepository = getCustomRepository(ZoneRepository);
    const localRepository = getCustomRepository(LocalRepository);
    const natureRepository = getCustomRepository(NatureRepository);
    const reasonRepository = getCustomRepository(ReasonRepository);
    const observerRepository = getCustomRepository(ObserverRepository);
    const userRepository = getCustomRepository(UserRepository);
    const responsibleAreaRepository = getCustomRepository(ResponsibleAreaRepository);

    const wb = new xl.Workbook();
    const rosToExcel = wb.addWorksheet("ROS");

    const rosData = await rosRepository.findAll();
    const zoneData = await zoneRepository.findAll();
    const localData = await localRepository.findAll();
    const natureData = await natureRepository.findAll();
    const reasonData = await reasonRepository.findAll();
    const observerData = await observerRepository.findAll();
    const usersData     = await userRepository.findAll();
    const responsibleAreaData = await responsibleAreaRepository.findAll();

    const data = rosData.map(ros => {
      return {
        data: format(new Date(ros?.date), "dd-MM-yyyy HH:mm", { locale: pt }),
        month: format(new Date(ros?.date), "MMM", { locale: pt }),
        year: format(new Date(ros?.date), "yyyy", { locale: pt }),
        observer: observerData 
        ? 'Anônimo'
        : observerData.find(observer => observer.id === ros.observer_id).name,
        area_name: zoneData.find(zone => zone.id === ros.zone_id).name,
        local_name: localData.find(local => local.id === ros.local_id).name,
        nature_name: natureData.find(nature => nature.id === ros.nature_id).name,
        reason_name: reasonData.find(reason => reason.id === ros.reason_id).name,
        description: ros.description,
        suggestion: ros.suggestion,
        negotions: ros.negotiations,
        status: ros.status,
        responsible_area: responsibleAreaData.find(responsible => responsible.id === ros.responsible_area_id).name,
        responsible: usersData.find(responsible => responsible.id === ros.responsible_id).name
      }
    });

    const headingsColumnNames = [
      "DATA",
      "MÊS",
      "ANO",
      "OBSERVADOR",
      "ÁREA DA OCORRENCIA",
      "LOCAL DA OCORRÊNCIA",
      "REFERENTE A",
      "OPÇÕES DE OCORRÊNCIA",
      "DESCRIÇÃO DA OCORRÊNCIA",
      "AÇÃO DE BLOQUEIO/ PROPOSTAS/ SUGESTOES",
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

    wb.write(`ros.xlsx`);
  } 
}

export default GotoExcelRosService;
