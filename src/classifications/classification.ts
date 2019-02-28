import { config } from '../config';
import { ClassificationHttpClient } from './classification-http.client';
import { ClassificationSourceModel } from './classification-source.model';
import { IClassificationSource } from './classification-source.interface';

export class Classification {
    private static fetchSources() {
        return ClassificationHttpClient.get(config.classifications.service.sourcesEndpoint);
    }

    static async updateSources() {
        const sources = await Classification.fetchSources().catch(e => []);
        const sourceUpdates: IClassificationSource[] = sources.map((source: any) => {
            return {
                _id: source[config.classifications.properties.sourceId],
                classificationId: source[config.classifications.properties.classificationId],
                layer: source[config.classifications.properties.classificationLayer],
                name: source[config.classifications.properties.sourceName],
            };
        });

        if (sourceUpdates && sourceUpdates.length > 0) {
            const bulk = ClassificationSourceModel.collection.initializeUnorderedBulkOp();

            sourceUpdates.forEach((source) => {
                bulk.find({ _id: source._id }).upsert().updateOne(source);
            });

            await bulk.execute();
        }
    }
}
