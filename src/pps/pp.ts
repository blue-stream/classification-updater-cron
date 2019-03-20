import { HttpClient } from '../utils/http.client';
import { config } from '../config';
import { IPp } from './pp.interface';
import { PpModel } from './pp.model';
import { log } from '../utils/logger';

export class Pp {
    private static fetchPps() {
        return HttpClient.get(config.classifications.service.ppsEndpoint);
    }

    static async updatePps() {
        const pps = await Pp.fetchPps().catch((error) => {
            log('error', 'Fetch Error (updatePps)', 'Failed to fetch pps', undefined, undefined, { error });
            return [];
        });

        const ppUpdates: IPp[] = pps.map((pp: any) => {
            return {
                _id: pp[config.classifications.properties.ppsId],
                name: pp[config.classifications.properties.ppsName],
                type: pp[config.classifications.properties.ppsType],
            };
        });

        if (ppUpdates && ppUpdates.length > 0) {
            const bulk = PpModel.collection.initializeUnorderedBulkOp();

            ppUpdates.forEach((pp) => {
                bulk.find({ _id: pp._id }).upsert().updateOne(pp);
            });

            await bulk.execute();
        }
    }
}
