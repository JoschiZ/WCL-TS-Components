export default <T>(baseObject: T, filters: T[]) => {
    for (const filter of filters) {
        for (const key in filter) {
            if (baseObject[key] !== filter[key]) {
                return true;
            }
        }
    }
};
