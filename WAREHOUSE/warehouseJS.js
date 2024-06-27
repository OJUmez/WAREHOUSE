   var myText = document.getElementById('myText');
        var alertInfo = document.getElementById('para');
        var checkStore = document.getElementById('checkStore')

        
        myText.addEventListener('input', formatWarehouseCode);
        function formatWarehouseCode() {
            if(myText.value.length < 14){
                alertInfo.innerHTML = "Invalid warehouse number";
                alertInfo.style.color = "red";
                
            }
            if(myText.value.length === 3) {
                myText.value = "(" + this.value + ") ";
                myText.setCursorPosition(myText.Value.length);
            }else if(myText.value.length === 9){
                myText.value = this.value + "-";
            }else if(myText.value.length === 14){
                myText.addEventListener('keypress', (e) => {
                    e.preventDefault()
                })
                alertInfo.innerHTML = "checking for warehouse...";
                alertInfo.style.color = "green";
            }
        }

        checkStore.onclick=function(){
            if(myText.value.length == 0){
                alert("Please enter Warehouse ID")
            }else {
                alert("Checking for Warehouse...")
            }
        }