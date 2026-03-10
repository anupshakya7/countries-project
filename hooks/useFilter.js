
export const useFilter = (data,query,query2) => {
    const filteredData = data.filter((item) => item.name.common.toLowerCase().includes((query.toLowerCase()) || item.region.toLowerCase().includes((query2.toLowerCase()))));
    return filteredData;
}