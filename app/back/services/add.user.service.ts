import { User, IUser } from '../models/user.model';

export class AddUserService {
    private User    :   IUser;

    public init(user_   :   IUser): AddUserService{
        this.User   =   user_;
        console.log("recibiendo data: ",this.User);
        return this;
    }

    public executeImpl():   Promise<IUser>{
        let __this  =   this;

        return  new Promise<IUser>( ( resolve_, reject_ )   =>  {
            User.create(
                __this.User
            ).then(
                ( data_ : IUser )   =>  {
                    resolve_(data_);
                }
            )
            .catch(
                ( error : any ) =>  {
                    reject_({
                        code:400,
                        message: error
                    })
                }
            )
        });
    }
}