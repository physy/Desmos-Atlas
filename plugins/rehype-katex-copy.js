function findLatex(node) {
  if (!node || typeof node !== 'object') return null;
  if (
    node.type === 'element' &&
    node.tagName === 'annotation' &&
    node.properties?.encoding === 'application/x-tex'
  ) {
    return (node.children ?? [])
      .filter((child) => child.type === 'text')
      .map((child) => child.value)
      .join('');
  }
  for (const child of node.children ?? []) {
    const latex = findLatex(child);
    if (latex !== null) return latex;
  }
  return null;
}

module.exports = function rehypeKatexCopy() {
  return function transform(tree) {
    function visit(node) {
      if (!node || typeof node !== 'object') return;
      const classes = node.properties?.className;
      if (node.type === 'element' && Array.isArray(classes) && classes.includes('katex')) {
        const latex = findLatex(node);
        if (latex) {
          node.properties = {
            ...node.properties,
            className: [...classes, 'katex-copyable'],
            dataLatex: latex,
            role: 'button',
            tabIndex: 0,
            title: 'Click to copy LaTeX',
            ariaLabel: `Copy LaTeX: ${latex}`,
          };
        }
      }
      for (const child of node.children ?? []) visit(child);
    }
    visit(tree);
  };
};
