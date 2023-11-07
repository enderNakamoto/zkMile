import { NextRequest } from 'next/server';
import { booleanify } from '@/lib/utils';
import { vehicle_data } from '@/lib/vehicle_data';


export async function GET(req: NextRequest) {
  const fast_driver = req.nextUrl.searchParams.get("fast_driver") || "false"
  const high_mileage = req.nextUrl.searchParams.get("high_mileage") || "false"

  const result = vehicle_data(
    booleanify(high_mileage), 
    booleanify(fast_driver)
  );
  return new Response(JSON.stringify(
    result
  ))
}


 