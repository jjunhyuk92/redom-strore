import type { NextApiRequest, NextApiResponse } from 'next'

const db = require('../../db/db-config'); // 데이터베이스 설정 파일 가져오기
// const mapper = db.getMapper()

type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>)  {
      // const { id } = req.query
      // const result = await db.query('select * from tb_keyword_old limit 100'); // 쿼리 실행
      // const query = mapper.getStatement('example', 'selectExample');
      // console.log(query)
      // mapper.getStatement('')

      const result = await db.query(`
        select a.seq
             , a.keyword
             , a.total_cnt
             , a.overseas_cnt
             , round(a.overseas_cnt::numeric / a.total_cnt::numeric * 100, 1) as overseas_rate
             , b.*
        from tb_naver_product_m a
        inner join (
            select s.keyword
                , sum(case when s.ad_yn = 'Y' then 1 else 0 end) as ad_cnt
                , sum(case when s.overseas_yn = '해외' then 1 else 0 end) as d_overseas_cnt
                , sum(case when s.mall_title in ('쇼핑몰별 최저가', '브랜드 카탈로그') then 1 else 0 end) as group_cnt
                , round(avg(s.price)) as price_avg
            from tb_naver_product_d s
            group by s.keyword
        ) b on a.keyword = b.keyword
        order by d_overseas_cnt desc
      `); // 쿼리 실행
      res.status(200).json(result)
}