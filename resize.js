export function handleResize(canvas) {
    const ctx = canvas.getContext("2d");

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;

        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
        ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);
}