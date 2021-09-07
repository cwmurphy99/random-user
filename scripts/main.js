import { getRandomUser } from "./data/DataManager.js";
 import { PostList } from "./feed/PostList.js";
import { useUserCollection } from "./data/DataManager.js";
import { dateModifier } from "./feed/PostList.js";
//console.log("You look marvelous!")


const showUser = () => {
    const postElement = document.querySelector(".userList");
    getRandomUser().then((allPosts) => {
        postElement.innerHTML = PostList(allPosts.results);
    })
}

const randomUser = document.getElementById("newRandomUser");
randomUser.addEventListener("click", function() {
   showUser();
}
)


getRandomUser();
useUserCollection();
showUser();
dateModifier();