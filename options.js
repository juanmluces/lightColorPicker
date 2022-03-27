
chrome.storage.sync.get("lang", (data) => {
  let { lang } = data;
  const radioEs = document.querySelector('#esLangRadio')
  const radioEn = document.querySelector('#enLangRadio')
  setTitle(lang);
  setLabels(lang)
  if (lang === 'es') radioEs.checked = true;
  if (lang !== 'es') radioEn.checked = true;
  setBodyChangeEventListener()
})

function setBodyChangeEventListener() {
  document.body.addEventListener('change', function (e) {
    let target = e.target;
    if (target.id === 'esLangRadio') return setLanguage('es')
    if (target.id === 'enLangRadio') return setLanguage('en')

  })

}

function setLanguage(language) {
  chrome.storage.sync.set({ lang: language });
  setTitle(language);
  setLabels(language)
}

function setTitle(lang) {
  const title = document.querySelector('.subtitle');
  const message = lang === 'es' ? 'Elige un idioma' : 'Choose a language';
  title.innerText = message
}

function setLabels(lang){
  const esLabel = document.querySelector('.es-label');
  const enLabel = document.querySelector('.en-label');
  const develpBy = document.querySelector('#developed-by');
  if(lang === 'es'){
    esLabel.innerText = 'Español';
    enLabel.innerText = 'Inglés';
    develpBy.innerText = 'Desarrollado por '
    return;
  }
  esLabel.innerText = 'Spanish';
  enLabel.innerText = 'English';
  develpBy.innerText = 'Developed by '

}