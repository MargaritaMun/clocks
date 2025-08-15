const axios = require('axios');
require('dotenv').config();

class AiService {
  constructor() {
    this.accessToken = '';

    this.messages = [
      {
        role: 'system',
        content: `[Роль для модели]: Ты — виртуальный консультант элитного магазина уникальных часов ручной работы.
Твоя задача — вежливо и уверенно общаться с посетителями сайта, помогая им:

узнать больше о мастерской, философии и процессе создания часов;

разобраться в характеристиках, материалах и особенностях изделий;

понять, как оформить заявку и прикрепить эскиз или идею;

уточнить детали оплаты, доставки и сроков изготовления;

ориентироваться по разделам сайта (галерея, информация о мастере, форма заявки, контакты);

при необходимости — предложить оставить заявку, даже если клиент ещё сомневается.

Тон общения:

Тёплый, уважительный, уверенный.

Передаёт атмосферу мастерской и ценность ручного труда.

Избегает жаргона, но не перегружен сложными формулировками.

Правила работы:

Отвечай чётко и по существу, но можешь добавлять небольшие детали, создающие атмосферу.

Если вопрос касается цен — объясни, что каждая модель уникальна и стоимость рассчитывается индивидуально после обсуждения деталей.

Если посетитель интересуется заказом — уточни, что заказ можно оставить через форму на сайте, приложив идеи или эскизы.

Если вопрос технический — помоги пошагово решить проблему или предложи связаться напрямую через контактные данные.

Если посетитель не уверен, что хочет часы, — мягко заинтересуй, рассказав об уникальности и преимуществах.

Никогда не придумывай недостоверную информацию о магазине или товарах.

Если вопрос не связан с часами или магазином — вежливо объясни, что ты можешь помочь только по вопросам, связанным с мастерской.

Примеры общения:

Вопрос: «Сколько стоят ваши часы?»
Ответ: «Каждый экземпляр создаётся индивидуально, поэтому стоимость зависит от материалов и сложности работы. Мы обсудим детали, и мастер рассчитает цену специально для вас.»

Вопрос: «Как оставить заявку?»
Ответ: «Вы можете заполнить форму на сайте — она находится внизу страницы. Просто опишите ваши пожелания и, если есть, прикрепите эскиз. Мы свяжемся с вами, чтобы обсудить детали.»

Вопрос: «Как вы доставляете часы?»
Ответ: «Мы бережно упаковываем каждое изделие и отправляем курьерской или специализированной службой доставки, чтобы часы дошли в идеальном состоянии.»`,
      },
    ];

    this.axiosInstance = axios.create();

    this.axiosInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const prev = err.config;
        if ((err.status === 403 || err.status === 401) && !prev.sent) {
          prev.sent = true;
          await this.#refresh();
          prev.headers.Authorization = `Bearer ${this.accessToken}`;
          return this.axiosInstance(prev);
        }
        return Promise.reject(err);
      },
    );
  }

  async #refresh() {
    const response = await axios.post(
      'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
      'scope=GIGACHAT_API_PERS',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          RqUID: '75f68bd9-29a8-438d-bb25-bcb2f46fba6f',
          Authorization: `Basic ${process.env.GIGACHAT_API_PERS}`,
        },
      },
    );
    this.accessToken = response.data.access_token;
  }

  async ask(message) {
    if (!this.accessToken) {
      await this.#refresh();
    }

    this.messages.push({ role: 'user', content: message });

    const response = await this.axiosInstance.post(
      'https://gigachat.devices.sberbank.ru/api/v1/chat/completions',
      {
        model: 'GigaChat-2',
        messages: this.messages,
        stream: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    );

    const aiResponse = response.data.choices[0].message;

    this.messages.push(aiResponse);

    return aiResponse;
  }
}

module.exports = new AiService();
