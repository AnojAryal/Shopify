import useData from "./useData"

interface sizes{
    id : number,
    name : string,
    slug : string;
}

const useSizes =() =>useData<sizes>('/sizes')

export default useSizes;