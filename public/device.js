// Foldable "iPhone Duo": flag the OPEN big screen (touch + short screen side 600-767px)
// before first paint. Re-run on resize so folding to the front screen drops the flag.
// External file (not inline) because the CSP is script-src 'self'.
(function () {
    var root = document.documentElement;
    function detect() {
        var side = Math.min(screen.width, screen.height);
        if (navigator.maxTouchPoints > 1 && side >= 600 && side < 768) root.dataset.device = "duo";
        else delete root.dataset.device;
    }
    detect();
    window.addEventListener("resize", detect);
})();
