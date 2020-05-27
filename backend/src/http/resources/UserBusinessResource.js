class UserBusinessResource {

    toArray(userBusiness) {
        return {
            id: userBusiness.business.id,
            name: userBusiness.business.name,
            image: userBusiness.business.image,
            type: userBusiness.business.type,
            initialCost: userBusiness.business.initialCost,
            coefficient: userBusiness.business.coefficient,
            initialTime: userBusiness.business.initialTime,
            initialRevenue: userBusiness.business.initialRevenue,
            upgradeCost: userBusiness.upgradeCost,
            upgradeTime: userBusiness.upgradeTime,
            upgradeCountGoal: userBusiness.upgradeCountGoal,
            managerId: userBusiness.managerId,
            hasManager: !!userBusiness.managerId,
        };
    }

    collection($collection) {
        return $collection.map(element => {
            return this.toArray(element.get());
        })
    }
}

module.exports = new UserBusinessResource();
