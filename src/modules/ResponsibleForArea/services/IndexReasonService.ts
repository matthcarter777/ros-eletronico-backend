import NatureRepository from '@modules/nature/repositories/NatureRepository';
import { getCustomRepository } from 'typeorm';

import ReasonRepository from '../repositories/ReasonRepository';

class IndexReasonService {
  async execute() {
    const reasonRepository = getCustomRepository(ReasonRepository);
    const natureRepository = getCustomRepository(NatureRepository);

    const reason = await reasonRepository.findAll();
    const nature = await natureRepository.findAll();

    const reasonWithNature = reason.map((reason) => {
      return { 
        id: reason.id,
        name: reason.name,
        nature_id : reason.nature_id,
        nature_name: nature.find(nature => nature.id === reason.nature_id).name
      }
    });

    return reasonWithNature;
  }
}

export default IndexReasonService;
