// Загрузка статей на главную (последние 3)
async function loadLatestPosts() {
    try {
        const response = await fetch('data/articles.json');
        const articles = await response.json();
        
        const container = document.getElementById('latest-posts');
        if (!container) return;
        
        // Берем последние 3 статьи (первые в массиве, если сортировать по дате)
        const latest = articles.slice(0, 3);
        
        container.innerHTML = latest.map(article => `
            <div class="post-card">
                <h3><a href="${article.file}">${article.title}</a></h3>
                <div class="date">${article.date}</div>
                <p>${article.summary}</p>
                <a href="${article.file}" class="read-more">Читать →</a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Ошибка загрузки статей:', error);
    }
}

// Загрузка всех статей на страницу блога
async function loadAllArticles() {
    try {
        const response = await fetch('data/articles.json');
        const articles = await response.json();
        
        const container = document.getElementById('all-posts');
        if (!container) return;
        
        container.innerHTML = articles.map(article => `
            <div class="post-card">
                <h3><a href="${article.file}">${article.title}</a></h3>
                <div class="date">${article.date}</div>
                <p>${article.summary}</p>
                <a href="${article.file}" class="read-more">Читать →</a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Ошибка загрузки статей:', error);
    }
}

// Запускаем нужные функции в зависимости от страницы
if (document.getElementById('latest-posts')) {
    loadLatestPosts();
}

if (document.getElementById('all-posts')) {
    loadAllArticles();
}