const rowsKeyboard = [
  [
    {
      code: 'Backquote',
      en: '`',
      enShift: '~',
      ru: 'ё',
      ruShift: 'Ё',
      ruCaps: 'Ё',
    },
    {
      code: 'Digit1',
      en: '1',
      enShift: '!',
      ru: '1',
      ruShift: '!',
    },
    {
      code: 'Digit2',
      en: '2',
      enShift: '@',
      ru: '2',
      ruShift: '"',
    },
    {
      code: 'Digit3',
      en: '3',
      enShift: '#',
      ru: '3',
      ruShift: '№',
    },
    {
      code: 'Digit4',
      en: '4',
      enShift: '$',
      ru: '4',
      ruShift: ';',
    },
    {
      code: 'Digit5',
      en: '5',
      enShift: '%',
      ru: '5',
      ruShift: '%',
    },
    {
      code: 'Digit6',
      en: '6',
      enShift: '^',
      ru: '6',
      ruShift: ':',
    },
    {
      code: 'Digit7',
      en: '7',
      enShift: '&',
      ru: '7',
      ruShift: '?',
    },
    {
      code: 'Digit8',
      en: '8',
      enShift: '*',
      ru: '8',
      ruShift: '*',
    },
    {
      code: 'Digit9',
      en: '9',
      enShift: '(',
      ru: '9',
      ruShift: '(',
    },
    {
      code: 'Digit0',
      en: '0',
      enShift: ')',
      ru: '0',
      ruShift: ')',
    },
    {
      code: 'Minus',
      en: '-',
      enShift: '_',
      ru: '-',
      ruShift: '_',
    },
    {
      code: 'Equal',
      en: '=',
      enShift: '+',
      ru: '=',
      ruShift: '+',
    },
    { code: 'Backspace', value: 'Backspace' },
  ],
  [
    { code: 'Tab', value: 'Tab' },
    {
      code: 'KeyQ',
      en: 'q',
      enShift: 'Q',
      enCaps: 'Q',
      ru: 'й',
      ruShift: 'Й',
      ruCaps: 'Й',
    },
    {
      code: 'KeyW',
      en: 'w',
      enShift: 'W',
      enCaps: 'W',
      ru: 'ц',
      ruShift: 'Ц',
      ruCaps: 'Ц',
    },
    {
      code: 'KeyE',
      en: 'e',
      enShift: 'E',
      enCaps: 'E',
      ru: 'у',
      ruShift: 'У',
      ruCaps: 'У',
    },
    {
      code: 'KeyR',
      en: 'r',
      enShift: 'R',
      enCaps: 'R',
      ru: 'к',
      ruShift: 'К',
      ruCaps: 'К',
    },
    {
      code: 'KeyT',
      en: 't',
      enShift: 'T',
      enCaps: 'T',
      ru: 'е',
      ruShift: 'Е',
      ruCaps: 'Е',
    },
    {
      code: 'KeyY',
      en: 'y',
      enShift: 'Y',
      enCaps: 'Y',
      ru: 'н',
      ruShift: 'Н',
      ruCaps: 'Н',
    },
    {
      code: 'KeyU',
      en: 'u',
      enShift: 'U',
      enCaps: 'U',
      ru: 'г',
      ruShift: 'Г',
      ruCaps: 'Г',
    },
    {
      code: 'KeyI',
      en: 'i',
      enShift: 'I',
      enCaps: 'I',
      ru: 'ш',
      ruShift: 'Ш',
      ruCaps: 'Ш',
    },
    {
      code: 'KeyO',
      en: 'o',
      enShift: 'O',
      enCaps: 'O',
      ru: 'щ',
      ruShift: 'Щ',
      ruCaps: 'Щ',
    },
    {
      code: 'KeyP',
      en: 'p',
      enShift: 'P',
      enCaps: 'P',
      ru: 'з',
      ruShift: 'З',
      ruCaps: 'З',
    },
    {
      code: 'BracketLeft',
      en: '[',
      enShift: '{',
      ru: 'х',
      ruShift: 'Х',
      ruCaps: 'X',
    },
    {
      code: 'BracketRight',
      en: ']',
      enShift: '}',
      ru: 'ъ',
      ruShift: 'Ъ',
      ruCaps: 'Ъ',
    },
    {
      code: 'Backslash',
      en: '\\',
      enShift: '|',
      ru: '\\',
      ruShift: '/',
    },
    { code: 'Delete', value: 'Del' },
  ],
  [
    { code: 'CapsLock', value: 'CapsLock' },
    {
      code: 'KeyA',
      en: 'a',
      enShift: 'A',
      enCaps: 'A',
      ru: 'ф',
      ruShift: 'Ф',
      ruCaps: 'Ф',
    },
    {
      code: 'KeyS',
      en: 's',
      enShift: 'S',
      enCaps: 'S',
      ru: 'ы',
      ruShift: 'Ы',
      ruCaps: 'Ы',
    },
    {
      code: 'KeyD',
      en: 'd',
      enShift: 'D',
      enCaps: 'D',
      ru: 'в',
      ruShift: 'В',
      ruCaps: 'В',
    },
    {
      code: 'KeyF',
      en: 'f',
      enShift: 'F',
      enCaps: 'F',
      ru: 'а',
      ruShift: 'А',
      ruCaps: 'А',
    },
    {
      code: 'KeyG',
      en: 'g',
      enShift: 'G',
      enCaps: 'G',
      ru: 'п',
      ruShift: 'П',
      ruCaps: 'П',
    },
    {
      code: 'KeyH',
      en: 'h',
      enShift: 'H',
      enCaps: 'H',
      ru: 'р',
      ruShift: 'Р',
      ruCaps: 'Р',
    },
    {
      code: 'KeyJ',
      en: 'j',
      enShift: 'J',
      enCaps: 'J',
      ru: 'о',
      ruShift: 'О',
      ruCaps: 'О',
    },
    {
      code: 'KeyK',
      en: 'k',
      enShift: 'K',
      enCaps: 'K',
      ru: 'л',
      ruShift: 'Л',
      ruCaps: 'Л',
    },
    {
      code: 'KeyL',
      en: 'l',
      enShift: 'L',
      enCaps: 'L',
      ru: 'д',
      ruShift: 'Д',
      ruCaps: 'Д',
    },
    {
      code: 'Semicolon',
      en: ';',
      enShift: ':',
      ru: 'ж',
      ruShift: 'Ж',
      ruCaps: 'Ж',
    },
    {
      code: 'Quote',
      en: "'",
      enShift: '"',
      ru: 'э',
      ruShift: 'Э',
      ruCaps: 'Э',
    },
    { code: 'Enter', value: 'Enter' },
  ],
  [
    { code: 'ShiftLeft', value: 'Shift' },
    {
      code: 'KeyZ',
      en: 'z',
      enShift: 'Z',
      enCaps: 'Z',
      ru: 'я',
      ruShift: 'Я',
      ruCaps: 'Я',
    },
    {
      code: 'KeyX',
      en: 'x',
      enShift: 'X',
      enCaps: 'X',
      ru: 'ч',
      ruShift: 'Ч',
      ruCaps: 'Ч',
    },
    {
      code: 'KeyC',
      en: 'c',
      enShift: 'C',
      enCaps: 'C',
      ru: 'с',
      ruShift: 'С',
      ruCaps: 'С',
    },
    {
      code: 'KeyV',
      en: 'v',
      enShift: 'V',
      enCaps: 'V',
      ru: 'м',
      ruShift: 'М',
      ruCaps: 'М',
    },
    {
      code: 'KeyB',
      en: 'b',
      enShift: 'B',
      enCaps: 'B',
      ru: 'и',
      ruShift: 'И',
      ruCaps: 'И',
    },
    {
      code: 'KeyN',
      en: 'n',
      enShift: 'N',
      enCaps: 'N',
      ru: 'т',
      ruShift: 'Т',
      ruCaps: 'Т',
    },
    {
      code: 'KeyM',
      en: 'm',
      enShift: 'M',
      enCaps: 'M',
      ru: 'ь',
      ruShift: 'Ь',
      ruCaps: 'Ь',
    },
    {
      code: 'Comma',
      en: ',',
      enShift: '<',
      ru: 'б',
      ruShift: 'Б',
      ruCaps: 'Б',
    },
    {
      code: 'Period',
      en: '.',
      enShift: '>',
      ru: 'ю',
      ruShift: 'Ю',
      ruCaps: 'Ю',
    },
    {
      code: 'Slash',
      en: '/',
      enShift: '?',
      ru: '.',
      ruShift: ',',
    },
    { code: 'ArrowUp', value: '▲' },
    { code: 'ShiftRight', value: 'Shift' },
  ],
  [
    { code: 'ControlLeft', value: 'Ctrl' },
    { code: 'MetaLeft', value: 'Win' },
    { code: 'AltLeft', value: 'Alt' },
    { code: 'Space', value: ' ' },
    { code: 'AltRight', value: 'Alt' },
    { code: 'ArrowLeft', value: '◄' },
    { code: 'ArrowDown', value: '▼' },
    { code: 'ArrowRight', value: '►' },
    { code: 'ControlRight', value: 'Ctrl' },
  ],
];
class Keyboard {
  constructor(rows) {
    this.rows = rows;
    this.element = null;
    this.textarea = null;
    this.lang = localStorage.getItem('lang') || 'en';
    this.pressCaps = false;
    this.pressShift = false;
    this.initKeyboard();
  }

