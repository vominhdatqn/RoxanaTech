import { ServiceModal } from "./ServiceModal";

type AlbumPhotoType = {
	title: string
	subTitle: string
	content: string
	subContent: string
	background: ServiceModal[]
	gallery: ServiceModal[]
	videoOne: string
	videoTwo: string
}

type PriceWeddingType = {
    title: string
	subTitle: string
    content: string
	background: ServiceModal[]
    listComboPrice: ServiceModal[]
}

type ServicePageModel = {
	id: string
    priceWedding: PriceWeddingType,
	albumPhoto: AlbumPhotoType,
    weddingDayReportage: AlbumPhotoType
}

export type {
	ServicePageModel,
    AlbumPhotoType,
    PriceWeddingType
}