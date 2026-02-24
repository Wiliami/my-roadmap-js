function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

function getMonthName(mo) {
    mo = mo - 1
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    
    if(months[mo] !== undefined) {
        return months[0]

    } else {
        throw new UserException("InvalidMonthNo")
    }
}


let monthName;

function logMyErrors(message, name) {
    console.error(message, name)
}

try {
    var myMonth = 1;
    monthName = getMonthName(myMonth);
} catch (err) {
    monthName = "unknown";
    logMyErrors(err.message, err.name)
}


console.log(getMonthName())