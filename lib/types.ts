export interface Asset {
  id: string;
  filename: string;
  type: "video" | "image";
  title: string;
  comments: string;
}

export interface AssetsData {
  title: string;
  assets: Asset[];
}
