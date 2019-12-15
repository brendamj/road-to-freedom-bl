$(document).ready(() => {
	const watcher = new Watch($("#spy"));
	console.log(watcher);

	watcher.inView(() => {

		$(".video-container.sticky").removeClass("sticky");

	});

	watcher.outView(() => {

		$(".video-container").addClass("sticky");
	});


});




//////Javascript for interactive///////
$(document).ready(function () {
	$("img.light.on").on("click", function (e) {
		e.preventDefault();

		$("body").addClass("light-off");
	});

	$("img.light.off").on("click", function (e) {
		e.preventDefault();

		$("body").removeClass("light-off");
	});
});

///////////////////////////////////////////////////