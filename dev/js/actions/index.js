// export const showDay = (itemId) => { 
//     return { 
//         type: "SHOW_DAY", 
//         payload: itemId
//     }
// }

// export const showMonth = (itemId) => { 
//     return { 
//         type: "SHOW_MONTH", 
//         payload: itemId
//     }
// }

// export const showYear = (itemId) => { 
//     return { 
//         type: "SHOW_YEAR", 
//         payload: itemId
//     }
// }

export const setDay = (day, dayShow) => { 
    return { 
        type: "SET_DAY", 
        payload: day,
        dayShow: dayShow
    }
}

export const setMonth = (month, monthShow) => { 
    return { 
        type: "SET_MONTH", 
        payload: month,
        monthShow: monthShow
    }
}

export const setYear = (year, yearShow) => { 
    return { 
        type: "SET_YEAR", 
        payload: year,
        yearShow: yearShow
    }
}