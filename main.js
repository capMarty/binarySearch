function binarySearch (array, searchKey) {

	if (!Array.isArray(array)) 
		throw new Error("Invalid data type.To find a key, you must specify an array");
	if (isNaN(parseFloat(searchKey))) 
		throw new Error("Invalid data type.The key must have type number");
	if (array[0] === array[array.length - 1]) 
		throw new Error("The first element of the array is equal to the last.Either an array of identical elements was transferred, or an unsorted array");
	
	let key = parseFloat(searchKey);
	// additional number of matches
	let additionallyAmount = [];
	let start = 0;
	let end = array.length - 1;
	let index;
	let result = {};

	// check the array. increases or decreases
	if(array[0] < array[array.length - 1]){
		if (array[0] > key) 
			throw new Error("searchNumber is outside the array (less than needed)");
		if (array[array.length - 1] < key) 
			throw new Error("searchNumber is outside the array (more than needed)");
		outer: while (start <= end){
					let middle = Math.floor((start + (end - start)/2));
					if ( array[middle] === key){
						index = middle;
					// check if there are any more items with the same value
						for(let i = 1; ;i++){
							if((array[middle - i] !== array[middle]) && (array[middle + i] !== array[middle])) 
								break outer;
							else{
								if (array[middle - i] === array[middle])
							 		additionallyAmount.push(middle - i);
							 	if (array[middle + i] === array[middle])
							 		additionallyAmount.push(middle + i);
							}							
						} 
					}else if ( array[middle] > key)
						end = middle - 1;
					else 
						start = middle + 1;
				}

	}else{
		if (array[0] < key) 
			throw new Error("searchNumber is outside the array (more than needed)");
		if (array[array.length - 1] > key) 
			throw new Error("searchNumber is outside the array (less than needed)");
		outer: while (start <= end){
					let middle = Math.floor((start + (end - start)/2));

					if ( array[middle] === key){
						index = middle;
						// check if there are any more items with the same value
						for(let i = 1; ;i++){
							if((array[middle - i] !== array[middle]) && (array[middle + i] !== array[middle]) )
							 	break outer;
							else{
							 	if (array[middle - i] === array[middle])
							 		additionallyAmount.push(middle - i);
							 	if (array[middle + i] === array[middle])
							 		additionallyAmount.push(middle + i);
							}	
						}
					}else if ( array[middle] < key)
						end = middle - 1;
					else 
						start = middle + 1;
				}	
	}

	if (index){
		result.index = index;
		result.additionallyAmount = additionallyAmount;
	}
	else
		return null;

	return result;
}



