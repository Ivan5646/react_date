export const setDay = (day) => { 
    return { 
        type: "SET_DAY", 
        payload: day
    }
}

export const setMonth = (month) => { 
    return { 
        type: "SET_MONTH", 
        payload: month
    }
}

export const setYear = (year) => { 
    return { 
        type: "SET_YEAR", 
        payload: year
    }
}

export const resetDate = () => { 
    return { 
        type: "RESET_DATE",
        payload: ""
    }
}