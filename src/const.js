const SERVER_URL = 'https://expert-fishstick-r4gq6vg4xjw9cvvg-8024.app.github.dev';
const LOCAL_URL = 'http://localhost:8024';

export const API_URL = window.location.hostname.includes('github.dev')
  ? SERVER_URL
  : LOCAL_URL;


export const GOODS_URL = `${API_URL}/api/goods`;
export const CATEGORY_URL = `${API_URL}/api/categories`;
export const COLORS_URL = `${API_URL}/api/colors`;


// GET /api/goods - получить список всех товаров с пагинацией
// GET /api/goods/{id} - получить товар по его ID
// GET /api/categories - получить список категорий
// GET /api/colors - получить список цветов

