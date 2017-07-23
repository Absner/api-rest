import { User, IUser } from '../models/user.model';

export class GetAllUserService {
    private query   :   any;

    public init()   :   GetAllUserService {
        return this;
    }

    public executeImpl() :   Promise<IUser[]> {
        let __this  =   this;

        return new  Promise<IUser[]>((resolve_, reject_ ) =>  {
            User.find()
            .exec()
            .then(
                ( data_ : IUser[] ) => resolve_( data_ )
            )
            .catch(
                ( err_ : Error ) => reject_( { name : err_.name, code : 500, message : err_.message } ) 
            )

        })
    }
}