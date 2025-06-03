# React + TypeScript + Vite

Тестовое задание, использовал React,TS, MUI, а также разные варианты стилизации: глобальные стили, Styled Components (Emotion), inline styles (sx prop).<br>

**Для запука проекта, скачать и npm i, npm run dev, запустится стрница со всеми задачами.<br>**

**Задача 1: Верстка веб-страницы по дизайну<br>**
Коммит c31135bac447c111a6d5501146022d775fc6733a: Add: Добавялет страницу выработки станков с карточкой на css и остальные на CircularProgressbar<br/>
**Задача 2. Сверстать собственный макет веб-страницы<br>**
Коммит 768a3fed7a7d8f5aa1243476499362b2effc8c36: Add: Добавялет страницу Учета простоя оборудования<br/>
**Задача 3: Редизайн управляемой формы для планшета<br>**
Коммит cab276bd69a5070d722dadd07bbe52e2529916c7: Add: Добавялет страницу управления с планшета<br/>



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
