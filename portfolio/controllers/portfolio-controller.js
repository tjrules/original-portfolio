// const Portfolio = ('../models/portfolio');
// const portfolioController = {};

module.exports = {
  index: (req,res) => {
    res.render('portfolio/index')
  }
};


// portfolioController.index = (req,res) => {
//   Portfolio.findAll()
//     .then(portfolio => {
//       console.log('working');
//       res.render('portfolio/index', {
//         message:'ok',
//         portfolio: portfolio,
//       })
//     })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//
// };

// portfolioController.index = (req, res) => {
//   Portfolio.findAll()
//     .then(portfolio => {
//       res.render('portfolio/index', { portfolio: portfolio });
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// };

// portfolioController.show = (req,res) => {
//   Portfolio.findById(req.params.id)
//     .then(portfolio => {
//       res.render('portfolio/show', {
//         portfolio:portfolio,
//       })
//     }).catch(err => {
//       res.status(400).json(err)
//     })
// }

// portfolioController.edit = (req,res) => {
//   Portfolio.findById(req.params.id)
//   .then(portfolio => {
//     res.render('portfolio/edit', {
//       portfolio:portfolio
//     })
//   }).catch(err => {
//     res.status(400).json(err)
//   })
// }
//
// portfolioController.update = (req,res) => {
//   Portfolio.update({
//     title: req.body.title,
//     description: req.body.description,
//   }, req.params.id)
//   .then(() => {
//     res.redirect(`/portfolio/${req.params.id}`)
//   }).catch(err => {
//     res.status(400).json(err)
//   })
// }


// module.exports = portfolioController;
