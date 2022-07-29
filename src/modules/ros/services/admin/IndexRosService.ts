import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';
import ZoneRepository from '@modules/zone/repositories/ZoneRepository';
import LocalRepository from '@modules/local/repositories/LocalRepository';
import NatureRepository from '@modules/nature/repositories/NatureRepository';
import ReasonRepository from '@modules/reason/repositories/ReasonRepository';

class IndexRosService {
  async execute() {
    const rosRepository = getCustomRepository(RosRepository);
    const zoneRepository = getCustomRepository(ZoneRepository);
    const localRepository = getCustomRepository(LocalRepository);
    const natureRepository = getCustomRepository(NatureRepository);
    const reasonRepository = getCustomRepository(ReasonRepository);

    const rosData = await rosRepository.findAll();
    const zoneData = await zoneRepository.findAll();
    const localData = await localRepository.findAll();
    const natureData = await natureRepository.findAll();
    const reasonData = await reasonRepository.findAll();

    const ros = rosData.map(ros => {
      return {
        ...ros,
        zone_name: zoneData.find(zone => zone.id === ros.zone_id).name,
        local_name: localData.find(local => local.id === ros.local_id).name,
        nature_name: natureData.find(nature => nature.id === ros.nature_id).name,
        reason_name: reasonData.find(reason => reason.id === ros.reason_id).name,
      }
    })

    return ros;
  }

}

export default IndexRosService;
