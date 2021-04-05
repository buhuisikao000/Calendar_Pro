function _addZero (value) {
    return value < 10? ('0' + value): value
}

function getIconDate (type) {
    const data = new Date()
    switch (type){
        case 'day':
            return  _addZero(data.getDate().toString())
        case 'month':
            return  _addZero((data.getMonth() + 1).toString())
        case 'year':
            return data.getFullYear().toString().substr(2)
    }
}

function getCurrentDate () {
    const data = new Date() 
    const day = data.getDate().toString()
    const month = (data.getMonth() + 1).toString()
    const year = (data.getFullYear()).toString()
    return [year,month,day].join('-')
}

function getCurrentMonth () {
    const data = new Date() 
    const month = (data.getMonth() + 1).toString()
    const year = (data.getFullYear()).toString()
    return [year,month].join('-')
}

function getCurrentYear () {
    const data = new Date() 
    const year = (data.getFullYear()).toString()
    return year
}

function updateDate (value) {
    let date = value.split('')
    switch (date.length){
        case 8 :
            date.splice(4,0,'-')
            date.splice(7,0,'-')
            date = date.join('')
            break
        case 6 :
            date.splice(4,0,'-')
            date = date.join('')
            break
        default : 
            break
    }
    return date
}

export {
    getIconDate,
    getCurrentDate,
    updateDate,
    getCurrentMonth,
    getCurrentYear
}