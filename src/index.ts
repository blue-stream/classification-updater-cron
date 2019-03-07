import { CronJob } from 'cron';
import * as mongoose from 'mongoose';
import { config } from './config';
import { Classification } from './classifications/classification';
import { Pp } from './pps/pp';

(async () => {
    await mongoose.connect(
        config.db.connectionString,
        { useNewUrlParser: true },
    );

    const updaterJob = new CronJob(config.cron.taskTimer, async function () {
        console.log(`Classifications update @ ${new Date()}`);
        await Classification.updateSources();
        await Pp.updatePps();
    });

    updaterJob.start();
})();
