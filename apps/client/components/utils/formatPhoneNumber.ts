export default function formatPhoneNumber(tel: string) {
  return `${tel.slice(0, 2)} ${tel.slice(2, 4)} ${tel.slice(4, 6)} ${tel.slice(
    6
  )}`
}
