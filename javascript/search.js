function SearchOpen(){
    document.getElementById('searchsection').style.display = 'block';	
    document.getElementById("header").className = "scroll_event_Add_class";
    document.getElementById("logo_white").style.display = "block";
    document.getElementById("logo_black").style.display = "none";
    const changeTexts = document.querySelectorAll('.changeText');
    for (const change of changeTexts)
        change.style.color = "#000";
}

function SearchClose(){
document.getElementById('searchsection').style.display = 'none';	
}

function openSelectSearch(){
document.getElementById('filterSearch').style.display = 'flex';
document.querySelector('.search-sort-on').style.display = 'none';
document.querySelector('.search-sort-off').style.display = 'block';
document.getElementById('searchextend').classList.add('active');
}


function closeSelectSearch(){
    document.getElementById('filterSearch').style.display = 'none';
    document.querySelector('.search-sort-on').style.display = 'block';
    document.querySelector('.search-sort-off').style.display = 'none';
    document.getElementById('searchextend').classList.remove('active');
}

function search(){
var productsearch = document.getElementById('search').value.toLowerCase();
console.log(productsearch);

var product= JSON.parse(localStorage.getItem('product'));
var prinf='';
var listTemp = [];
if(document.getElementById('searchextend').className==''){
    for(var i = 0; i<product.length; i++){
        console.log(product[i].brand.toLowerCase().search(productsearch));
        var temp =product[i].brand +' '+product[i].name + ' ' +product[i].attribute;
        if ((product[i].brand.toLowerCase().search(productsearch) != -1 || product[i].name.toLowerCase().search(productsearch) != -1 || temp.toLowerCase() .search(productsearch) != -1 ) && productsearch != '') {
            listTemp.push(product[i]);
        }
    }
}
else{
    var brandsearch = document.getElementById('brandsearch').value;
    var typesearch = document.getElementById('typesearch').value;
    var priceform = document.getElementById('priceform').value;
    var priceto = document.getElementById('priceto').value;
    console.log(brandsearch);
    if (brandsearch=='all') {
        if (typesearch =='all'){
            for(var i = 0; i<product.length; i++){
                console.log(brandsearch);
                if ((product[i].brand.toLowerCase().search(productsearch) != -1 ) && product[i].price>=priceform && product[i].price<=priceto) {
                    listTemp.push(product[i]);
                }
            }
        } else{
            for(var i = 0; i<product.length; i++){
                console.log(brandsearch);
                if (product[i].brand.toLowerCase().search(productsearch) != -1 && product[i].type == typesearch && product[i].price>=priceform && product[i].price<=priceto) {
                    listTemp.push(product[i]);
                }
            }
        }
    }
    else {
        if (typesearch == 'all'){
            for(var i = 0; i<product.length; i++){
                var temp =product[i].brand +' '+product[i].name + ' ' +product[i].attribute;
                console.log();
                
                if (((temp.toLowerCase().search(productsearch) != -1 &&  product[i].brand.toLowerCase() == brandsearch)
                        ||(productsearch =='' && product[i].brand.toLowerCase() == brandsearch)) 
                    && product[i].price>=priceform && product[i].price<=priceto) {
                        listTemp.push(product[i]);
                }
            }
        } else {
            for(var i = 0; i<product.length; i++){
                var temp =product[i].brand +' '+product[i].name + ' ' +product[i].attribute;
                console.log(typesearch);
                
                if (((temp.toLowerCase().search(productsearch) != -1 &&  product[i].brand.toLowerCase() == brandsearch)
                        ||(productsearch =='' && product[i].brand.toLowerCase() == brandsearch)) 
                    &&  product[i].type == typesearch && product[i].price>=priceform && product[i].price<=priceto) {
                        listTemp.push(product[i]);
                }
            }
        }
    }
}
for (var i = 0; i< listTemp.length; i++){
    prinf +=` <div class="product-card col-lg-3 mb-5">
    <div class=" text-center position-relative"style=" width:90%;border: 1px solid #ccc;border-radius:10px" >
         <div onclick="openDetail(`+listTemp[i].id+`)">
       
           <img class="product_img" src="`+listTemp[i].image+`" alt="" >          
             <h5 class="card-title" style="min-height:100px; padding-left:10px;padding-right:10px">`+listTemp[i].brand+` `+listTemp[i].name+` in `+listTemp[i].attribute+`</h5>
             <p class="product_price">`+listTemp[i].price +` USD</p>
        </div>
             <div  onclick="checkorder(`+listTemp[i].id+`)" class="btn btn-dark mb-4">Add to cart</div>
         </div>
       </div>`;
   }
document.getElementById('searchresult').innerHTML = prinf;
}





