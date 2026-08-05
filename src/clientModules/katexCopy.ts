function fallbackCopy(text: string): boolean {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  return copied;
}

async function copyKatex(target: HTMLElement) {
  const latex = target.dataset.latex;
  if (!latex) return;
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(latex);
    else if (!fallbackCopy(latex)) return;
  } catch {
    if (!fallbackCopy(latex)) return;
  }

  showCopyToast();
}

let toastTimer: number | undefined;

function showCopyToast() {
  let toast = document.getElementById('katex-copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'katex-copy-toast';
    toast.className = 'katex-copy-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = document.documentElement.lang.startsWith('ja')
    ? 'LaTeXをコピーしました'
    : 'LaTeX copied';
  toast.dataset.visible = 'true';
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => delete toast.dataset.visible, 1600);
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', (event) => {
    const target = (event.target as Element | null)?.closest<HTMLElement>('.katex-copyable');
    if (target) void copyKatex(target);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const target = (event.target as Element | null)?.closest<HTMLElement>('.katex-copyable');
    if (!target) return;
    event.preventDefault();
    void copyKatex(target);
  });
}
