var id_payment =JSON.parse(localStorage.getItem('id_payment'));
if (id_payment === null) {
        var id_payment = [];
        var id_payment = 0;
        localStorage.setItem("id_payment", JSON.stringify(id_payment));
}	
var paymentProduct =JSON.parse(localStorage.getItem('paymentProduct'));
if (paymentProduct === null) {
	var paymentProduct = [];
    var paymentProduct=[{}];
    localStorage.setItem("paymentProduct", JSON.stringify(paymentProduct));
}

function checkorder(id){
	if (checkLogin == -1) {
		alert("You need to log in before buying any product.");
	}else { 
		var checkordervalue= false;
		
		var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
		console.log(orderProduct);
		console.log(checkLogin);
		console.log(id);
		for(var i = 0; i < orderProduct.length; i++) {
		   	if (id == orderProduct[i].id_product && checkLogin == orderProduct[i].user_id_order) {  
				checkordervalue = true;
				orderProduct[i].quanlity_order++;
				localStorage.setItem("orderProduct", JSON.stringify(orderProduct));	
				orderprinf();
				
			}
		}
		if (checkordervalue == false) {
			 orderpush(id,1);
			 orderprinf();
		}
	}
} 

function checkorder2(id){
	if (checkLogin == -1) {
		alert("You need to log in before buying any product.");
	}else { 
		var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
		var checkordervalue=0;
		var quantity =parseInt(document.getElementById('quantity').value);
	
		for(var i = 0; i < orderProduct.length; i++) {
		   	if (id == orderProduct[i].id_product && checkLogin == orderProduct[i].user_id_order) {  
				checkordervalue = 1;
				orderProduct[i].quanlity_order += quantity;
				localStorage.setItem("orderProduct", JSON.stringify(orderProduct));	
				orderprinf();
			}
		   }
		   if (checkordervalue == 0) {
			 orderpush(id,quantity);
			 orderprinf();
		}
	}
}
function openPay(){
	document.getElementById('checkout_form').style.display = 'none';
	document.getElementById('payment_form').style.display = 'block';	
}
function totalMoney(checkLogin){
	var total_order = 0;
	var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
	for(var i = 0; i < orderProduct.length; i++) {
	  if (checkLogin == orderProduct[i].user_id_order){
		total_order += orderProduct[i].price_order*orderProduct[i].quanlity_order; 
	  }
	}
	document.getElementById("total_money").innerHTML =Math.round(total_order*100)/100+" USD";
	document.getElementById("total_money_pay").innerHTML = Math.round(total_order*100)/100+" USD";
		  
  }		 
var checkPaymentCash = 1;
function momo(){
	document.getElementById("payment_momo").style.padding ="5px";
	document.getElementById("payment_momo").style.border = "1px solid #fb4f00";
	document.getElementById("payment_cash").style.border ="1px solid #d7d7d7";
	checkPaymentCash = 0;
}

function cash(){
	document.getElementById("payment_cash").style.padding ="5px";
	document.getElementById("payment_cash").style.border = "1px solid #fb4f00";
	document.getElementById("payment_momo").style.border ="1px solid #d7d7d7";
	checkPaymentCash = 1;
}

function prevPay(){
	document.getElementById("checkout_form").style.display = "block";
	document.getElementById("payment_form").style.display = "none";
}

function orderpush(id,quantity){
	var product = JSON.parse(localStorage.getItem('product'));
	var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
	for (var i =0; i<product.length; i++)
		if (product[i].id == id ){
			console.log(product[i].brand);
			var brand_order = product[i].brand;
			var name_order = product[i].name;
			var attribute_order = product[i].attribute;
			var type_order = product[i].type;
			var price_order = product[i].price;
			var dec_order = product[i].dec;
			var image_order = product[i].image;
			var quanlity_order = quantity;
			var user_id_order = checkLogin;
			var id_product = i;
			product_order = {brand_order,name_order,attribute_order,type_order,price_order,dec_order,image_order,quanlity_order,user_id_order,id_product};
			orderProduct.push(product_order);
			localStorage.setItem("orderProduct", JSON.stringify(orderProduct));	
		   console.log(orderProduct);
		   console.log(price_order);
		   console.log(quanlity_order);
		   countOrder();
		  orderprinf();

		}
}
function delete_order(id_order){
	var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
		for(var i = 0; i < orderProduct.length; i++){
			if(id_order == orderProduct[i].id_product && checkLogin == orderProduct[i].user_id_order) {
				orderProduct.splice(i, 1);
			
				localStorage.setItem("orderProduct", JSON.stringify(orderProduct));
			
				orderprinf(); 
				countOrder();
				break;          
			}
		}
	}

