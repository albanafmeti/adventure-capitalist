import UserRepository from './UserRepository';
import BusinessRepository from './BusinessRepository';

export default (context) => {
    return {
        userRepo: UserRepository(context),
        businessRepo: BusinessRepository(context),
    }
}
