import { getListings } from './listings';

export const tagSorting = async () => {
  const data = await getListings();
  data.forEach((items) => {
    let { title, description, tags: tags = [], media: media = [], endsAt, id, updated, created, _count, seller, bids } = items;
  });
};

/*

const tagsObj = {}
tags.forEach((el, i) => {
    if(Object.keys(el).length === 0){
        return null
    }else if(el === '{}'){
        return null
    }else{
        tagsObj[`tag-${i}`] =el
    }
})
console.log(tagsObj)
const newObjArray = []

tagsObj.forEach((e) => {
newObjArray.push(e)
})

console.log(newObjArray)

const tagString = tags.toString.call()
const newTagArray = Object.toString.call(tagString)
console.log(newTagArray)

for(let i = 0; i < data.length; i++){
    const tags = data[i].tags;
}

*/
