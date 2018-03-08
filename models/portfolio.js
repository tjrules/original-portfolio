const db = require('../db/config');
const Portfolio = {};

Portfolio.findAll = () => {
  return db.query('SELECT * FROM portfolio');
};
//
// Portfolio.findById = (id) => {
//   console.log(db);
//   return db.oneOrNone(`SELECT * FROM portfolio WHERE id = $1`, [id])
// }
//
// Portfolio.update = (portfolio, id) => {
//   console.log();
//   return db.none(
//     `
//     UPDATE movies SET
//     title = $1,
//     description = $2
//     WHERE id = $3
//     `,
//     [portfolio.title, portfolio.description, id]
//   )
// }
//
module.exports = Portfolio;
