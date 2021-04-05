import { axiosPost } from '@/libs/http.js'

function getDayData (date) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/calendar/day",
            data: { date },
            success (data) {
                resolve(data)
            },
            error (err) {
                reject(err)
            }
        })
    })
}

function getMonthData (Month) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/calendar/month",
            data: { 
                'year-month':Month
             },
            success (data) {
                resolve(data)
            },
            error (data) {
                reject(err)
            }
        })
    })
}
function getYearData (year) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/calendar/year",
            data: { 
                'year':year
             },
            success (data) {
                resolve(data)
            },
            error (data) {
                reject(err)
            }
        })
    })
}

export {
    getDayData,
    getMonthData,
    getYearData
}