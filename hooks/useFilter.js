
export const useFilter = (data,query) => {
    const filteredData = data.filter((item) => item.name.common.toLowerCase().includes((query.toLowerCase())));
    return filteredData;
}