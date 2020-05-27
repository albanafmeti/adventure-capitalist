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
            upgradeCount: userBusiness.upgradeCount,
            upgradeCountGoal: userBusiness.upgradeCountGoal,
            managerId: userBusiness.managerId,
            hasManager: !!userBusiness.managerId,

            currentRevenue: userBusiness.upgradeCount * userBusiness.business.initialRevenue,
            currentTime: userBusiness.upgradeTime ? userBusiness.upgradeTime : userBusiness.business.initialTime
        };
    }

    collection($collection) {
        return $collection.map(element => {
            return this.toArray(element.get());
        })
    }
}

module.exports = new UserBusinessResource();
