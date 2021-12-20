import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
	const date = parseISO(dateString)
	return <time className='block pb-5 text-lg text-gray-900 text-opacity-50 tracking-wide md:text-sm' dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>
}