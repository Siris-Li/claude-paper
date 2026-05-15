#!/bin/bash
set -e

PAPERS_DIR="${PWD}/.skill/claude-papers"

# Only create basic directory structure (fast)
if [ ! -d "$PAPERS_DIR" ]; then
  mkdir -p "$PAPERS_DIR/papers"
  echo '{"papers": []}' > "$PAPERS_DIR/index.json"
fi

exit 0
