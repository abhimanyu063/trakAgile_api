const addTrip = {
    UserID: "1",
    IsTripStarted: 1,
    IsTripEnded: 0,
    CreatedOn:"2023-04-27T17:15:03.000Z",
    IsWorkCompleted: 0,
    Latitude: 1000000000.111111,
    Longitude: 1000000000.111111,
}

const addTripResponse = {
    success: 1,
    data: "",
}

const getTrip = {
    TripID:1,
    UserID: "1",
    IsTripStarted: 1,
    IsTripEnded: 0,
    CreatedOn:"2023-04-27T17:15:03.000Z",
    IsWorkCompleted: 0,
    Latitude: 1000000000.111111,
    Longitude: 1000000000.111111,
}

module.exports = { addTrip, addTripResponse, getTrip };