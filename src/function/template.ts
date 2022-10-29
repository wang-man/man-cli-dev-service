import {
  Provide,
  Inject,
  Get,
  Controller
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { TemplateService } from '../service/templateService';

@Provide()
@Controller('/')
export class CliTemplateService {
  @Inject()
  ctx: Context;
  @Inject()
  templateService: TemplateService;

  @Get('/getTemplates')
  async getTemplate() {
    const result = await this.templateService.getTemplate();
    return result
  }
}
