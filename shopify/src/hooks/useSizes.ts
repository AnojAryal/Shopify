import useData from "./useData"

interface Sizes{
    id : number,
    name : string,
    slug : string;
}

const useSizes =() =>useData<Sizes>('/sizes')

export default useSizes