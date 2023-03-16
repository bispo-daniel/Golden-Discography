const perf = () => {
    const duration = performance.getEntriesByType("navigation")[0].duration;
    if (!duration) setTimeout(perf, 0);
    else console.log({ duration });
}
window.addEventListener('DOMContentLoaded', perf);