var chooseBrand = JSON.parse(localStorage.getItem('chooseBrand'));
if (chooseBrand == null){
    var chooseBrand = [];
    var chooseBrand =['all'];
    localStorage.setItem("chooseBrand", JSON.stringify(chooseBrand));
}

var chooseType = JSON.parse(localStorage.getItem('chooseType'));
if (chooseType == null){
    var chooseType = [];
    var chooseType=['shopall'];
    localStorage.setItem("chooseType", JSON.stringify(chooseType));
}

var choosePrice = JSON.parse(localStorage.getItem('choosePrice'));
if (choosePrice == null){
    var choosePrice = [];
    choosePrice = ['0'];
    localStorage.setItem("choosePrice", JSON.stringify(choosePrice));
}


function changeType(value){
    window.location.href = 'product.html';
    var chooseType = JSON.parse(localStorage.getItem('chooseType'));
    var chooseType =[];
    var chooseBrand =['all'];
    localStorage.setItem("chooseBrand", JSON.stringify(chooseBrand));
    var type_temp;
    switch (value){
        case 0:
            type_temp = 'shopall';
            break;
        case 1:
            type_temp = 'lip balm';
            break;
        case 2:
            type_temp = 'lip cream'; 
            break;
        case 3:
            type_temp = 'lip gloss';
            break;
        case 4:
            type_temp = 'lip tint';
            break;
        case 5:
            type_temp = 'lipstick';
            break;
    }
    chooseType.push(type_temp);
    localStorage.setItem("chooseType",JSON.stringify(chooseType));
    var choosePrice = ['0'];
    localStorage.setItem("choosePrice", JSON.stringify(choosePrice));
    console.log(chooseType);
}

function changeNewCollection(){
    window.location.href = 'product.html';
    var chooseBrand = JSON.parse(localStorage.getItem('chooseBrand'));
    var chooseBrand =[];
    chooseBrand.push('mac cosmetic');
    localStorage.setItem("chooseBrand",JSON.stringify(chooseBrand));
    var chooseType=['shopall'];
    localStorage.setItem("chooseType", JSON.stringify(chooseType));
    var choosePrice = ['0'];
    localStorage.setItem("choosePrice", JSON.stringify(choosePrice));
}

