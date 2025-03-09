const ul = document.querySelector("#categories");
const item = ul.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);
item.forEach(category => {
    const Title = category.querySelector("h2").textContent;
    const Elements = category.querySelectorAll("ul li");
    console.log(`Category: ${Title}`);
    console.log(`Elements ${Elements.length}`);
});
