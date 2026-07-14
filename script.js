function createTable() {
    //Write your code here
	 const rn = prompt("Input number of rows");
	 const cn = prompt("Input number of columns");

	 const table = document.getElementById("myTable");
	
	if(cn <= 0 || rn <=0 || isNan(rn) || isNan(cn)){
		return;
	}

	table.innerHTML ="";
	
	for(let i=1;i<=rn;i++){
		const row = document.createElement("tr");
		
		
		for(let j=1;j<=cn;j++){
			const cell = document.createElement("td");
			cell.textContent = `Row-${i} Column-${j}`;
			row.appendChild(cell);
		}
		table.appendChild(cell);
	}
}
