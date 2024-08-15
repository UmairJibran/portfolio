
import dayjs from 'dayjs';

export const DATE_FORMATS = {
    SHORT: 'MMM YYYY',
    LONG: 'MMM DD, YYYY',
};


export const formatDate = ({ date, format }: { date: string | null, format: keyof typeof DATE_FORMATS }) => {
    if (!date) return null
    return dayjs(date).format(DATE_FORMATS[format])
}