import { cn } from '@/lib/cs'
import { format, parseISO } from 'date-fns'

export default function PostDate({ dateString, className }: { dateString: string, className?: string }) {
	if (!dateString) return null

	const date = parseISO(dateString)
	return <time dateTime={dateString} className={cn(className)}>{format(date, 'dd-MM-yyyy')}</time>
}