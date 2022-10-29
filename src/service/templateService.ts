import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';

import { Template } from '../entity/template';
@Provide()
export class TemplateService {
  @InjectEntityModel(Template)
  templateModel: Repository<Template>;

  async getTemplate() {
    const template = await this.templateModel.find();
    return template;
  }
}
