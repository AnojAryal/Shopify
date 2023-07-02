//my api doesnt support this cropping function 
//just added to learn 


const getCroppedImageUrl = (url : string) =>{
    const target = 'media/';
    const index =  url.indexOf(target) + target.length
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl
