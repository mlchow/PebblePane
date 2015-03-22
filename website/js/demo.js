window.onload = function() {

	/**
	*
	*	Demo 1: Elements
	*
	*/
	var dropZoneOne = document.querySelector('#drop-target-one');
	var dropZoneTwo = document.querySelector('#drop-target-two');
	var dropZoneThree = document.querySelector('#drop-target-three');
	var dropZoneFour = document.querySelector('#drop-target-four');

	var dragElements = document.querySelectorAll('#drag-elements li');
	var elementDragged = null;

	for (var i = 0; i < dragElements.length; i++) {

		// Event Listener for when the drag interaction starts.
		dragElements[i].addEventListener('dragstart', function(e) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text', this.innerHTML);
			elementDragged = this;
		});

		// Event Listener for when the drag interaction finishes.
		dragElements[i].addEventListener('dragend', function(e) {
			elementDragged = null;
		});
	};

	// Event Listener for when the dragged element is over the drop zone.
	dropZoneOne.addEventListener('dragover', function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		e.dataTransfer.dropEffect = 'move';

		return false;
	});

	// Event Listener for when the dragged element enters the drop zone.
	dropZoneOne.addEventListener('dragenter', function(e) {
		this.className = "over";
	});

	// Event Listener for when the dragged element leaves the drop zone.
	dropZoneOne.addEventListener('dragleave', function(e) {
		this.className = "";
	});

	// Event Listener for when the dragged element dropped in the drop zone.
	dropZoneOne.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
  	if (e.stopPropagation) e.stopPropagation(); 

		this.innerHTML = e.dataTransfer.getData('text');
		var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background", random_color);

		// Remove the element from the list.
		elementDragged = null;

		return false;
	});

	// Event Listener for when the dragged element is over the drop zone.
	dropZoneTwo.addEventListener('dragover', function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		e.dataTransfer.dropEffect = 'move';

		return false;
	});

	// Event Listener for when the dragged element enters the drop zone.
	dropZoneTwo.addEventListener('dragenter', function(e) {
		this.className = "over";
	});

	// Event Listener for when the dragged element leaves the drop zone.
	dropZoneTwo.addEventListener('dragleave', function(e) {
		this.className = "";
	});

	// Event Listener for when the dragged element dropped in the drop zone.
	dropZoneTwo.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
  		if (e.stopPropagation) e.stopPropagation(); 

		this.innerHTML = e.dataTransfer.getData('text');
		var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background", random_color);

		// Remove the element from the list.
		elementDragged = null;

		return false;
	});

	// Event Listener for when the dragged element is over the drop zone.
	dropZoneThree.addEventListener('dragover', function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		e.dataTransfer.dropEffect = 'move';

		return false;
	});

	// Event Listener for when the dragged element enters the drop zone.
	dropZoneThree.addEventListener('dragenter', function(e) {
		this.className = "over";
	});

	// Event Listener for when the dragged element leaves the drop zone.
	dropZoneThree.addEventListener('dragleave', function(e) {
		this.className = "";
	});

	// Event Listener for when the dragged element dropped in the drop zone.
	dropZoneThree.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
  	if (e.stopPropagation) e.stopPropagation(); 

		this.innerHTML = e.dataTransfer.getData('text');
		var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background", random_color);

		// Remove the element from the list.
		elementDragged = null;

		return false;
	});

	// Event Listener for when the dragged element is over the drop zone.
	dropZoneFour.addEventListener('dragover', function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		e.dataTransfer.dropEffect = 'move';

		return false;
	});

	// Event Listener for when the dragged element enters the drop zone.
	dropZoneFour.addEventListener('dragenter', function(e) {
		this.className = "over";
	});

	// Event Listener for when the dragged element leaves the drop zone.
	dropZoneFour.addEventListener('dragleave', function(e) {
		this.className = "";
	});

	// Event Listener for when the dragged element dropped in the drop zone.
	dropZoneFour.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
  		if (e.stopPropagation) e.stopPropagation(); 

		this.innerHTML = e.dataTransfer.getData('text');
		var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background", random_color);

		// Remove the element from the list.
		elementDragged = null;

		return false;
	});

	
};
