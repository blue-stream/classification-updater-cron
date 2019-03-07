export const config = {
    db: {
        connectionString: `mongodb://${process.env.DB_SERVERS || 'localhost:27017'}/${process.env.CLASSIFICATION_UPDATER_DB_NAME || 'blue-stream-video'}${process.env.DB_REPLICA_NAME ? `?replicaSet=${process.env.DB_REPLICA_NAME}` : ''}`,
    },
    cron: {
        // [seconds] [minutes] [hours] [day_number] [months] [day_of_week]
        taskTimer: process.env.TASK_TIMER || '0 0 0 */1 * *',
    },
    classifications: {
        token: process.env.CLASSIFICATIONS_API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.B3bRU1r3QAooc974CfHtGwQUYIUjEV4wywoO0bvOO0E',
        service: {
            baseUrl: process.env.CLASSIFICATIONS_API || 'http://localhost:5006/classificationservice/api',
            sourcesEndpoint: process.env.CLASSIFICATIONS_API_SOURCES_ENDPOINT || '/sources',
            ppsEndpoint: process.env.CLASSIFICATIONS_API_PPS_ENDPOINT || '/pps',
        },
        properties: {
            classificationId: process.env.PROPERTY_CLASSIFICATION_ID || 'LinkedClassificationId',
            classificationLayer: process.env.PROPERTY_LAYER || 'Layer',
            sourceId: process.env.PROPERTY_SOURCE_ID || 'id',
            sourceName: process.env.PROPERTY_SOURCE_NAME || 'name',
            ppsId: process.env.PROPERTY_PPS_ID || 'id',
            ppsName: process.env.PROPERTY_PPS_NAME || 'name',
            ppsType: process.env.PROPERTY_PPS_TYPE || 'type',
        },
    },
};
