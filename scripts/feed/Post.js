import { dateModifier } from "./PostList.js"

export const Post = (postObject) => {
    return `
    <section class="post">
    <header>
    <h2 class="user__name">${postObject.name.first} ${postObject.name.last}</h2>
    </header>
    <img class="user__image" src="${postObject.picture.large}" />
    <p>Date of Birth: ${dateModifier(postObject.dob.date)}</p>
    <p>Email: ${postObject.email}</p>
    </section>
    `   
}