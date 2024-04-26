console.log("memes");

const memeList = document.querySelector(".meme-list");

function addMemeItem(meme) {
  const li = document.createElement("li");
  li.setAttribute("id", meme.id);

  const h2 = document.createElement("h2");
  h2.innerHTML = meme.name;

  const img = document.createElement("img");
  img.setAttribute("src", meme.url);
  img.setAttribute("height", 500);

  li.appendChild(h2);
  li.appendChild(img);

  memeList.appendChild(li);
}

async function getMemes(start, quantity) {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const datos = await response.json();
    // console.log(datos);
    const memes = datos.data.memes;
    // console.log(memes);
    const selectedMemes = memes.slice(start, start + quantity);
    console.log(selectedMemes);

    selectedMemes.forEach((meme) => {
      addMemeItem(meme);
    })
  } catch (error) {
    console.log(error);
  }
}

getMemes(5, 10);
