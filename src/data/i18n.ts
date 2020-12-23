import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
// @ts-ignore
import { initReactI18next } from 'react-i18next'

i18n
// Включает серверную часть i18next
    .use(Backend)
    // Включает автоматическое определение языка
    .use(LanguageDetector)
    // Включает модуль инициализации ловушки
    .use(initReactI18next)
    .init({
            // Используемый стандартный язык
        fallbackLng: 'ru',
        debug: true,
        // Обнаруживает и кэширует cookie с предоставленного языка
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;