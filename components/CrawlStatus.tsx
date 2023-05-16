import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { NaverProduct, NaverProductList } from '@/types';
import numeral from 'numeral-es6';
const numberFormatter = (value: number) => numeral(value).format('0,0');
const onChange: TableProps<NaverProduct>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const columns: ColumnsType<NaverProduct> = [
  { title: '키워드', dataIndex: 'keyword', },
  { title: '전체상품', dataIndex: 'total_cnt', align: 'right', render: (value) => <span>{numberFormatter(value)}</span>, sorter: (a, b) => a.total_cnt - b.total_cnt},
  { title: '해외상품', dataIndex: 'overseas_cnt', align: 'right', render: (value) => <span>{numberFormatter(value)}</span>, sorter: (a, b) => a.overseas_cnt - b.overseas_cnt},
  { title: '해외비율', dataIndex: 'overseas_rate', align: 'right', render: (value) => <span>{numberFormatter(value)}%</span>, sorter: (a, b) => a.overseas_rate - b.overseas_rate},
  { title: '1P 광고', dataIndex: 'ad_cnt', align: 'right', render: (value) => <span>{numberFormatter(value)}</span>, },
  { title: '1P 해외', dataIndex: 'd_overseas_cnt', align: 'right', render: (value) => <span>{numberFormatter(value)}</span>, },
  { title: '1P 그룹', dataIndex: 'group_cnt', align: 'right', render: (value) => <span>{numberFormatter(value)}</span>, },
  { title: '1P 가격', dataIndex: 'price_avg', align: 'right', render: (value) => <span>{numberFormatter(value)}원</span>, },
]
const App: React.FC = () => {
  const [data, setData] = useState<NaverProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/redom');
      setData(result.data.rows);
    };
    fetchData();
  }, []);

  return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
  );
};

export default App;