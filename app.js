const categoryBtnContainer = document.querySelector("#category-btn-container");

const loadCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();

    data.data.news_category.forEach((item) => {
        const categoryBtnDiv = document.createElement("div");
        categoryBtnDiv.innerHTML = `
            <button class="btn bg-slate-400">${item.category_name}</button>
        `;
        categoryBtnContainer.append(categoryBtnDiv);
    });

};

const loadNews = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await response.json();
    data.data.forEach(item => {
        console.log(item);
    })
}

loadNews();
loadCategory();