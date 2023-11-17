function switchLanguage(lang) {
    if (lang === 'fa') {
        document.getElementById('englishPosts').style.display = 'none';
        document.getElementById('farsiPosts').style.display = 'block';
    } else {
        document.getElementById('englishPosts').style.display = 'block';
        document.getElementById('farsiPosts').style.display = 'none';
    }
}

// Initialize with English posts
switchLanguage('en');

