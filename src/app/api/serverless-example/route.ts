import type { NextApiRequest, NextApiResponse } from 'next'

import { vehicle_data } from '@/lib/vehicle_data';

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {query: { high_mileage, fast_driver }, method } = req;

  console.log("high_mileage", high_mileage); 
  console.log("fast_driver", fast_driver);
  
  res.status(200).json({ message: 'Hello from Next.js!' })
}


 