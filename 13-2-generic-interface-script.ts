// generic <- <T>

interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

// amra kin2 janina response er data ki type ashbe! so, amra jodi generic way te receive krte chai, agey interface er name er sheshe "<T>" dbo; tarpor ei object theke response dekhe generic dbo
const response1: APIResponse<object> = {
    // eikhane response object tai object lekhci, response dekhe eikhane type/ generic likhbo
    status: 200,
    type: 'don\'t know',
    data: {
        name: 'jbfdjb',
        something: 'anything'
    }
}