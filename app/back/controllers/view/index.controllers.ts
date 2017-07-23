import { Router } from "express";
import { mongoose } from '../../config/mongoose.config';

var router = Router( { mergeParams : true } );

router.get('/', function(req, res, next) {
    //res.render('index', {});
    res.send("Hola Mundos");
});

module.exports = router;