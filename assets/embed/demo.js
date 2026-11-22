// The client's events bubble from <silverpoint-chart>: read them on the document.
const readout = document.getElementById('readout');
document.addEventListener('sp-activechange', (event) => {
  const item = event.detail;
  if (!item) {
    readout.textContent = '—';
    return;
  }
  const [label] = Object.values(item.datum);
  readout.textContent = `${label} · ${item.value}`;
});
