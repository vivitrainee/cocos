
function swap(arr, i, j) {
	// console.log("			swap--1---=",i  ,j , arr);
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	// console.log("			swap--2---=",i  ,j , arr);
} 

function perm(arr, k, array_size) {
  if (k >= array_size) {
    console.log('	perm: ', arr);  
  }else {
	for (var i = k; i < array_size; ++i) {
		console.log("step===1====",k,i);
		swap(arr, k, i);
		console.log("step===2====",k+1,array_size);
		perm(arr, k+1, array_size);  // 递归.
		console.log("step===3====",k,i);
		swap(arr, k, i);
		console.log("step===4====");
	}
  }
}

// 使用例子:
perm([1,2,3], 0, 3);





