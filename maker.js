var m, f, v;

f = document.getElementById("files");
v = document.getElementById("viewport");

f.addEventListener("change", function(e){
	m = new FileReader();
	m.onload = function(e){
		v.src = e.target.result;
	};
	m.readAsDataURL(this.files[0]);
});
