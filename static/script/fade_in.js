/* 使用IntersectionObserver，
 API來檢測圖片何時進入視圖，然後觸發它們的淡入效果。
 這種方法可以確保每個圖片都在進入視圖時立即顯示淡入效果，
 而不需要等待前一個圖片的淡入效果完成 */
    var observer = new IntersectionObserver(function(entries) {

        entries.forEach(function (entry) {
            // 回調函數中，我們使用entry.isIntersecting屬性來檢查圖片是否在視圖中。
            // 如果是，我們就將in-view類添加到圖片上，以觸發淡入效果。
            // 你可以將這個修改後的代碼添加到你的頁面中，以實現圖片的淡入效果。
            // 請確保在頁面載入時執行這個代碼，以便在圖片進入視圖時觸發淡入效果。
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
});

    /*使用document.querySelectorAll方法獲取了所有具有，
fade-in類的圖片元素。接下來，我們使用一個循環來觀察每個圖片 */
    var images = document.querySelectorAll('.fade-in');

    /*  觀察每一張圖片 */
    for (var i = 0; i < images.length; i++) {
  var image = images[i];
    observer.observe(image);
}
