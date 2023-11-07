import { vehicle_data } from '@/lib/vehicle_data';

export async function GET(req: Request) {
  const result = vehicle_data(true, true);
  return new Response(JSON.stringify(
    result
  ))
}


 