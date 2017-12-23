import EventEmitter from '@/tiny-events'

class Model extends EventEmitter {
  constructor() {
    super()
    this.devMode = process.env.NODE_ENV === 'development'
    this.queryPath = process.env.NODE_ENV === 'development'
      ? 'http://successfuldomain.ru/query'
      : '/query'
  }

  query(request) {

    console.log(this.queryPath, '->', request)

    this.emit('request', request)

    return fetch(this.queryPath, {
      method: 'post',
      body: JSON.stringify(request)
    })
      .then(response => response.json())
      .catch(error => {
        let error_response = {
          errors: [{
            code: 'request_error',
            message: error.message
          }],
          request
        }
        this.emit('error', error_response, request)
        throw error_response
      })
      .then(response => {
        response.request = request
        if (response.errors) {
          this.emit('error', response, request)
          throw response
        }
        else {
          this.emit('response', response, request)
          return response
        }
      })
  }

  register(credentials) {
    return this.query({ user_register: credentials })
      .then(response => {
        this.user = response.user_info
      })
      .catch(response => {
        this.user = response.request.user_register
      })
  }

  authenticate(credentials) {
    return this.query({ user_authenticate: credentials })
      .then(response => {
        this.user = response.user_info
      })
      .catch(response => {
        this.user = response.request.user_authenticate
      })
  }

  get licenseCategories() {
    return [
      { "id": "A", "summary": "Мотоциклы" },
      { "id": "A1", "summary": "Легкие мотоциклы" },
      { "id": "B", "summary": "Легковые автомобили, небольшие грузовики (до 3,5 тонн)" },
      { "id": "BE", "summary": "Легковые автомобили с прицепом" },
      { "id": "B1", "summary": "Трициклы" },
      { "id": "C", "summary": "Грузовые автомобили (от 3,5 тонн)" },
      { "id": "CE", "summary": "Грузовые автомобили с прицепом" },
      { "id": "C1", "summary": "Средние грузовики (от 3,5 до 7,5 тонн)" },
      { "id": "C1E", "summary": "Средние грузовики с прицепом" },
      { "id": "D", "summary": "Автобусы" },
      { "id": "DE", "summary": "Автобусы с прицепом" },
      { "id": "D1", "summary": "Небольшие автобусы" },
      { "id": "D1E", "summary": "Небольшие автобусы с прицепом" },
      { "id": "M", "summary": "Мопеды" },
      { "id": "Tm", "summary": "Трамваи" },
      { "id": "Tb", "summary": "Троллейбусы" }
    ]
  }

  get freeTestQuestions() {
    return [{
      "id": "10_181",
      "question": "Главная дорога показана:",
      "answers": [
        "Только на левом верхнем рисунке.",
        "На левом верхнем и нижнем рисунках.",
        "На всех рисунках."
      ], "correct": 3
    }, {
      "id": "5_81",
      "question": "Сколько проезжих частей имеет данная дорога?",
      "answers": [
        "Одну.",
        "Две.",
        "Четыре."
      ], "correct": 1
    }, {
      "id": "24_464",
      "question": "Какие из указанных знаков обязывают водителя грузового автомобиля с разрешенной максимальной массой не более 3,5 т повернуть направо?",
      "answers": [
        "Только А.",
        "Только Б.",
        "А и Б.",
        "Б и В."
      ], "correct": 2
    }]
  }
}

export default {
  install(Vue, options) {
    let model = new Model()
    if (window) window.$model = model
    Vue.prototype.$model = model
  }
}