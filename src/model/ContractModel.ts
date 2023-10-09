type ImageType = {
  id: string;
  name: string;
  url: string;
  alt?: string;
}

type ContractModel = {
  id: string;
  contractType: string;
  dressName: string;
  status: string;
  phone: string;
  address: string;
  createDate: string;
  dueDate: string;
  contractPrice: string;
  contractImage: ImageType[];
};

export type { ContractModel, ImageType };
