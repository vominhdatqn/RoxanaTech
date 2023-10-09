import { ImageType } from "./ContractModel";

type WeddingDressModel = {
	id: string;
	dressCode: string;
	dressName: string;
	dressPrice: string;
	dressPriceSale: string;
	published: boolean;
	dressImage: ImageType[];
	dressQuantity: number;
	dressShape: string;
}

export type {
	WeddingDressModel
}