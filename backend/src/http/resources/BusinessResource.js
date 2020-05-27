class BusinessResource {

    toArray(business) {
        return {
            id: business.id,
            name: business.name,
            image: business.image,
            type: business.type,
            initialCost: business.initialCost,
            coefficient: business.coefficient,
            initialTime: business.initialTime,
            initialRevenue: business.initialRevenue,
        };
    }

    collection($collection) {
        return $collection.map(element => {
            return this.toArray(element.get());
        })
    }
}

module.exports = new BusinessResource();
