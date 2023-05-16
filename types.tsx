export interface NaverProduct {
  seq: number;
  keyword: string;
  total_cnt: number;
  overseas_cnt: number;
  overseas_rate: number;
  insert_dtm: Date;
  /* Detail Info */
  ad_cnt: number;
  d_overseas_cnt: number;
  group_cnt: number;
  price_avg: number;
}
export type NaverProductList = NaverProduct[];

export interface NaverProductDetail {
  seq: number;
  keyword: string;
  title: string;
  adYn: string;
  imgUrl: string;
  overseasYn: string;
  price: number;
  depth: string;
  itemDesc: string;
  itemEtc: string;
  mallTitle: string;
  mallUrl: string;
  insertDtm: Date;
  rank: number;
}
export type NaverProductListDetail = NaverProductDetail[];