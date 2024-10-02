export function formatDate(date: string) {
    let currentDate = new Date();

    if (!date.includes('T')) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date);
    let timeDifference = currentDate.getTime() - targetDate.getTime();

    // Difference in various time units
    let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let weeksAgo = Math.floor(daysAgo / 7);
    let monthsAgo = Math.floor(daysAgo / 30); // Approximate month
    let yearsAgo = Math.floor(daysAgo / 365); // Approximate year

    let formattedDate = '';

    // More specific phrases for days, weeks, months, years
    if (daysAgo === 0) {
        formattedDate = 'Today';
    } else if (daysAgo === 1) {
        formattedDate = 'Yesterday';
    } else if (daysAgo < 7) {
        formattedDate = `${daysAgo} days ago`;
    } else if (weeksAgo === 1) {
        formattedDate = 'A week ago';
    } else if (weeksAgo < 4) {
        formattedDate = `${weeksAgo} weeks ago`;
    } else if (monthsAgo === 1) {
        formattedDate = 'A month ago';
    } else if (monthsAgo < 12) {
        formattedDate = monthsAgo >= 11 ? 'Nearly a year ago' : `${monthsAgo} months ago`;
    } else {
        formattedDate = yearsAgo === 1 ? 'About a year ago' : `More than ${yearsAgo} years ago`;
    }

    return formattedDate;
}
