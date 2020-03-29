// Write your solution in this file!
const drivers = {};
function updateDriverWithKeyAndValue(driver, key, value){
    const newDrivers = Object.assign(driver, {key: value})
    return newDrivers
}