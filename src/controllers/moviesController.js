const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList', {movies
                 })
        })
        .catch(error => console.log(error))
    },
    new : (req,res) => {
        db.Movie.findAll({
            order : [
                ['title']
            ]
        }).then(movies => res.render('newestMovies', {
            movies
        })) 
        
    },
    recommended : (req,res) => {
        db.Movie.findAll({
            limit : 5,
            order : [ 
                ['release_date', 'DESC']
            ]
        })
        .then(movies => res.render('recommendedMovies', {
            movies  }))
 },
    detail : (req,res) => { 
        db.Movie.findByPk(req.params.id)
        .then(movie => res.render('moviesDetail', {
            movie
        }))
        .catch(error => console.log(error))
    }
}
