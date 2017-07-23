import { Express, Request, Response, Router } from "express";
import { User, IUser }  from '../../../models/user.model';
import { GetAllUserService } from '../../../services/get-all.user.service';
import { AddUserService }   from '../../../services/add.user.service';

var router   =   Router();


router.get('/', function(req, res, next){
    let _action :   GetAllUserService   =   new GetAllUserService();

    _action.init()
    .executeImpl()
    .then(
        (data_  :   IUser[])    =>  {
            res.status(200)
            .json({
                code: 200,
                message: 'data extraida',
                content: data_
            })
            return data_;
        }
    )
    .catch(
        (error : any)   =>  {
            res.status(400)
            .json({
                code: 400,
                message: 'nada bien',
                content: error
            })
        }
    );
});



router.post('/', function(req, res, next){
    let  user_data  : IUser =  req.body;  
    let _action :   AddUserService  =   new AddUserService();
    _action.init(user_data)
    _action.executeImpl()
    .then(
        ( data_ : IUser )   =>  {
            res.status(200)
            .json({
                code : 200,
                message : 'data almacenada',
                content : data_
            });
            return  data_
        }
    )
    .catch(
        ( error : any ) =>  {
            res.status(400)
            .json({
                code : 400,
                message : 'error al guardar',
                content : ''
            })
        }
    )

});



module.exports = router;