// generic <- <T>
/* const addId = <T>(obj: T) => {
    let id = Math.floor( Math.random() * 100 );
    return { ...obj, id };
} */

// 1ta problem, say object er jaygay string diye dle, auto string niye nibe!
// let user = 'Risal';

// BUT it MUST BE AVOIDED, to do so, extend the generin

/* const addId = <T extends object>(obj: T) => {
    let id = Math.floor( Math.random() * 100 );
    return { ...obj, id };
} */

type props = {
    name: string;
    age: number;
}

const addId = <T extends props>(obj: T) => {
    let id = Math.floor( Math.random() * 100 );
    return { ...obj, id };
}

// let user = 'Risal';

// addId(user);    // now it throws error! uncomment & hover over the function

let user = addId({
    name: 'Sakib',
    age: 38,
    country: 'Bangladesh'
});

// **** props a suhdu name r age ase, but amra ei object a jehetu vaiable akare number o dc tai error dey nai, mane type alias a ja dc ta thaklei hoilo, extra thakle bpr na

// user.    // "user." dlei props gula vs_code er suggestions a ashbe

addId(user);