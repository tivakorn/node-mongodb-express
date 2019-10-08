// Variable Declaration
const units = [
    {
        short: 'sec',
        shortPlural: 'secs',
        full: 'second',
        fullPlural: 'seconds',
        th: 'วินาที',
        upperLimit: 60,
        divider: 1
    },
    {
        short: 'min',
        shortPlural: 'mins',
        full: 'minute',
        fullPlural: 'minutes',
        th: 'นาที',
        upperLimit: 60 * 60,
        divider: 60
    },
    {
        short: 'hr',
        shortPlural: 'hrs',
        full: 'hour',
        fullPlural: 'hours',
        th: 'ชั่วโมง',
        upperLimit: 60 * 60 * 24,
        divider: 3600
    },
    {
        short: 'd',
        shortPlural: 'd',
        full: 'day',
        fullPlural: 'days',
        th: 'วัน',
        upperLimit: 60 * 60 * 24 * 30,
        divider: 86400
    },
    {
        short: 'mo',
        shortPlural: 'mo',
        full: 'month',
        fullPlural: 'months',
        th: 'เดือน',
        upperLimit: 60 * 60 * 24 * 365,
        divider: 86400 * 30
    },
    {
        short: 'yr',
        shortPlural: 'yrs',
        full: 'year',
        fullPlural: 'years',
        th: 'ปี',
        upperLimit: null,
        divider: 86400 * 365
    }
]

const daysTh = [
    'วันอาทิตย์',
    'วันจันทร์',
    'วันอังคาร',
    'วันพุธ',
    'วันพฤหัสบดี',
    'วันศุกร์',
    'วันเสาร์'
]

const monthTh = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
]

const shotMonthTh = [
    'ม.ค',
    'ก.พ',
    'มี.ค',
    'เม.ย',
    'พ.ค',
    'มิ.ย',
    'ก.ค',
    'ส.ค',
    'ก.ย',
    'ต.ค',
    'พ.ย',
    'ธ.ค'
]

const getSecond = (now, myDate) => {
    return Math.floor((now - myDate) / 1000)
}

const toBuddhistYear = (myYear) => {
    return myYear + 543
}

const timeAgo = (inputDate, dateNow = Date.now()) => {

    let nowDate = dateNow
    let now = new Date(nowDate)

    let date = new Date(inputDate)
    let second = getSecond(now, date)

    let count = 0
    const UnitsLevel = 3

    if (second <= 0) {
        return 'ตอนนี้'
    }
    for (let i in units) {

        if (count++ >= UnitsLevel) {
            break
        }

        let item = units[i]

        if (second < item.upperLimit || item.upperLimit == null) {
            let result = Math.floor(second / item.divider)
            return `${result} ${item.th}`
        }
    }
    if (date.getFullYear() < now.getFullYear()) {
        return `${date.getDate()} ${shotMonthTh[date.getMonth()]} ${toBuddhistYear(date.getFullYear())}`
    } else if (second >= 86400) {
        return `${date.getDate()} ${shotMonthTh[date.getMonth()]}`
    }
}

export {
    timeAgo
}
