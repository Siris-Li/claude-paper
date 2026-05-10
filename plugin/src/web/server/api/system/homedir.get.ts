import { getPapersDir } from '../../utils/papersDir'

export default defineEventHandler(() => {
  return {
    papersDir: getPapersDir()
  }
})
