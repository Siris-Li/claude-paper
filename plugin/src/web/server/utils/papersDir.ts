import path from 'path'

export function getPapersDir() {
  return process.env.CLAUDE_PAPER_DIR || path.join(process.cwd(), '.skill', 'claude-papers')
}

export function getPaperDir(slug: string) {
  return path.join(getPapersDir(), 'papers', slug)
}

export function getIndexPath() {
  return path.join(getPapersDir(), 'index.json')
}
