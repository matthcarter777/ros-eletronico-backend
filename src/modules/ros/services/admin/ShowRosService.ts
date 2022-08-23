import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';
import ZoneRepository from '@modules/zone/repositories/ZoneRepository';
import LocalRepository from '@modules/local/repositories/LocalRepository';
import NatureRepository from '@modules/nature/repositories/NatureRepository';
import ReasonRepository from '@modules/reason/repositories/ReasonRepository';
import ObserverRepository from '@modules/observer/repositories/ObserverRepository';
import CompanyRepository from '@modules/company/repositories/CompanyRepository';
import ManagerRepository from '@modules/manager/repositories/ManagerRepository';
import ShiftRepository from '@modules/shift/repositories/ShiftRepository';
import ResponsibleRepository from '@modules/responsible/repositories/ResponsibleRepository';
import ResponsibleAreaRepository from '@modules/responsibleArea/repositories/ResponsibleAreaRepository';

class ShowRosService {
  async execute(id: string) {
    const rosRepository = getCustomRepository(RosRepository);
    const zoneRepository = getCustomRepository(ZoneRepository);
    const localRepository = getCustomRepository(LocalRepository);
    const natureRepository = getCustomRepository(NatureRepository);
    const reasonRepository = getCustomRepository(ReasonRepository);
    const observerRepository = getCustomRepository(ObserverRepository);
    const companyRepository = getCustomRepository(CompanyRepository);
    const managerRepository = getCustomRepository(ManagerRepository);
    const shiftRepository = getCustomRepository(ShiftRepository);
    const responsibleRepository = getCustomRepository(ResponsibleRepository);
    const responsibleAreaRepository = getCustomRepository(ResponsibleAreaRepository);


    const rosData    = await rosRepository.findById(id);
    const zoneData   = await zoneRepository.findAll();
    const localData  = await localRepository.findAll();
    const natureData = await natureRepository.findAll();
    const reasonData = await reasonRepository.findAll();


    
    const companyData = await companyRepository.findAll();
    const managerData = await managerRepository.findAll();
    const shiftData   = await shiftRepository.findAll();
    const responsibleData     = await responsibleRepository.findAll();
    const responsibleAreaData = await responsibleAreaRepository.findAll();
    
    let observerData = [];
    
    if (rosData.observer_id) {
      observerData  = await observerRepository.findAll();
    }

    return {
      ...rosData,
      observer_name: rosData.observer_id ?
        observerData.find(observer => observer.id === rosData.observer_id).name : 'Anônimo',
      zone_name: zoneData.find(zone => zone.id === rosData.zone_id).name,
      local_name: localData.find(local => local.id === rosData.local_id).name,
      nature_name: natureData.find(nature => nature.id === rosData.nature_id).name,
      reason_name: reasonData.find(reason => reason.id === rosData.reason_id).name,
      company_name: rosData.company_id ? 
        companyData.find(company => company.id === rosData.company_id).name : '',
      manager_name: rosData.manager_id ? 
        managerData.find(manager => manager.id === rosData.manager_id).name : '',
      shift_name: rosData.shift_id ?
        shiftData.find(shift => shift.id === rosData.shift_id).name : '',
      responsible_name: rosData.responsible_id ? 
        responsibleData.find(responsible => responsible.id === rosData.responsible_id).name : '',
      responsible_area_name: rosData.responsible_area_id ?
        responsibleAreaData.find(responsibleArea => responsibleArea.id === rosData.responsible_area_id).name : '',
    };
  }

}

export default ShowRosService;
