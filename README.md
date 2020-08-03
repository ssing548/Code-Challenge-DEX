# Code-Challenge-DEX

## Use Case (Assumption)
Bluetooth Devices are low powered devices used for short range communications. Blue Low Energy(BLE) or classic Bluetooth has applications in Indoor Navigation systems, where a BLuetooh network of peripherals(Beacons) are deployed and location of central devices connected to peripherals is identified using Strength of signals and Trilateral techniques. 
Given a list of locations(Name, Latitude, Longitude, Address) and corresponding device's UUID logged at that location, user needs webapp to fetch location details for any specifc UUID.

## Technologies used
1. Front End(Client) : Angular Framework(8.3.11)
1. Backend Services(Server) : Node(12.13.0) + Express Framework (4.17.1)
1. DataBase : MongoDB 

## Database Schema
Records are Stored in MongoDB NoSQL database with following attributes:
`<name,latitude, longitude, address, UUID>`

## Requests Preview
Restful API is implemented covering the following methods for a route:
1. GET - To fetch all location records for display purpose and fetch single record having user entered UUID.
1. POST - To insert new Location records in database.

`GET Request: http://localhost:4200/location/558610b7-7bea-487d-b4c3-4814f2d208c4`
```javascript
Response
    {
        "_id": "5f273a35a57f6339c09bf190",
        "name": "Room 1",
        "latitude": 251,
        "longitude": 234,
        "address": "131 paperbirch",
        "uuid": "558610b7-7bea-487d-b4c3-4814f2d208c4",
        "__v": 0
    }
