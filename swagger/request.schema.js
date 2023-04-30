const addRequest = {
    requestComment: "",
    requestTypeId: 1,
    userId: 1,
    isApproved: 1,
    approvedByUserId: 1,
    requestDate: "",
    createdOn: ""
}

const addRequestResponse = {
    success: 1,
    data: "",
}

const getRequest = {
    requestId: 1,
    requestComment: "",
    requestTypeId: 1,
    requestTypeDescription: "",
    userId: 1,
    isApproved: 1,
    approvedByUserId: 1,
    approvedBuUserName: "",
    requestDate: "",
    createdOn: ""
}

const getRequests = [getRequest]

module.exports = { addRequest, addRequestResponse, getRequest, getRequests };