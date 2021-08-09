
export const sort = (sortData: any, sortCriteria: any) => {
    var sorted = sortData.sort(function (a: any, b: any) {
        return b[sortCriteria] - a[sortCriteria];
    });
    return sorted;
};