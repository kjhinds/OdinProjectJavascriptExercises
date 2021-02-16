// const getTheTitles = function(books) {
//     let titles = [];
//     books.forEach(book => {
//         titles.push(book.title);
//     });
//     return titles;
// }

const getTheTitles = function(books) {
    return books.map(book => book.title);
}

module.exports = getTheTitles;
