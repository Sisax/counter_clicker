let buttonInc = $(".increment");
let buttonDec = $(".decrease");
let counter = $("#counter");

buttonInc.click(function() {
    counter.val(parseInt(counter.val()) + 1 );
});

buttonDec.click(function () {
    counter.val(parseInt(counter.val()) - 1 );
})
