// Nested Object 

const ashik = {
    age : 22,
    height : '5.5 inch',
    weight : '55 Kg',
    hobby  :  {
        anime: 'dbz',
        books: ['dopamine deDox', 'Psycology Money', 'Rich Dad Poor Dad'],
        money: '5 lac Cash',
        rich: 2026,
    },
    relation: 'After Marriage', 

}
console.log(ashik);
console.log(ashik.hobby.books[2]);

ashik.hobby.money = '10 lac';
console.log(ashik.hobby.money);