const initializeThemeToggle = () => {
    // テーマ切り替えボタンの要素を取得
    const themeToggleButton = document.querySelector(".js-color-mode-button");

    // 現在のテーマをlocalStorageから取得
    const currentTheme = localStorage.getItem("theme") || "light";

    // ページロード時にテーマを適用
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleButton.textContent = "ライトモードへ切り替え";
    } else {
        themeToggleButton.textContent = "ダークモードへ切り替え";
    }

    // ボタンクリック時にテーマを切り替える
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggleButton.textContent = "ライトモードへ切り替え";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggleButton.textContent = "ダークモードへ切り替え";
            localStorage.setItem("theme", "light");
        }
    });
};

initializeThemeToggle();
