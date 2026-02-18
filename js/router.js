const routes = { //таблица соответствия, обычный объект. Удобство: потом используем routes[hash]() без повторения if несколько раз
    dashboard: renderDashboard,
    budget: renderBudget,
    checklist: renderChecklist,
    notes: renderNotes
}
function router () {

    const hash = location.hash.replace('#','')||'dashboard';
    //location.hash - встроенное свойство браузера. Если url site.com/#notes, то location.hash будет равно '#notes'. 
    // Метод replace удаляет символ #, и мы получаем 'notes'. Если же location.hash пустой, то мы возвращаем 'dashboard' по умолчанию.
    
    const page = routes[hash]
    // Допустим, что hash = 'budget', то мы получим page = routes['budget'] -> renderBudget
    // Мы НЕ вызываем функцию тут, а получаем на нее ссылку

    if (page) { //проверка существования маршрута
        page() //вызываем функцию, которая отрисовывает страницу
    } else {
        renderNotFound();
    }
}
window.addEventListener('hashchange', router); // когда изменится # в URL — вызови router()
window.addEventListener('load', router); // когда страница впервые загрузилась — вызови router() (иначе <main id="app"></main> останется пустым)
