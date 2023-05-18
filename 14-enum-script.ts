// ENUM

enum TypeOfResponse { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIResponse<T> {
    status: number;
    // response any type hoite pare, tai enum declare kore newa hoice
    type: TypeOfResponse;
    data: T;
}

const response1: APIResponse<object> = {
    status: 200,
    type: TypeOfResponse.SUCCESS,   // any type of enum
    data: {
        name: 'jbfdjb',
        something: 'anything'
    }
}

console.log(response1);