  createDom() {
    const currentLang = this.lang;
    const hiddenLang = this.lang === 'en' ? 'ru' : 'en';

    this.element = document.createElement('div');
    this.element.classList.add('container');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'RSS Виртуальная клавиатура';

    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.textarea.setAttribute('id', 'textarea');
    this.textarea.setAttribute('rows', '10');
    this.textarea.setAttribute('cols', '100');

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.setAttribute('id', 'keyboard');

    this.rows.forEach((rowKeys) => {
      const row = document.createElement('div');
      row.classList.add('keyboard__row', 'row');
      rowKeys.forEach((key) => {
        const keyDiv = document.createElement('div');
        keyDiv.classList.add('keyboard__key', 'key', key.code);

        const currentLangSpan = document.createElement('span');
        currentLangSpan.classList.add(currentLang);
        currentLangSpan.insertAdjacentHTML(
          'afterBegin',
          `<span class="caseDown">${key[currentLang]}</span>`,
        );
        currentLangSpan.insertAdjacentHTML(
          'beforeEnd',
          `<span class="caseUp hidden">${key[`${currentLang}Shift`]}</span>`,
        );
        currentLangSpan.insertAdjacentHTML(
          'beforeEnd',
          `<span class="caps hidden">${key[`${currentLang}Caps`] || key[currentLang]}</span>`,
        );
        currentLangSpan.insertAdjacentHTML(
          'beforeEnd',
          `<span class="shiftCaps hidden">${
            key[`${currentLang}Caps`] ? key[currentLang] : key[`${currentLang}Shift`]
          }</span>`,
        );

        const hiddenLangSpan = document.createElement('span');
        hiddenLangSpan.classList.add(hiddenLang, 'hidden');
        hiddenLangSpan.insertAdjacentHTML(
          'afterBegin',
          `<span class="caseDown hidden">${key[hiddenLang]}</span>`,
        );
        hiddenLangSpan.insertAdjacentHTML(
          'beforeEnd',
          `<span class="caseUp hidden">${key[`${hiddenLang}Shift`]}</span>`,
        );
        hiddenLangSpan.insertAdjacentHTML(
          'beforeEnd',
          `<span class="caps hidden">${key[`${hiddenLang}Caps`] || key[hiddenLang]}</span>`,
        );
        hiddenLangSpan.insertAdjacentHTML(
          'beforeEnd',
          `<span class="shiftCaps hidden">${
            key[`${hiddenLang}Caps`] ? key[hiddenLang] : key[`${hiddenLang}Shift`]
          }</span>`,
        );

        keyDiv.appendChild(hiddenLangSpan);
        keyDiv.appendChild(currentLangSpan);
        // Добавление значения клавиши, если оно существует
        if (key.value) {
          keyDiv.innerText = key.value;
          keyDiv.classList.add('control');
        }
        row.appendChild(keyDiv);
      });
      keyboard.appendChild(row);
    });
    const description = document.createElement('p');
    description.innerText = 'Клавиатура создана в операционной системе Windows';
    description.classList.add('description');

    const language = document.createElement('p');
    language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
    language.classList.add('language');

    this.element.appendChild(title);
    this.element.appendChild(this.textarea);
    this.element.appendChild(keyboard);
    this.element.appendChild(description);
    this.element.appendChild(language);
  }

