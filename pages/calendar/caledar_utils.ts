export default class Calendar {
  day: Date
  week: Date[] | []
  month: Date[] | []
  startOnSunday: boolean

  constructor (currentDay = new Date()) {
    this.day = currentDay
    this.week = []
    this.month = []
    this.startOnSunday = false
  }
  get getWeek () {
    let firstDay = this.startOnSunday
      ? this.day.getDate() - this.day.getDay()
      : this.day.getDate() - this.day.getDay() + 1
    let all = []
    for (let i = 0; i < 7; i++) {
      all.push(
        this.day.getFullYear() +
          '-' +
          (this.day.getMonth() + 1) +
          '-' +
          (firstDay + i)
      )
    }
    return all
  }
  get getMonth () {
    let all = []
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let currentMonth = this.day.getMonth()
    for (let i = 0; i < monthLength[currentMonth]; i++) {
      all.push(new Date(this.day.getFullYear(), this.day.getMonth(), i))
    }
    return all
  }
}

const funcCal = new Calendar(new Date())
