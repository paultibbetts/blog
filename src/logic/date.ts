export const dateFormat: Intl.DateTimeFormatOptions = {
    weekday: undefined, 
    day: '2-digit',
    year: 'numeric',
    month: 'short', 
    hour: 'numeric',
    minute: 'numeric',
    second: undefined,
    hour12: false,
}

export const dateLocale: Intl.UnicodeBCP47LocaleIdentifier = 'en-US'

export const format = (date: Date): string => {
    return date.toISOString().split('T')[0].replaceAll('-', '/')
}