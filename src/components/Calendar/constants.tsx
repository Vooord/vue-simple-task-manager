const _date = new Date(2020, 5);

export const DAYS_NAMES: string[] = [];
for (let date = 1; date <= 7; date++) { // monday - sunday
    _date.setDate(date);
    DAYS_NAMES.push(_date.toLocaleDateString(navigator.language, {weekday: 'short'}));
}

export const MONTHS_NAMES: string[] = [];
for (let month = 0; month < 12; month++) {
    _date.setMonth(month);
    MONTHS_NAMES.push(_date.toLocaleDateString(navigator.language, {month: 'long'}));
}
