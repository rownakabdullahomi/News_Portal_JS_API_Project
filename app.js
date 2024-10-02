const categoryBtnContainer = document.querySelector("#category-btn-container");
const newsContainer = document.querySelector("#news-container");
const searchInput = document.querySelector("#search-input");


const loadCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();

    data.data.news_category.forEach((item) => {
        const categoryBtnDiv = document.createElement("div");
        categoryBtnDiv.innerHTML = `
            <button class="btn bg-slate-400">${item.category_name}</button>
        `;
        categoryBtnDiv.addEventListener("click", () => {
            loadNews(item.category_id);
        });
        categoryBtnContainer.append(categoryBtnDiv);
    });

};



const loadNews = async (catId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await response.json();

    newsContainer.innerHTML = "";

    data.data.forEach(item => {
        const newsDiv = document.createElement("div");
        newsDiv.innerHTML = `
        <div class="card card-compact h-full shadow-xl pt-2">
            <figure>
                <img
                src="${item.thumbnail_url}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${item.title}</h2>
                <p>${item.details.slice(0, 200)}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Read More...</button>
                </div>
            </div>
        </div>
        `;
        newsContainer.append(newsDiv);
    })
}

document.querySelector("#btn-search").addEventListener("click", () => {
    if(searchInput.value){
        loadNews(searchInput.value);
        searchInput.value = "";
    }
    else{
        alert("Enter Category Id for Search...")
    }
})

loadNews("01");
loadCategory();