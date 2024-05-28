function showCategory(category) {
    if (category === 'all') {
        const categories = document.querySelectorAll('.category');
        categories.forEach(cat => cat.classList.remove('hidden'));
    } else {
        const categories = document.querySelectorAll('.category');
        categories.forEach(cat => cat.classList.add('hidden'));

        const selectedCategory = document.getElementById(category);
        if (selectedCategory) {
            selectedCategory.classList.remove('hidden');
        }
    }
}