const HierarchyTree = (arr, supervisorId = 0) =>
    arr.filter(item => item.supervisorId === supervisorId)
        .map(user => ({
            ...user, users: HierarchyTree(arr,
                user.userId)
        }));


module.exports = { HierarchyTree };