import { cn } from '@/lib/cs'
import { urlForImage } from '@/lib/sanity.image'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface SanityCoverImageProps {
	title?: string
	slug?: string
	image?: any
	priority?: boolean
	width?: number
	height?: number
}

export default function SanityCoverImage(props: SanityCoverImageProps) {
	const { title, slug, image: source, priority, width = 2000, height = 1000 } = props || {}
	const image = source?.asset?._ref ? (
		<div
			className={cn('shadow-small', {
				'transition-shadow duration-200 hover:shadow-medium': slug,
			})}
		>
			<Image
				className="h-auto w-full"
				width={width}
				height={height}
				alt={`Cover Image for ${title}`}
				src={urlForImage(source).height(height).width(width).url()}
				sizes="100vw"
				priority={priority}
			/>
		</div>
	) : (
		<div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
	)

	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={`/bai-viet/${slug}`} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	)
}