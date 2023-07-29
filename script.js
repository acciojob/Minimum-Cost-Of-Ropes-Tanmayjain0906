
function calculateMinCost() {
  //your code here
  let str = document.getElementById("rope-lengths").value.split(",");
  let arr = str.map((element) =>
	  {
		  return parseInt(element);
	  })
  let ans = 0;
while(arr.length!=1)
{
    arr.sort((a,b) => a-b);
    const sum = arr[0]+arr[1];
    ans += sum;
    arr.splice(0,2);
    arr.push(sum);
}
console.log(ans);
     const div = document.getElementById("result");
	 div.innerHTML = ans;	
}  

  