function showchangeLoad(){
    var chooseBrand = JSON.parse(localStorage.getItem('chooseBrand'));
    var chooseType = JSON.parse(localStorage.getItem('chooseType'));
    var choosePrice = JSON.parse(localStorage.getItem('choosePrice'));

    var product = JSON.parse(localStorage.getItem('product'));
    var print_product = document.getElementById('print_product');
    var brand = document.getElementsByClassName('brand_filter_checkbox');
    var typeft = document.getElementsByClassName('type_filter_checkbox');
    var price = document.getElementsByClassName('price_filter_checkbox'); 
    
    
    for (var i = 0; i < brand.length; i++)
        if (chooseBrand.includes(brand[i].value) == true)
            brand[i].checked = true;
    
    for (var i = 0; i < typeft.length; i++)
        if (chooseType.includes(typeft[i].value) == true)
            typeft[i].checked = true;

    for (var i = 0; i < price.length; i++)
        if (choosePrice.includes(price[i].value) == true)
            price[i].checked = true;

    for (var i = 0; i < choosePrice.length; i++)
    console.log(typeof(choosePrice[i]));
    print_product.innerHTML='';
    var count = 0,pageNumber = 0;
    var url = document.location.href;
    var temp = url.split("?");
    var url = document.location.href;
    
    var countNumberPage = 0;
    console.log(temp);
    if(temp[1]=='' || temp[1]==undefined)
        temp = 'all&0';	
    else
        temp = temp[1];  

    var temp2 = temp.split("&");
    var pos = temp2[1];

    var listTemp=[];
    if (chooseBrand.includes('all') == true){
        if (chooseType.includes('shopall') == true){
                for (var i = 0; i < product.length; i++)
                    if (choosePrice.includes('0') == true){
                        listTemp.push(product[i]);
                        countNumberPage++
                    }
                    else
                        {
                            if (choosePrice.includes('1') == true){
                                if (product[i].price >= 0 && product[i].price <= 10){
                                    listTemp.push(product[i]);
                                    countNumberPage++;
                                }
                            }
                            if (choosePrice.includes('2') == true){
                                    if (product[i].price > 10 && product[i].price <= 20){
                                        listTemp.push(product[i]);
                                        countNumberPage++;
                                    }
                                }
                            if (choosePrice.includes('3') == true){
                                if (product[i].price > 20 && product[i].price <= 30){
                                    listTemp.push(product[i]);
                                    countNumberPage++;
                                }

                            }
                            if (choosePrice.includes('4') == true){
                                if (product[i].price > 30){
                                    listTemp.push(product[i]);
                                    countNumberPage++;
                                }
                                }
                        }   

                for (var i = pos; i < listTemp.length; i++){
                    print_product.innerHTML += `<div class="product-card col-lg-3 mb-5">
                    <div class=" text-center position-relative"style=" width:90%;border: 1px solid #ccc;border-radius:10px">
                    <div onclick="openDetail(`+listTemp[i].id+`)">
                   
                    <img class="product_img" src="`+listTemp[i].image+`" alt="" >          
                        <h5 class="card-title" style="min-height:100px; padding-left:10px;padding-right:10px">`+listTemp[i].brand+` `+listTemp[i].name+` in `+listTemp[i].attribute+`</h5>
                        <p class="product_price">`+listTemp[i].price +` USD</p>
                    </div>
                            <div  onclick="checkorder(`+listTemp[i].id+`)" class="btn btn-dark mb-4">Add to cart</div>
                        </div>
                    </div>`; 
                    count++;
                    if(count==8) break;
                }
        } else {
            for (var i = 0; i < product.length; i++)
            if (choosePrice.includes('0') == true){
                if (chooseType.includes(product[i].type.toLowerCase()) == false)
                    continue;
                else{
                    countNumberPage++;
                    listTemp.push(product[i]);
                }
            }
            else
                {
                    var check = chooseType.includes(product[i].type.toLowerCase()) == true;
                    if (choosePrice.includes('1') == true && check == true){
                        if (product[i].price >= 0 && product[i].price <= 10 ){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }
                    }

                    if (choosePrice.includes('2') == true && check == true){
                            if (product[i].price > 10 && product[i].price <= 20){
                                listTemp.push(product[i]);
                                countNumberPage++;
                            }
                        }
                    if (choosePrice.includes('3') == true && check == true){
                        if (product[i].price > 20 && product[i].price <= 30){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }

                    }
                    if (choosePrice.includes('4') == true && check == true){
                        if (product[i].price > 30){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }
                        }
                }  
            
            for (var i = pos; i < listTemp.length; i++){
                    print_product.innerHTML += `<div class="product-card col-lg-3 mb-5">
                    <div class=" text-center position-relative"style=" width:90%;border: 1px solid #ccc;border-radius:10px">
                            <div onclick="openDetail(`+listTemp[i].id+`)">
                           
                            <img class="product_img" src="`+listTemp[i].image+`" alt="" >          
                                <h5 class="card-title" style="min-height:100px; padding-left:10px;padding-right:10px">`+listTemp[i].brand+` `+listTemp[i].name+` in `+listTemp[i].attribute+`</h5>
                                <p class="product_price">`+listTemp[i].price +` USD</p>
                            </div>
                            <div  onclick="checkorder(`+listTemp[i].id+`)" class="btn btn-dark mb-4">Add to cart</div>
                        </div>
                    </div>`; 
                    count++;
                    if(count==8) break;
                
            }          
        }
    }
    else{ if (chooseType.includes('shopall') == true){
            for (var i = 0; i < product.length; i++)
            if (choosePrice.includes('0') == true){
                if (chooseBrand.includes(product[i].brand.toLowerCase()) == false)
                    continue;
                else{
                    countNumberPage++;
                    listTemp.push(product[i]);
                }
            }
            else
                {
                    var check = chooseBrand.includes(product[i].brand.toLowerCase()) == true;
                    if (choosePrice.includes('1') == true && check == true){
                        if (product[i].price >= 0 && product[i].price <= 10 && check == true){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }
                    }
                    if (choosePrice.includes('2') == true && check == true){
                            if (product[i].price > 10 && product[i].price <= 20){
                                listTemp.push(product[i]);
                                countNumberPage++;
                            }
                        }
                    if (choosePrice.includes('3') == true && check == true){
                        if (product[i].price > 20 && product[i].price <= 30){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }

                    }
                    if (choosePrice.includes('4') == true && check == true){
                        if (product[i].price > 30){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }
                    }
                }  

            for (var i = pos; i < listTemp.length; i++){
                    print_product.innerHTML += `<div class="product-card col-lg-3 mb-5">
                    <div class=" text-center position-relative"style=" width:90%;border: 1px solid #ccc;border-radius:10px">
                            <div onclick="openDetail(`+listTemp[i].id+`)">
                           
                            <img class="product_img" src="`+listTemp[i].image+`" alt="" >          
                                <h5 class="card-title" style="min-height:100px; padding-left:10px;padding-right:10px">`+listTemp[i].brand+` `+listTemp[i].name+` in `+listTemp[i].attribute+`</h5>
                                <p class="product_price">`+listTemp[i].price +` USD</p>
                            </div>
                            <div  onclick="checkorder(`+listTemp[i].id+`)" class="btn btn-dark mb-4">Add to cart</div>
                        </div>
                    </div>`; 
                    count++;
                    if(count==8) break;
                
            }
                
        }else{
            for (var i = 0; i < product.length; i++)
            if (choosePrice.includes('0') == true){
                if (chooseBrand.includes(product[i].brand.toLowerCase()) == false)
                    continue;
                else
                    if (chooseType.includes(product[i].type.toLowerCase()) == false)
                        continue;
                    else{
                        countNumberPage++;
                        listTemp.push(product[i]);
                    }
            }
            else
                {
                    var checkbrand = chooseBrand.includes(product[i].brand.toLowerCase()) == true;
                    var checktype = chooseType.includes(product[i].type.toLowerCase()) == true;
                    if (choosePrice.includes('1') == true){
                        if (product[i].price >= 0 && product[i].price <= 10 && checkbrand == true && checktype == true){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }
                    }
                    if (choosePrice.includes('2') == true){
                            if (product[i].price > 10 && product[i].price <= 20 && checkbrand == true && checktype == true){
                                listTemp.push(product[i]);
                                countNumberPage++;
                            }
                        }
                    if (choosePrice.includes('3') == true){
                        if (product[i].price > 20 && product[i].price <= 30 && checkbrand == true && checktype == true){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }

                    }
                    if (choosePrice.includes('4') == true && checkbrand == true && checktype == true){
                        if (product[i].price > 30){
                            listTemp.push(product[i]);
                            countNumberPage++;
                        }
                        }
                }  

            for (var i = pos; i < listTemp.length; i++){
                    print_product.innerHTML += `<div class="product-card col-lg-3 mb-5">
                        <div class=" text-center position-relative"style=" width:90%;border: 1px solid #ccc;border-radius:10px">
                            <div onclick="openDetail(`+listTemp[i].id+`)">
                           
                            <img class="product_img" src="`+listTemp[i].image+`" alt="" >          
                                <h5 class="card-title" style="min-height:100px; padding-left:10px;padding-right:10px">`+listTemp[i].brand+` `+listTemp[i].name+` in `+listTemp[i].attribute+`</h5>
                                <p class="product_price">`+listTemp[i].price +` USD</p>
                            </div>
                                <div  onclick="checkorder(`+listTemp[i].id+`)" class="btn btn-dark mb-4">Add to cart</div>
                            </div>
                        </div>`; 
                        count++;
                        if(count==8) break;
                // }
            }
        }
    }

    pageNumber=Math.ceil( countNumberPage/8);
    console.log(pageNumber);
    if (countNumberPage == 0){
        alert('There are no matching products');
    }

	if (pageNumber  > 1){
	    var href='';
		for(var i = 1;i<=pageNumber;i++){
		    pos=(i-1)*8;
			var a ='<a href="product.html?all&'+pos+'">'+i+'</a>';
			href+='<div class="pageNumber">'+a+'</div>';
			document.getElementById('page').innerHTML=href;
		}
    }
}

