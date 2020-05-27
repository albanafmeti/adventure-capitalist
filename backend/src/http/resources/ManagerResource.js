class ManagerResource {

    toArray(manager) {
        return {
            id: manager.id,
            name: manager.name,
            description: manager.description,
            businessType: manager.businessType,
            image: manager.image,
            cost: manager.cost,
        };
    }

    collection($collection) {
        return $collection.map(element => {
            return this.toArray(element.get());
        })
    }
}

module.exports = new ManagerResource();
