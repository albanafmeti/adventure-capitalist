const Controller = require('./Controller');
const BusinessRepository = require('../../repositories/BusinessRepository');
const BusinessResource = require('../resources/BusinessResource');
const UserBusinessResource = require('../resources/UserBusinessResource');
const ManagerResource = require('../resources/ManagerResource');

class BusinessController extends Controller {

    async getBusinesses(request, response) {

        const mine = request.query.mine;
        const userLogged = request.user;

        const businesses = await BusinessRepository.getBusinesses(mine ? userLogged : null);

        if (businesses) {
            return super.responseService(response).withSuccess("Businesses fetched successfully.", {
                businesses: mine ? UserBusinessResource.collection(businesses) : BusinessResource.collection(businesses)
            });
        }

        return super.responseService(response).withError("Businesses could not be fetched.");
    }

    async getManagers(request, response) {

        const managers = await BusinessRepository.getManagers();

        if (managers) {
            return super.responseService(response).withSuccess("Managers fetched successfully.", {
                managers: ManagerResource.collection(managers)
            });

        }

        return super.responseService(response).withError("Managers could not be fetched.");
    }
}

module.exports = new BusinessController();