  saveLangToLocalStorage() {
    localStorage.setItem('lang', this.lang);
  }

  toggleLang() {
    const keyboardKeys = document.querySelectorAll('.keyboard__key');
    keyboardKeys.forEach((key) => {
      if (!key.classList.contains('control')) {
        const currentLangSpan = key.querySelector(`.${this.lang}`);
        const hiddenLangSpan = key.querySelector(`.${this.lang === 'en' ? 'ru' : 'en'}`);
        currentLangSpan.classList.toggle('hidden');
        if (this.pressCaps) {
          currentLangSpan.children[2].classList.toggle('hidden');
        } else {
          currentLangSpan.children[0].classList.toggle('hidden');
        }
        hiddenLangSpan.classList.toggle('hidden');
        if (this.pressCaps) {
          hiddenLangSpan.children[2].classList.toggle('hidden');
        } else {
          hiddenLangSpan.children[0].classList.toggle('hidden');
        }
      }
    });
  }

  toggleCase() {
    const elements = document.querySelectorAll(`div>.${this.lang}`);
    const capsShift = this.pressCaps && this.pressShift ? 1 : 0;
    elements.forEach((element) => {
      const [caseDown, caseUp, caps, shiftCaps] = element.querySelectorAll('span');
      caseDown.classList.add('hidden');
      caseUp.classList.add('hidden');
      caps.classList.add('hidden');
      shiftCaps.classList.add('hidden');
      if (capsShift === 1) {
        shiftCaps.classList.remove('hidden');
        return;
      }
      if (this.pressCaps) {
        caps.classList.remove('hidden');
        return;
      }
      if (this.pressShift) {
        caseUp.classList.remove('hidden');
        return;
      }
      caseDown.classList.remove('hidden');
    });
  }

