
openEyeDropper()

function openEyeDropper(){
  let eyeDropper = new EyeDropper();
  eyeDropper.open().then(result => {
    chrome.storage.sync.get("lang", (data) => {
      let { lang } = data;
      console.log(lang); 
      let colorHex = result.sRGBHex;
      copyTextToClipboard(colorHex)
      createCustomAlert(colorHex, lang);
    })
  })
}

function copyTextToClipboard(textToCopy){
  navigator.clipboard.writeText(textToCopy);
}

function createCustomAlert(colorHex , lang){
  let div = createDivContaner();
  let spanMessage = createSpanMessage(lang);
  let divColorBox = createDivColorBox(colorHex)
  let spanColorHex = createSpanColorHex(colorHex)
  div.appendChild(spanMessage);
  div.appendChild(divColorBox)
  div.appendChild(spanColorHex);
  document.body.prepend(div);
  setTimeout(() => {
    div.style.opacity = 1;
  })
  setTimeout(() => {
    div.style.opacity = 0
  }, 5000)
  setTimeout(() => {
    div.remove()
  }, 6000)
}

function createDivContaner(){
  let div = document.createElement('div');
  div.id = 'customElement'
  div.style.position = 'fixed';
  div.style.backgroundColor = '#cce5ff';
  div.style.padding = '0.75rem 1.25rem'
  div.style.margin = '1rem';
  div.style.border = '1px solid #b8daff';
  div.style.color = '#004085';
  div.style.top = 0;
  div.style.left = '50%';
  div.style.zIndex = 9999;
  div.style.minwidth = '300px';
  div.style.maxWidth = '100%';
  div.style.transform = 'translateX(-50%)';
  div.style.textAlign = 'center';
  div.style.borderRadius= '0.25rem';
  div.style.display = 'flex';
  div.style.alignItems = 'center'
  div.style.opacity = 0
  div.style.transition = 'all 300ms ease 150ms';
  return div
}

function createSpanMessage(lang){
  let message = document.createElement('span');
  message.innerText = lang === 'es' ? 'Has copiado el color: ' : 'You have copied the color: ';
  return message;
}

function createDivColorBox(colorHex){
  let box = document.createElement('div');
  box.style.display = 'inline-block';
  box.style.width = '1.2rem';
  box.style.height = '1.2rem';
  box.style.border = '1.5px solid #ffff';
  box.style.backgroundColor = colorHex;
  box.style.marginLeft = '1em'
  box.style.marginRight = '0.25em'
  return box
}

function createSpanColorHex(colorHex){
  let hexSpan = document.createElement('span');
  hexSpan.innerText = colorHex + ' ✔';
  hexSpan.style.fontWeight = 700;
  hexSpan.style.fontWeight = 700;
  return hexSpan;
}