function changeBrand(){
    var brand = document.getElementsByClassName('brand_filter_checkbox');
    var typeft = document.getElementsByClassName('type_filter_checkbox');
    var price = document.getElementsByClassName('price_filter_checkbox');
    

    var chooseBrand = JSON.parse(localStorage.getItem('chooseBrand'));
    var chooseBrand = [];
    localStorage.setItem("chooseBrand",JSON.stringify(chooseBrand));
    
    var chooseType = JSON.parse(localStorage.getItem('chooseType'));
    var chooseType = [];
    localStorage.setItem("chooseType",JSON.stringify(chooseType));
    
    var choosePrice = JSON.parse(localStorage.getItem('choosePrice'));
    var choosePrice = [];
    localStorage.setItem("choosePrice",JSON.stringify(choosePrice));
    
    for (var i = 0; i < brand.length; i++)
        if (brand[i].checked == true) {
            chooseBrand.push(brand[i].value);
            localStorage.setItem("chooseBrand",JSON.stringify(chooseBrand));
		}
    
    for (var i =0; i<typeft.length; i++)
        if (typeft[i].checked == true){
            chooseType.push(typeft[i].value);
            localStorage.setItem("chooseType",JSON.stringify(chooseType));
		}
   
    for (var i =0; i<price.length; i++)
        if (price[i].checked == true){
            choosePrice.push(price[i].value);
            localStorage.setItem("choosePrice",JSON.stringify(choosePrice));
		}
   
    document.location.href = 'product.html';
}
