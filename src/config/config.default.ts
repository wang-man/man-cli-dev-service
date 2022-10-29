import { MidwayConfig } from '@midwayjs/core';
import { Template } from '../entity/template'
export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: 'rm-uf696em52ee34w6qybo.mysql.rds.aliyuncs.com',
        port: 3306,
        username: 'root',
        password: 'hello0123-',   // 线上数据库密码
        database: 'man_cli_dev',
        synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,
        entities: [Template],
      }
    }
  },
} as MidwayConfig;