  outKey(key) {
    const index = this.textarea.selectionStart;
    const taVal = this.textarea.value;
    this.textarea.focus();
    if (key.classList.contains('control')) {
      switch (key.innerHTML) {
        case 'Enter':
          this.textarea.value = `${taVal.slice(0, index)}\n${taVal.slice(index)}`;
          this.textarea.setSelectionRange(index + 1, index + 1);
          break;
        case 'Backspace':
          if (index > 0) {
            this.textarea.value = `${taVal.slice(0, index - 1)}${taVal.slice(index)}`;
            this.textarea.setSelectionRange(index - 1, index - 1);
          }
          break;
        case 'Del':
          this.textarea.value = `${taVal.slice(0, index)}${taVal.slice(index + 1)}`;
          this.textarea.setSelectionRange(index, index);
          break;
        case ' ':
          this.textarea.value = `${taVal.slice(0, index)} ${taVal.slice(index)}`;
          this.textarea.setSelectionRange(index + 1, index + 1);
          break;
        case 'Tab':
          this.textarea.value = `${taVal.slice(0, index)}    ${taVal.slice(index)}`;
          this.textarea.setSelectionRange(index + 4, index + 4);
          break;
        case '◄':
          this.textarea.value += '◄';
          break;
        case '►':
          this.textarea.value += '►';
          break;
        case '▼':
          this.textarea.value += '▼';
          break;
        case '▲':
          this.textarea.value += '▲';
          break;
        default:
          break;
      }
    } else {
      const elements = key.querySelectorAll(':not(.hidden)');
      const symbol = elements.length === 2 ? elements[1].innerHTML : key.innerHTML;
      this.textarea.value += symbol;
    }
  }

  keyDown(event) {
    event.preventDefault();
    const key = document.querySelector(`.${event.code}`);
    if (key) {
      key.classList.add('active');
      this.outKey(key);
      if (key.classList.contains('CapsLock')) {
        this.pressCaps = !this.pressCaps;
        this.toggleCase();
      }
      if (event.shiftKey && !this.pressShift) {
        this.pressShift = true;
        this.toggleCase();
      }
      if (event.ctrlKey && event.altKey) {
        localStorage.setItem('lang', localStorage.getItem('lang') === 'en' ? 'ru' : 'en');
        this.lang = localStorage.getItem('lang');
        this.toggleLang();
      }
    }
  }

  keyUp(event) {
    const key = document.querySelector(`.${event.code}`);
    if (key) {
      if (key.classList.contains('CapsLock')) {
        if (this.pressCaps) {
          key.classList.add('active');
        } else {
          key.classList.remove('active');
        }
      } else {
        key.classList.remove('active');
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.pressShift = false;
        this.toggleCase();
      }
    }
  }

  initKeyboard() {
    this.createDom();
    this.saveLangToLocalStorage();
    document.addEventListener('keydown', this.keyDown.bind(this));
    document.addEventListener('keyup', this.keyUp.bind(this));
  }
}
const keyboard = new Keyboard(rowsKeyboard);
document.body.append(keyboard.element);
