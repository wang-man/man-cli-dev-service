import { Configuration } from '@midwayjs/decorator';
import * as orm from '@midwayjs/typeorm';
import { ILifeCycle } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import * as defaultConfig from './config/config.default';
import * as prodConfig from './config/config.prod';

@Configuration({
  imports: [faas, orm],
  importConfigs: [
    {
      default: defaultConfig,
      prod: prodConfig,
    },
  ],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady() { }
}