function upQuality(id_order){
	var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
	for(var i = 0; i < orderProduct.length; i++) {
		if (id_order == orderProduct[i].id_product && checkLogin == orderProduct[i].user_id_order) {
			var quality_input_change =document.getElementById('quality_input_change'+orderProduct[i].id_product).value;
			console.log(quality_input_change);
			orderProduct[i].quanlity_order=quality_input_change;
			localStorage.setItem("orderProduct", JSON.stringify(orderProduct));
			orderprinf();
		  }
		}   
}
function countOrder(){
		var demOrder = 0;
	var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
	  for(let i = 0; i < orderProduct.length; i++) {
		if (checkLogin == orderProduct[i].user_id_order)
		   demOrder++;
		  document.getElementById("order_number").innerHTML = demOrder;
	  }
	return demOrder;
}


function orderprinf(){
    document.getElementById("prinf_order_cart").innerHTML ='';
	totalMoney(checkLogin);
	var orderProduct =JSON.parse(localStorage.getItem('orderProduct'));
 	for(var i = 0; i < orderProduct.length; i++) {
    	if (checkLogin == orderProduct[i].user_id_order) {
			if (orderProduct[i].quanlity_order != 0){
				var prinf_order_cart = `<tr style="border:1px solid #ddd;">  
				<td>
					<div class="d-flex">
						<div class="cart_img_box" style="width:50%; heigth:100%">
							<img src="`+orderProduct[i].image_order+`" width="100%" height="100%">
						</div>
						<div class="pl-3" style="width: 50%;height: 100px;">
							<p class="mb-1 font-weight-bold" style="font-size: 115%;">`+orderProduct[i].name_order+`</p>
							<p style="font-size: 85%">`+orderProduct[i].attribute_order+`</p>  
						</div>
					</div> 
				</td>
				<td class="text-center"><input id="quality_input_change`+orderProduct[i].id_product+`" onchange ="upQuality(`+orderProduct[i].id_product+`)" class="cart_input_quanlity mt-2" type="number" value="`+orderProduct[i].quanlity_order+`" name="" min="1" max="20" style=""> </td>
				<td class="text-center"><p class="mt-2" style="padding:5px;">`+Math.round(orderProduct[i].price_order*orderProduct[i].quanlity_order*100)/100+` USD</p></td>
				<td class="text-center"><div onclick="delete_order(`+orderProduct[i].id_product+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 200%;padding-top:5px"></i></div> </td>
				</tr>`;
				console.log(orderProduct[i].id_product);
				document.getElementById("prinf_order_cart").innerHTML +=prinf_order_cart;   
			}
			else if (orderProduct[i].quanlity_order == 0){
				delete_order(orderProduct[i].id_product);
			}
		}
  }
}

function payment(){
	var id_payment =JSON.parse(localStorage.getItem('id_payment'));
	if (countOrder() == 0)
		alert('No products');
	var orderProduct =JSON.parse(localStorage.getItem('orderProduct'));	
	var status = "Pending Order";
	var showDetailOrder='';
	if (document.getElementById("name_customer").value == null ||  document.getElementById("name_customer").value == '')
		name_customer = account[checkLogin].fullname; 
	else
		name_customer = document.getElementById("name_customer").value;

	if (document.getElementById("phone_customer").value == null ||  document.getElementById("phone_customer").value == '')
		phone_customer = account[checkLogin].phone; 
	else
		phone_customer = document.getElementById("phone_customer").value;
	
	if (document.getElementById("address_customer").value == null ||  document.getElementById("address_customer").value == '')
		address_customer = account[checkLogin].address; 
	else
		address_customer = document.getElementById("address_customer").value;

	var priceTotal=0;
		for(var i = 0; i < orderProduct.length; i++) {
		  if (orderProduct[i].user_id_order==checkLogin) {
			priceTotal += orderProduct[i].price_order*orderProduct[i].quanlity_order;
			quanlityPayment = orderProduct[i].quanlity_order;
			var push_cart = `<div class="d-flex" style="justify-content:space-around;border:1px solid #000;border-radius:10px; padding:4px; margin-bottom:10px">
								<div class="cart_img_box" style="width: 80px;">
									<img src="`+orderProduct[i].image_order+`" width="100%" height="100%">
								</div>
								<div class="cart_info_box" style="font-size: 18px;">
									<div class="font-weight-bold" style="font-size: 20px;">`+orderProduct[i].name_order+`</div>
									<span >`+orderProduct[i].attribute_order+`</span>
								</div>
								<div class="quanlity" style="font-size: 18px;">
									<p>`+orderProduct[i].quanlity_order+`</p>
								</div> 
							</div>`;
			showDetailOrder += push_cart;
		  }
		}
		var today = new Date;
		priceTotal = Math.round(priceTotal*100)/100.0;
		var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
		var time = today.getHours() + ':' + today.getMinutes();
		userName = account[checkLogin].username;
		console.log(time);	
		accountPayment = account[checkLogin].id;
		console.log(checkPaymentCash);
		if (checkPaymentCash == 1)
			payment_option = 'Cash on Delivery';
		else
			payment_option ='Mobile Payment';

		paymentarr={id_payment,accountPayment,showDetailOrder,quanlityPayment,priceTotal,name_customer,userName,phone_customer,address_customer,payment_option,status,time,date};
		
		paymentProduct.push(paymentarr);
		console.log(paymentProduct[0].showDetailOrder);
		localStorage.setItem("paymentProduct", JSON.stringify(paymentProduct));
		id_payment++;
		localStorage.setItem("id_payment", JSON.stringify(id_payment));
		for(var i = 0; i < orderProduct.length; i++) {
		  if (checkLogin == orderProduct[i].user_id_order) {
			orderProduct.splice(i,countOrder());
			console.log(orderProduct);
			localStorage.setItem("orderProduct", JSON.stringify(orderProduct));	
			location.reload();
		}
	}
}

  
  function paymentPrinfUser(){
    document.getElementById("prinfPaymentUser").innerHTML ='';
	var paymentProduct = JSON.parse(localStorage.getItem('paymentProduct'));
	console.log(localStorage.getItem('paymentProduct'));
	var prinf_payment_cart_user='';
	if (localStorage.getItem('paymentProduct')===null || localStorage.getItem('paymentProduct')=='[{}]'){
		var statusCart="<i>you haven't ordered yet</i>";
		document.getElementById("statusCart").innerHTML +=statusCart;
		console.log(document.getElementById("statusCart"));
	}
	for(var i = 0; i < paymentProduct.length; i++) {
	if (checkLogin == paymentProduct[i].accountPayment) {
		var prinf_payment_cart_user = `<tr style="border-bottom:1px solid #ccc;">
		<td>
		<p style="text-transform:capitalize"> consignee's name: `+paymentProduct[i].name_customer+`</p>
		<p style="text-transform:capitalize">Address: `+paymentProduct[i].address_customer+`</p>
		<p style="text-transform:capitalize">Phone number: `+paymentProduct[i].phone_customer+`</p>
		<p style="text-transform:capitalize">Payment option: `+paymentProduct[i].payment_option+`</p>
		
		</td>
		
		<td>`+paymentProduct[i].showDetailOrder+`<div id="comment_box`+i+`"></div></td>
		<td class="text-center">`+paymentProduct[i].priceTotal+` USD</td>
		<td class="text-center">`+paymentProduct[i].time+` `+paymentProduct[i].date+`</td>
		<td class="text-center"><button id="status_prinf`+paymentProduct[i].id_payment+`" class="btn btn-dark text-white">`+paymentProduct[i].status+`</button></td>
			</tr>
		<tr style="width:100%"></tr>
		`

		document.getElementById("prinfPaymentUser").innerHTML +=prinf_payment_cart_user;
	}
  }
}