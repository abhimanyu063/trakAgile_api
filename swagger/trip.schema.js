const addTrip = {
    userId: 1,
    isTripStarted: 1,
    isTripEnded: 0,
    isWorkCompleted: 0,
    latitude: "10.111111111111111",
    longitude: "10.1111111111111",
}

const updateTrip = {
    tripId: 1,
    isTripStarted: 1,
    isTripEnded: 0,
    isWorkCompleted: 0,
    endLatitude: "10.111111111111111",
    endLongitude: "10.1111111111111",
}

const addTripResponse = {
    success: 1,
    data: "",
}

const getTrip = {
    tripId: 1,
    userId: 1,
    isTripStarted: 1,
    isTripEnded: 0,
    createdOn: "2023-04-27T17:15:03.000Z",
    isWorkCompleted: 0,
    latitude: "10.111111111111111",
    longitude: "10.1111111111111",
    endLatitude: "10.111111111111111",
    endLongitude: "10.1111111111111",
    updatedOn: "2023-04-27T17:15:03.000Z",
}

const getTrips = [getTrip]

module.exports = { addTrip, updateTrip, addTripResponse, getTrip, getTrips };