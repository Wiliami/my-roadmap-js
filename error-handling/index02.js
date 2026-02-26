function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

function getMonthName(mo) {
    mo = mo - 1 // expressão retornada: 1 - 1 = 0
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
        return months[0] // undefined
    } else {
        throw new UserException("InvalidMonthNo")
    }
}

function logMyErrors(message, name) {
    console.error(`${message}, ${name}`)
}

let monthName;

try {
    var myMonth = 2;
    monthName = getMonthName(myMonth);
} catch (err) {
    monthName = "unknown";
    logMyErrors(err.message, err.name)
}