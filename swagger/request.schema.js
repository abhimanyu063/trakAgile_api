const addRequest = {
    requestComment: "",
    requestTypeId: 1,
    userId: 1,
    requestDate: "",
}

const getRequest = {
    requestId: 1,
    requestComment: "",
    requestTypeId: 1,
    requestTypeDescription: "",
    userId: 1,
    requestByUserName: "",
    isApproved: 1,
    approvedByUserId: 1,
    approvedBuUserName: "",
    requestDate: "",
    createdOn: "",
    supervisorId: 0
}

const getRequests = [getRequest]

module.exports = { addRequest, getRequest, getRequests };