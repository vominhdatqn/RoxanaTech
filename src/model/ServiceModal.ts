import { ImageType } from './ContractModel'

type ServiceModal = {
	image?: ImageType[],
	gallery: ImageType[]
	alt: string,
	title: string,
	description: string,
	url?: string
}

export type {
    ServiceModal
}