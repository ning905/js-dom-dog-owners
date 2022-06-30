console.log(data);

// WRITE YOUR CODE BELOW!
const state = { dogs: [...data] };

const setState = (update) => {
  Object.keys(update).forEach((prop) => {
    state[prop] = update[prop];
  });

  render();
};

const dogsUL = document.querySelector(".dogs-list");
const addDogBtn = document.querySelector(".dogs-list__button--add");
const mainDogSection = document.querySelector(".main__dog-section");

const createAddCard = () => {
  mainDogSection.innerHTML = "";

  const heading = document.createElement("h2");
  mainDogSection.appendChild(heading);
  heading.innerText = "Add a new Dog";

  const form = document.createElement("form");
  mainDogSection.appendChild(form);
  form.classList.add("form");

  const nameLabel = document.createElement("label");
  form.appendChild(nameLabel);
  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = "Dog's name";

  const nameInput = document.createElement("input");
  form.appendChild(nameInput);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");

  const imgLabel = document.createElement("label");
  form.appendChild(imgLabel);
  imgLabel.setAttribute("for", "image");
  imgLabel.innerText = "Dog's picture";

  const imgInput = document.createElement("input");
  form.appendChild(imgInput);
  imgInput.setAttribute("type", "url");
  imgInput.setAttribute("id", "image");
  imgInput.setAttribute("name", "image");

  const bioLabel = document.createElement("label");
  form.appendChild(bioLabel);
  bioLabel.setAttribute("for", "bio");
  bioLabel.innerText = "Dog's bio";

  const bioInput = document.createElement("textarea");
  form.appendChild(bioInput);
  bioInput.setAttribute("rows", 5);
  bioInput.setAttribute("id", "bio");
  bioInput.setAttribute("name", "bio");

  const submit = document.createElement("input");
  form.appendChild(submit);
  submit.classList.add("form__button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("name", "submit");
  submit.setAttribute("value", "Let's add a dog!");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = state.dogs.length + 1;
    const name = event.target[0].value;
    const img = event.target[1].value;
    const bio = event.target[2].value;
    const newDog = {
      id: id,
      name: name,
      bio: bio,
      isGoodDog: true,
      image: img,
    };

    const match = state.dogs.find(
      (dog) => dog.name === name && dog.bio === bio && dog.image === img
    );

    if (match) {
      alert("This dog is already on the App.");
      return;
    }

    const myDogs = [newDog, ...state.dogs];

    console.log(myDogs);
    console.log(dogsUL);

    setState({ dogs: myDogs });
  });
};

addDogBtn.addEventListener("click", () => {
  createAddCard();
});

// Header
const createDogLi = (dog) => {
  const dogLi = document.createElement("li");
  dogLi.classList.add("dogs-list__button");
  dogLi.innerText = dog.name;

  dogLi.addEventListener("click", () => {
    createDogCard(dog);
  });

  return dogLi;
};

const render = () => {
  //   state.dogs.forEach((dog) => {
  //     dogsUL.appendChild(createDogLi(dog));
  //   });

  for (let i = 0; i < state.dogs.length; i++) {
    dogsUL.appendChild(createDogLi(state.dogs[i]));
  }
};

// Main
const toggleGood = (dog) => {
  if (dog.isGoodDog) {
    dog.isGoodDog = false;
  } else {
    dog.isGoodDog = true;
  }
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
  img.style.height = "250px";
  img.style.width = "380px";

  const dogInfoWrap = document.createElement("div");
  mainDogSection.appendChild(dogInfoWrap);
  dogInfoWrap.classList.add("main__dog-section__desc");

  const bio = document.createElement("h3");
  dogInfoWrap.appendChild(bio);
  bio.innerText = "Bio";

  const infoText = document.createElement("p");
  dogInfoWrap.appendChild(infoText);
  infoText.innerText = dog.bio;

  const goodDogWrap = document.createElement("div");
  dogInfoWrap.appendChild(goodDogWrap);
  goodDogWrap.classList.add("main__dog-section__btn");

  const goodDogText = document.createElement("p");
  goodDogWrap.appendChild(goodDogText);
  const goodDogTextEm = document.createElement("em");
  goodDogText.appendChild(goodDogTextEm);
  goodDogTextEm.innerText = "Is naughty?";

  const goodDogBtn = document.createElement("button");
  goodDogWrap.appendChild(goodDogBtn);
  goodDogBtn.addEventListener("click", () => {
    toggleGood(dog);
    goodDogText.innerHTML = "";
    goodDogText.appendChild(goodDogTextEm);
    checkGoodDog(dog);
  });

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

render();
