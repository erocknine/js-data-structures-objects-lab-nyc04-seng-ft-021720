// Write your solution in this file!
const drivers = {};
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {key: value})
}