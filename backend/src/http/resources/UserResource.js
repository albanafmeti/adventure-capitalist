class UserResource {

    toArray(user) {
        return {
            id: user.id,
            username: user.username,
            credits: user.credits,
        };
    }

    collection($collection) {
        return $collection.map(element => {
            return this.toArray(element.get());
        })
    }
}

module.exports = new UserResource();
