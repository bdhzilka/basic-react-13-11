export default function memoize(fn) {
    let cashe = {}
    return (id) => {
        if (!(id in cashe)) {
            cashe[id] = fn(id)

        }
        return cashe[id]
    }
}