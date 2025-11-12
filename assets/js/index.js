// EmailJS 初期化
(function() {
    emailjs.init("t2Igqotfgx4xg8d_0"); // ← ここは Public Key
})();

// フォーム送信処理
document.getElementById("contact_form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_thfusxk",    // ← Service ID
        "template_p1f17ht",   // ← Template ID
        this
    ).then(
        function(response) {
            alert("送信が完了しました！😊");
        },
        function(error) {
            alert("送信に失敗しました…\n" + JSON.stringify(error));
        }
    );
});
