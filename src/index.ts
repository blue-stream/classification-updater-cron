import { CronJob } from 'cron';
import * as mongoose from 'mongoose';
import { config } from './config';
import { Classification } from './classifications/classification';
import { Pp } from './pps/pp';
import { log } from './utils/logger';

(async () => {
    await mongoose.connect(
        config.db.connectionString,
        { useNewUrlParser: true },
    );
    log('verbose', 'Server', 'Server started');

    const updaterJob = new CronJob(config.cron.taskTimer, async function () {
        log('info', 'Cron', 'Classifications update started');
        await Classification.updateSources();
        await Pp.updatePps();
        log('info', 'Cron', 'Classifications update finished');
    });

    updaterJob.start();
})();
