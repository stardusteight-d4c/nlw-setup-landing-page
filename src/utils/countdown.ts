export function countDown() {
  const y = 2024
  const m = 12
  const d = 15
  const h = 18
  const min = 0
  const seg = 0

  const currentDate = new Date()
  const targetDate = new Date(y, m, d, h, min, seg)
  const difference = targetDate.getTime() - currentDate.getTime()

  let days = Math.floor(difference / (1000 * 60 * 60 * 24))
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((difference % (1000 * 60)) / 1000)

  // console.log(
  //   `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o dia ${d}/${m}/${y} às ${h}:${min}:${seg}h.`
  // )
  return { days, hours, minutes, seconds }
}
