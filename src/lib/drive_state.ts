import { faker } from '@faker-js/faker';

export function drive_state(
    fast_driver: boolean, 
    drive_far: boolean
) {
    // if drive far, then the car has gone more than 200 miles from seattle 
    // Seattle lat, lon 47.608013, -122.335167

    let max_lat = 48
    let min_lat = 46
    let max_lon = -121.5
    let min_lon = -122.5

    if (drive_far){
         max_lat = 55
         min_lat = 50
         max_lon = -125.5
         min_lon = -126.5
    } 

    const lat = faker.location.latitude({
        max: max_lat, 
        min: min_lat, 
        precision: 6
    })
    const lon = faker.location.longitude({
        max: max_lon, 
        min: min_lon,
        precision: 6
    })

    const moderate_speed = faker.number.int({ min: 10, max: 60 })
    console.log("fast_driver", fast_driver)
    const high_speed = faker.number.int({ min: 50, max: 100 })

    const speed = fast_driver? high_speed : moderate_speed
    const result = {
    "active_route_latitude": lat,
    "active_route_longitude": lon,
    "active_route_traffic_minutes_delay": faker.number.int(120),
    "gps_as_of": 1692137422,
    "heading": faker.number.int(500),
    "latitude": lat,
    "longitude": lon,
    "native_latitude": lat,
    "native_location_supported": 1,
    "native_longitude": lon,
    "native_type": "wgs",
    "power": 1,
    "shift_state": null,
    "speed": speed,
    "timestamp": Date.now()
   }
    return result; 
}