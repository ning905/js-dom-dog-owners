console.log(data);

// WRITE YOUR CODE BELOW!
const dogsUL = document.querySelector(".dogs-list");
const mainDogSection = document.querySelector(".main__dog-section");

const createDogLi = (dog) => {
  const dogLi = document.createElement("li");
  dogLi.classList.add("dogs-list__button");
  dogLi.innerText = dog.name;

  dogLi.addEventListener("click", () => {
    createDogCard(dog);
  });

  return dogLi;
};

const createDogCard = (dog) => {
  mainDogSection.innerHTML = "";

  const heading = document.createElement("h2");
  mainDogSection.appendChild(heading);
  heading.innerText = dog.name;

  const img = document.createElement("img");
  mainDogSection.appendChild(img);
  img.setAttribute("src", dog.image);
  img.setAttribute("alt", "");
  img.style.height = "300px";

  const dogInfoWrap = document.createElement("div");
  mainDogSection.appendChild(dogInfoWrap);
  dogInfoWrap.classList.add("main__dog-section__desc");

  const bio = document.createElement("h3");
  dogInfoWrap.appendChild(bio);
  bio.innerText = "Bio";

  const infoText = document.createElement("p");
  dogInfoWrap.appendChild(infoText);
  infoText.innerText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!";

  const goodDogWrap = document.createElement("div");
  dogInfoWrap.appendChild(goodDogWrap);
  goodDogWrap.classList.add("main__dog-section__btn");

  const goodDogText = document.createElement("p");
  goodDogWrap.appendChild(goodDogText);
  const goodDogTextEm = document.createElement("em");
  goodDogTextEm.innerText = "Is naughty?";
  goodDogText.appendChild(goodDogTextEm);

  const goodDogBtn = document.createElement("button");
  goodDogWrap.appendChild(goodDogBtn);

  const checkGoodDog = (dog) => {
    if (dog.isGoodDog) {
      goodDogText.append(" Yes!");
      goodDogBtn.innerText = "Good dog!";
    } else {
      goodDogText.append(" No!");
      goodDogBtn.innerText = "Bad dog!";
    }
  };

  checkGoodDog(dog);
};

const renderDogUL = () => {
  data.forEach((dog) => {
    dogsUL.appendChild(createDogLi(dog));
  });
};

renderDogUL();
