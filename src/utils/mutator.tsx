const mutator = (obj: any, keys: Array<{ key: string, value?: any }>) => {
    let newObj = obj
    for (let i = 0; i < keys.length; i++) {
        if (Object.entries(keys[i]).length > 1) {
            newObj[keys[i].key] = keys[i].value
        } else {
            newObj[keys[i].key] = !newObj[keys[i].key]
        }
    }
    return newObj
}

export default mutator