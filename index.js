"use strict"
const store={
    name:`my shop`,
    address:{
        country:`Ukraine`,
        city:`Kyiv`,
        street:`Haharina ave`,
        houseNumber:13
    }

};
store['clients']={
    NataliiaKulybina:{
        quantity:10,
        bonuses:20,
    },
    OleksiiMedvediev:{
        quantity:11,
        bonuses:21,
    },
    YuriyKruchinin:{
        quantity:12,
        bonuses:22,
    },
    MykolaPrymachok:{
        quantity:13,
        bonuses:23,
    },
    BohdanOnatskiy:{
        quantity:14,
        bonuses:24,
    },
};
console.log(store);
