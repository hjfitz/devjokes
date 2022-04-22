import jokes from './jokes.db'
import type { Joke } from './jokes.types'

export function getDayOfYear() {
	const now = new Date()
	const start = new Date(now.getFullYear(), 0, 0)
	const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000
	const oneDay = 1000 * 60 * 60 * 24
	const day = Math.floor(diff / oneDay)
	return day
}

export function getJoke(): Joke {
	const idx = getDayOfYear() % jokes.length
	return jokes[idx]
}
