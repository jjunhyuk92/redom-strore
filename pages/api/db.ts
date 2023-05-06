import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>)  {
      // const { id } = req.query
      const result = { name: '장', name2: '준혁'}
      res.status(200).json(result)
}