export const config = {
    db: {
        host: process.env.DB_SERVER || 'localhost',
        name: process.env.DB_NAME || 'blue-stream-video',
        port: +(process.env.DB_PORT || 27017),
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
