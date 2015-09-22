$(document).ready( function() {
	var turnCount = 0;
	function playerXwin() {
		$('#video').toggle(function() {
			$('#video')[0].play();
		});
		$('table').toggle();
		$('#turn').html("<h5>Player X wins!!</h5>");
		$('td').off('click');
	}

	function playerOwin() {
		$('#video').toggle(function() {
			$('#video')[0].play();
		});
		$('table').toggle();		
		$('#turn').html("<h5>Player O wins!!</h5>");
		$('td').off('click');
	}

	$('td').on('click', function() {
		if (turnCount % 2 > 0) {
			$(this).text("O")
			$("#turn").html("<h5>Player X, it's your turn</h5>")
		}else {
			$(this).text("X")
			$("#turn").html("<h5>Player O, it's your turn</h5>")
		}
		$(this).off('click');
		checkForWinner();
		turnCount++;
	});

	$('td').hover(function() {
		// var originalColor = $(this).css('background-color');
		$(this).css('background-color', 'aqua')
	}, function() {
		$(this).css('background-color', 'white')
	});

	function checkForWinner(){
		if ($("#1").text() === "X" && $("#2").text() === "X" && $("#3").text() === "X") {
			playerXwin()
		} else if ($("#4").text() === "X" && $("#5").text() === "X" && $("#6").text() === "X") {
			playerXwin()
		} else if ($("#7").text() === "X" && $("#8").text() === "X" && $("#9").text() === "X") {
			playerXwin()
		} else if ($("#1").text() === "X" && $("#4").text() === "X" && $("#7").text() === "X") {
			playerXwin()
		} else if ($("#2").text() === "X" && $("#5").text() === "X" && $("#8").text() === "X") {
			playerXwin()
		} else if ($("#3").text() === "X" && $("#6").text() === "X" && $("#9").text() === "X") {
			playerXwin()
		} else if ($("#1").text() === "X" && $("#5").text() === "X" && $("#9").text() === "X") {
			playerXwin()
		} else if ($("#3").text() === "X" && $("#5").text() === "X" && $("#7").text() === "X") {
			playerXwin()
		} else if ($("#1").text() === "O" && $("#2").text() === "O" && $("#3").text() === "O") {
			playerOwin()
		} else if ($("#4").text() === "O" && $("#5").text() === "O" && $("#6").text() === "O") {
			playerOwin()
		} else if ($("#7").text() === "O" && $("#8").text() === "O" && $("#9").text() === "O") {
			playerOwin()
		} else if ($("#1").text() === "O" && $("#4").text() === "O" && $("#7").text() === "O") {
			playerOwin()
		} else if ($("#2").text() === "O" && $("#5").text() === "O" && $("#8").text() === "O") {
			playerOwin()
		} else if ($("#3").text() === "O" && $("#6").text() === "O" && $("#9").text() === "O") {
			playerOwin()
		} else if ($("#1").text() === "O" && $("#5").text() === "O" && $("#9").text() === "O") {
			playerOwin()
		} else if ($("#3").text() === "O" && $("#5").text() === "O" && $("#7").text() === "O") {
			playerOwin()
		} else if (turnCount === 8){
			alert("It's a draw!")
		};
	};
});