// Analyze the verse for Noon Sakinah and Tanween rules
function analyzeVerse() {
    const verse = document.getElementById('verseInput').value;
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (!verse) {
        results.innerHTML = '<p>الرجاء إدخال آية أو جزء منها.</p>';
        return;
    }

    const rules = {
        izhar: 'الإظهار: النطق بالحرف من مخرجه من غير غنة. حروفه: الهمزة، الهاء، العين، الحاء، الغين، الخاء.',
        idgham: 'الإدغام: التقاء حرف ساكن بحرف متحرك بحيث يصيران حرفا مشددا كالثاني. حروفه: ي، ر، م، ل، و، ن. الإدغام بغنة: ي، و، م، ن. الإدغام بلا غنة: ل، ر.',
        iqlab: 'الإقلاب: قلب النون الساكنة أو التنوين ميما مع مراعاة الغنة. حرف الإقلاب: الباء.',
        ikhfa: 'الإخفاء: النطق بحرف ساكن غير مشدد على صفة بين الإظهار والإدغام مع بقاء الغنة. حروفه: ص، ذ، ث، ج، ش، ق، س، ك، ض، ظ، ز، ت، د، ط، ف.'
    };

    // Check for Noon Sakinah and Tanween rules
    if (/ن[ٌٍٍْ]/.test(verse)) {
        results.innerHTML += `<p>${rules.izhar}</p>`;
    }
    if (/[ًٌٍ]$/.test(verse)) {
        results.innerHTML += `<p>${rules.idgham}</p>`;
    }
    if (/ن[ٌٍٍْ]ب/.test(verse)) {
        results.innerHTML += `<p>${rules.iqlab}</p>`;
    }
    if (/ن[ٌٍٍْ][صذثجشقسكدظزتدفط]/.test(verse)) {
        results.innerHTML += `<p>${rules.ikhfa}</p>`;
    }
}