const items_list = createItemList();

console.log(items_list); // Checking to have items_list in webpage

const gridContainer = document.getElementById("item-grid-container")
items_list.forEach(item => {
  
  if(item.id < 10){
    itemID = "0" + item.id
  } else {
    itemID = item.id
  }
  const newItemImg = document.createElement("img")
  newItemImg.id = item.name
  newItemImg.classList.add("item")
  newItemImg.src = `https://files-for-hackathon.netlify.app/items/${itemID}.png`
  newItemImg.style.gridColumn = item.pos[1]
  newItemImg.style.gridRow = item.pos[0]
  gridContainer.append(newItemImg)

  if(item.pos[1] != item.pos[0]){
    const newItemImg2 = document.createElement("img")
    newItemImg2.classList.add("item", "tooltiptext")
    newItemImg2.id = item.name
    newItemImg2.src = `https://files-for-hackathon.netlify.app/items/${itemID}.png`
    newItemImg2.style.gridColumn = item.pos[0]
    newItemImg2.style.gridRow = item.pos[1]
    gridContainer.append(newItemImg2)
  }

})

gridContainer.addEventListener('mouseover', (event) => {
  if(event.target.tagName == "IMG"){
    console.log(event.target.id);
  }
})

