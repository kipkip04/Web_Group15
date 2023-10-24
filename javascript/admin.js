var listLock = JSON.parse(localStorage.getItem('listLock'));
if ( listLock== null){
	var listLock = [-1];
	localStorage.setItem('listLock', JSON.stringify(listLock));
}

function LogoutAdmin(){
	location.href ='index.html';
	checkLogin=-1;  
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));  
}

function showAdmin(){
	var account = JSON.parse(localStorage.getItem('account'));
	if (account[checkLogin].username == 'admin2'){
		document.getElementById('userAdmin').innerHTML='Huynh Ngoc Man';
		document.getElementById('profileImg').src='assets/img/ADMIN/account1.jpg';
		document.getElementById('dashboard').style.display='block';
		document.getElementById('order').style.display = 'none';
		document.getElementById('product').style.display = 'none';
		document.getElementById('user').style.display = 'none';
		
		document.getElementById('item_Dashboard').style.display='block';
		document.getElementById('item_OrderManagement').style.display = 'block';
		document.getElementById('item_ProductManagement').style.display = 'none';
		document.getElementById('item_AccountManagement').style.display = 'none';

		document.getElementById("item_Dashboard").style.background="#ddd";
		document.getElementById("item_Dashboard").style.borderRight="2px solid red";
		document.getElementById("item_Dashboard").style.fontWeight="600";
	}
	else
	if (account[checkLogin].username == 'admin1'){
		document.getElementById('userAdmin').innerHTML='Nguyen Ngoc Kim Cuong';
		document.getElementById('profileImg').src='assets/img/ADMIN/account.jpg';
		document.getElementById('dashboard').style.display='block';
		document.getElementById('order').style.display = 'none';
		document.getElementById('user').style.display = 'none';
		document.getElementById('product').style.display = 'none';

		document.getElementById('item_Dashboard').style.display='block';
		document.getElementById('item_OrderManagement').style.display = 'none';
		document.getElementById('item_ProductManagement').style.display = 'block';
		document.getElementById('item_AccountManagement').style.display = 'none';
	}
	else{
		document.getElementById('userAdmin').innerHTML='ADMIN';
		document.getElementById('profileImg').src='assets/img/ADMIN/ADMIN.png';
		document.getElementById('dashboard').style.display='block';
		document.getElementById('order').style.display = 'none';
		document.getElementById('product').style.display = 'none';
		document.getElementById('user').style.display = 'none';

		document.getElementById('item_Dashboard').style.display='block';
		document.getElementById('item_OrderManagement').style.display = 'block';
		document.getElementById('item_ProductManagement').style.display = 'block';
		document.getElementById('item_AccountManagement').style.display = 'block';
	}
}

function showDashBoard(){
	var product = JSON.parse(localStorage.getItem('product'));
	var account = JSON.parse(localStorage.getItem('account'));
	document.getElementById("totalProduct").innerHTML = product.length;

	var countAccount = 0;
	for (var i = 0; i < account.length;i++)
		if (account[i].level == 0)
			countAccount++;
	document.getElementById("totalProductCus").innerHTML = countAccount;	

	var paymentProduct = JSON.parse(localStorage.getItem('paymentProduct'));
	document.getElementById("totalPayment").innerHTML = paymentProduct.length -1;

	document.getElementById("printPayment_admin").innerHTML ='';
		for(var i = 1; i < paymentProduct.length; i++) { 
		var prinfPayment =`<tr style="border:1px solid #ddd;">
		  <td>
			`+paymentProduct[i].showDetailOrder+`
			</td>

		  <td class="text-center">
		  	<p class="mt-2" >`+paymentProduct[i].time+`</p> 
		  	<p >`+paymentProduct[i].date+`</p> 
		  </td>
		  <td class="text-center">
		  	<p class="mt-2" >`+paymentProduct[i].priceTotal+` USD</p> 
		  	<button class="btn btn-dark text-white">`+paymentProduct[i].status+`</button>
		  </td>
		
	</tr>`;
	document.getElementById("printPayment_admin").innerHTML +=prinfPayment;
	}

	document.getElementById("prinfProduct_admin").innerHTML ='';
	var product =JSON.parse(localStorage.getItem('product'));
		for(var i = 0; i < product.length; i++) { 
		var prinfManage =`<tr style="border:1px solid #ddd;">
		  <td>
			<div class="cart_img_box" style="width:80%;">
			  <img src="`+product[i].image+`" width="100%" height="100%">
			</div>
			</td>
			<td>
			<div class="cart_info_box pl-3" style="height: 80px;">
			  <p class="mb-1 font-weight-bold" style="font-size: 115%;">`+product[i].name+`</p>
			  <p style="font-size: 85%">`+product[i].attribute+`</p>
			</div>
			</td> 
		  
		  <td class="text-center"><p class="mt-2" style="padding:5px;">`+product[i].price+` USD</p> </td>
		
	</tr>`;
	document.getElementById("prinfProduct_admin").innerHTML +=prinfManage;
	}
}
function printListProduct(){
	document.getElementById("prinfProduct").innerHTML ='';
	var product =JSON.parse(localStorage.getItem('product'));
		for(var i = 0; i < product.length; i++) { 
		var prinfManage =`<tr style="border:1px solid #ddd;">
			<td> <div class = "textID" style="font-size:20px; font-weigh:600">`+product[i].id+`</div> </td>
		  <td>
			<div class="cart_img_box">
			  <img src="`+product[i].image+`" width="150px">
			</div>
			</td>
			<td>
			<div class="cart_info_box pl-3">
			  <p class="mb-1 font-weight-bold" style="font-size: 20px;">`+product[i].brand+' '+product[i].name+`</p>
			  <p style="font-size: 20px;">`+product[i].attribute+`</p>
			</div>
			</td> 
		  <td class="text-center"><p class="mt-2" style="padding:5px;">`+product[i].price+` USD</p> </td>
		  <td class="d-flex">
		 	 <div data-bs-toggle="modal" data-bs-target="#deleteProductModal" onclick="showDeleteProduct(`+product[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 200%;padding-top:5px"></i></div> 
		  	<div data-bs-toggle="modal" data-bs-target="#editProductModal" onclick="update_Product(`+product[i].id+`)" ><i class="fa fa-pencil-square-o" aria-hidden="true" style="color: #000;font-size: 200%;padding-top:8px; margin-left:20px"></i></div>
		  </td>
	</tr>`;
	document.getElementById("prinfProduct").innerHTML +=prinfManage;
	}
}

function printListOrder(){
	var paymentProduct = JSON.parse(localStorage.getItem('paymentProduct'));
	document.getElementById("printPayment").innerHTML ='';
	for(var i = 1; i < paymentProduct.length; i++) { 
		var prinfPayment =`<tr style="border:1px solid #ddd;">
		<td>
			<p style="text-transform:capitalize"> consignee's name: `+paymentProduct[i].name_customer+`</p>
			<p style="text-transform:capitalize">Address: `+paymentProduct[i].address_customer+`</p>
			<p style="text-transform:capitalize">Phone number: `+paymentProduct[i].phone_customer+`</p>
			<p style="text-transform:capitalize">Payment option: `+paymentProduct[i].payment_option+`</p>
			<p class="mt-2" >Time order: `+paymentProduct[i].time+' '+paymentProduct[i].date+`</p> 
			<p>User Name: `+paymentProduct[i].userName+`</p>
		</td>
		  <td>
			`+paymentProduct[i].showDetailOrder+`
			</td>

		  <td class="text-center">
		  	<p class="mt-2" >`+paymentProduct[i].priceTotal+` USD</p> 
		  	<button onclick="suscess_payment(`+paymentProduct[i].id_payment+`)" class="btn btn-dark text-white">`+paymentProduct[i].status+`</button>
		</td>
	</tr>`;
	document.getElementById("printPayment").innerHTML +=prinfPayment;
}
console.log(paymentProduct.length);
if (paymentProduct.length == 1){
		document.getElementById("statusPayment").innerHTML ="No order!";
	}
}

function suscess_payment(id){
	var paymentProduct = JSON.parse(localStorage.getItem('paymentProduct'));
	console.log(paymentProduct[id + 1].status== "Pending Order" );
	if (paymentProduct[id + 1].status == 'Pending Order'){
		paymentProduct[id + 1].status = 'Processed Order';
		localStorage.setItem("paymentProduct",JSON.stringify(paymentProduct));
		printListOrder();
		showDashBoard();
	}	
}

function printListAccount(){
	var account = JSON.parse(localStorage.getItem('account'));
	document.getElementById("printAccount").innerHTML ='';
	var listLock = JSON.parse(localStorage.getItem('listLock'));
	console.log(listLock);
	for(var i = 1; i < account.length; i++) { 
		if (listLock != null ){
			if (listLock.includes(account[i].id) == true){
				var prinfAccount =`<tr style="border:1px solid #ddd;">
									<td>
										<p style="text-transform:capitalize">`+account[i].id+`</p>
									</td>
									<td>
										<p style="text-transform:capitalize">`+account[i].fullname+`</p>
									</td>
									<td>
									<p>`+account[i].username+`</p>
									</td>
	
									<td class="text-center">
										<p class="mt-2" >`+account[i].date+`</p> 
									</td>
									<td class="d-flex justify-content-center">
									<div  data-bs-toggle="modal" data-bs-target="#deleteAccountModal" onclick="showDeleteAccount(`+account[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 30px;padding-top:5px"></i></div> 
									<div data-bs-toggle="modal" data-bs-target="#unlockAccountModal" onclick="showUnlockAccount(`+account[i].id+`)" > <i class="fa fa-unlock-alt" aria-hidden="true" style="font-size: 30px;padding-top:5px; margin-left:20px"></i> </div>
									</td>
								</tr>`;	
			} else
			var prinfAccount =`<tr style="border:1px solid #ddd;">
			<td>
				<p style="text-transform:capitalize">`+account[i].id+`</p>
			</td>
			<td>
				<p style="text-transform:capitalize">`+account[i].fullname+`</p>
			</td>
			  <td>
			  <p>`+account[i].username+`</p>
			</td>
	
			  <td class="text-center">
				  <p class="mt-2" >`+account[i].date+`</p> 
			</td>
			<td class="d-flex justify-content-center">
				<div  data-bs-toggle="modal" data-bs-target="#deleteAccountModal" onclick="showDeleteAccount(`+account[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 30px;padding-top:5px"></i></div> 
				<div data-bs-toggle="modal" data-bs-target="#lockAccountModal" onclick="showLockAccount(`+account[i].id+`)"> <i class="fa fa-lock" aria-hidden="true" style="font-size: 30px;padding-top:5px; margin-left:20px"></i> </div>
			</td>
		</tr>`;
		document.getElementById("printAccount").innerHTML +=prinfAccount;
		}
		else{
			var prinfAccount =`<tr style="border:1px solid #ddd;">
				<td>
					<p style="text-transform:capitalize">`+account[i].id+`</p>
				</td>
				<td>
					<p style="text-transform:capitalize">`+account[i].fullname+`</p>
				</td>
				  <td>
				  <p>`+account[i].username+`</p>
				</td>
		
				  <td class="text-center">
					  <p class="mt-2" >`+account[i].date+`</p> 
				</td>
				<td class="d-flex justify-content-center">
					<div  data-bs-toggle="modal" data-bs-target="#deleteAccountModal" onclick="showDeleteAccount(`+account[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 30px;padding-top:5px"></i></div> 
					<div data-bs-toggle="modal" data-bs-target="#lockAccountModal" onclick="showLockAccount(`+account[i].id+`)"> <i class="fa fa-lock" aria-hidden="true" style="font-size: 30px;padding-top:5px; margin-left:20px"></i> </div>
				</td>
			</tr>`;
			document.getElementById("printAccount").innerHTML +=prinfAccount;

		}
		}
}

function openDashboard(){
	document.getElementById("dashboard").style.display ="block";
	document.getElementById("item_Dashboard").style.background="#ddd";
	document.getElementById("item_Dashboard").style.borderRight="2px solid red";
	document.getElementById("item_Dashboard").style.fontWeight="600";

	document.getElementById("item_OrderManagement").style.background="#fff";
	document.getElementById("item_OrderManagement").style.borderRight="none";
	document.getElementById("item_OrderManagement").style.fontWeight="";

	document.getElementById("item_ProductManagement").style.background="#fff";
	document.getElementById("item_ProductManagement").style.borderRight="none";
	document.getElementById("item_ProductManagement").style.fontWeight="";

	document.getElementById("item_AccountManagement").style.background="#fff";
	document.getElementById("item_AccountManagement").style.borderRight="none";
	document.getElementById("item_AccountManagement").style.fontWeight="";

	document.getElementById("order").style.display ="none";
	document.getElementById("product").style.display ="none";
	document.getElementById("user").style.display ="none";
}

function openOrderManagement(){
	document.getElementById("item_Dashboard").style.background="#fff";
	document.getElementById("item_Dashboard").style.borderRight="none";
	document.getElementById("item_Dashboard").style.fontWeight="400";

	document.getElementById("item_OrderManagement").style.background="#ddd";
	document.getElementById("item_OrderManagement").style.borderRight="2px solid red";
	document.getElementById("item_OrderManagement").style.fontWeight="600";

	document.getElementById("item_ProductManagement").style.background="#fff";
	document.getElementById("item_ProductManagement").style.borderRight="none";
	document.getElementById("item_ProductManagement").style.fontWeight="";

	document.getElementById("item_AccountManagement").style.background="#fff";
	document.getElementById("item_AccountManagement").style.borderRight="none";
	document.getElementById("item_AccountManagement").style.fontWeight="";

	document.getElementById("dashboard").style.display ="none";
	document.getElementById("order").style.display ="block";
	document.getElementById("product").style.display ="none";
	document.getElementById("user").style.display ="none";
}

function openProductManagement(){
	document.getElementById("item_Dashboard").style.background="#fff";
	document.getElementById("item_Dashboard").style.borderRight="none";
	document.getElementById("item_Dashboard").style.fontWeight="400";

	document.getElementById("item_OrderManagement").style.background="#fff";
	document.getElementById("item_OrderManagement").style.borderRight="none";
	document.getElementById("item_OrderManagement").style.fontWeight="";

	document.getElementById("item_ProductManagement").style.background="#ddd";
	document.getElementById("item_ProductManagement").style.borderRight="2px solid red";
	document.getElementById("item_ProductManagement").style.fontWeight="600";

	document.getElementById("item_AccountManagement").style.background="#fff";
	document.getElementById("item_AccountManagement").style.borderRight="none";
	document.getElementById("item_AccountManagement").style.fontWeight="";

	document.getElementById("dashboard").style.display ="none";
	document.getElementById("order").style.display ="none";
	document.getElementById("product").style.display ="block";
	document.getElementById("user").style.display ="none";
}

function openAccountManagement(){
	document.getElementById("item_Dashboard").style.background="#fff";
	document.getElementById("item_Dashboard").style.borderRight="none";
	document.getElementById("item_Dashboard").style.fontWeight="400";

	document.getElementById("item_OrderManagement").style.background="#fff";
	document.getElementById("item_OrderManagement").style.borderRight="none";
	document.getElementById("item_OrderManagement").style.fontWeight="";

	document.getElementById("item_ProductManagement").style.background="#fff";
	document.getElementById("item_ProductManagement").style.borderRight="none";
	document.getElementById("item_ProductManagement").style.fontWeight="";

	document.getElementById("item_AccountManagement").style.background="#ddd";
	document.getElementById("item_AccountManagement").style.borderRight="2px solid red";
	document.getElementById("item_AccountManagement").style.fontWeight="600";

	document.getElementById("dashboard").style.display ="none";
	document.getElementById("order").style.display ="none";
	document.getElementById("product").style.display ="none";
	document.getElementById("user").style.display ="block";
}
function openSelectSearch(){
	document.getElementById('filterSearch').style.display = 'flex';
	document.querySelector('.search-sort-on').style.display = 'none';
	document.querySelector('.search-sort-off').style.display = 'inline-block';
	document.getElementById('searchextend').classList.add('active');
	}
	
	
function closeSelectSearch(){
	document.getElementById('filterSearch').style.display = 'none';
	document.querySelector('.search-sort-on').style.display = 'inline-block';
	document.querySelector('.search-sort-off').style.display = 'none';
	document.getElementById('searchextend').classList.remove('active');
}
	
function searchProduct(){
	var productsearch = document.getElementById('searchProduct').value.toLowerCase();
	console.log(productsearch);
	
	var product= JSON.parse(localStorage.getItem('product'));
	var prinf='';
	var listTemp =[];
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
		console.log(priceform);
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
	for (var i = 0; i<listTemp.length; i++)
	prinf +=`<tr style="border:1px solid #ddd;">
	<td> <div class = "textID" style="font-size:20px; font-weigh:600">`+listTemp[i].id+`</div> </td>
  <td>
	<div class="cart_img_box">
	  <img src="`+listTemp[i].image+`" width="150px">
	</div>
	</td>
	<td>
	<div class="cart_info_box pl-3">
	  <p class="mb-1 font-weight-bold" style="font-size: 20px;">`+listTemp[i].brand+' '+listTemp[i].name+`</p>
	  <p style="font-size: 20px;">`+listTemp[i].attribute+`</p>
	</div>
	</td> 
  <td class="text-center"><p class="mt-2" style="padding:5px;">`+listTemp[i].price+` USD</p> </td>
  <td class="d-flex">
	  <div data-bs-toggle="modal" data-bs-target="#deleteProductModal" onclick="showDeleteProduct(`+listTemp[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 200%;padding-top:5px"></i></div> 
	  <div data-bs-toggle="modal" data-bs-target="#editProductModal" onclick="update_Product(`+listTemp[i].id+`)" ><i class="fa fa-pencil-square-o" aria-hidden="true" style="color: #000;font-size: 200%;padding-top:8px; margin-left:20px"></i></div>
  </td>
</tr>`;

	document.getElementById('prinfProduct').innerHTML = prinf;

	console.log(document.getElementById('searchextend').className == '');
	console.log(productsearch=='');
	if (listTemp.length == 0)
		document.getElementById('statusProduct').innerHTML = "Not available";
	else
		document.getElementById('statusProduct').innerHTML = "";
	
		if(document.getElementById('searchextend').className==''){
		if (productsearch == null || productsearch == ''){
			printListProduct();
			document.getElementById('statusProduct').innerHTML = "";
		}

	}

	
}

function searchOrder(){
	var paymentProduct = JSON.parse(localStorage.getItem('paymentProduct'));
	document.getElementById("printPayment").innerHTML ='';
	var name = document.getElementById('name').value;
	var date = document.getElementById('date').value;
	var dateTemp = date;
	dateTemp = dateTemp.split("-");
	var statussearch = document.getElementById('statussearch').value;
	var year = dateTemp[0];
	var month = dateTemp[1];
	var day = dateTemp[2];
	if(day.charAt(0) == '0') day = day.substring(1);
	date = day+'-'+month+'-'+year;
	console.log(date);
	var listTemp =[];
	console.log(statussearch);
	if (name != null && name != ''){
		if (date != null && date != '--'){
			if (statussearch == 'All'){
				for(var i = 1; i < paymentProduct.length; i++) 
					if (name == paymentProduct[i].userName && date == paymentProduct[i].date)
						listTemp.push(paymentProduct[i]);
			}
			else{
				for(var i = 1; i < paymentProduct.length; i++) 
					if (name == paymentProduct[i].userName && date == paymentProduct[i].date && statussearch == paymentProduct[i].status)
						listTemp.push(paymentProduct[i]);
			}
		} else { 
				if (statussearch == 'All'){
					for(var i = 1; i < paymentProduct.length; i++) 
						if (name == paymentProduct[i].userName)
							listTemp.push(paymentProduct[i]);
				}
				else{
					for(var i = 1; i < paymentProduct.length; i++) 
						if (name == paymentProduct[i].userName && statussearch == paymentProduct[i].status)
							listTemp.push(paymentProduct[i]);
				}
			}
	} 
	else{
		if (date != null && date != '--'){
			if (statussearch == 'All'){
				for(var i = 1; i < paymentProduct.length; i++) 
					if (date == paymentProduct[i].date)
						listTemp.push(paymentProduct[i]);
			}
			else{
				for(var i = 1; i < paymentProduct.length; i++) 
					if (date == paymentProduct[i].date && statussearch == paymentProduct[i].status)
						listTemp.push(paymentProduct[i]);
			}
		} else { 
				if (statussearch == 'All'){
					for(var i = 1; i < paymentProduct.length; i++) 
							listTemp.push(paymentProduct[i]);
				}
				else{
					for(var i = 1; i < paymentProduct.length; i++) 
						if (statussearch == paymentProduct[i].status)
							listTemp.push(paymentProduct[i]);
				}
			}
	}
	

	for(var i = 0; i < listTemp.length; i++) { 
		var prinfPayment =`<tr style="border:1px solid #ddd;">
		<td>
			<p style="text-transform:capitalize"> consignee's name: `+listTemp[i].name_customer+`</p>
			<p style="text-transform:capitalize">Address: `+listTemp[i].address_customer+`</p>
			<p style="text-transform:capitalize">Phone number: `+listTemp[i].phone_customer+`</p>
			<p style="text-transform:capitalize">Payment option: `+listTemp[i].payment_option+`</p>
			<p class="mt-2" >Time order: `+listTemp[i].time+' '+listTemp[i].date+`</p> 
			<p>User Name: `+listTemp[i].userName+`</p>
		</td>
		  <td>
			`+listTemp[i].showDetailOrder+`
			</td>

		  <td class="text-center">
		  	<p class="mt-2" >`+listTemp[i].priceTotal+` USD</p> 
		  	<button onclick="suscess_payment(`+listTemp[i].id_payment+`)" class="btn btn-dark text-white">`+listTemp[i].status+`</button>
		</td>
		
	</tr>`;
	document.getElementById("printPayment").innerHTML +=prinfPayment;
	}

	if (listTemp.length == 0)
		document.getElementById('statusPayment').innerHTML = "Not available";
	else
		document.getElementById('statusPayment').innerHTML = "";

}

function searchAccount(){
	var account = JSON.parse(localStorage.getItem('account'));
	var username = document.getElementById('username').value;
	var fullname = document.getElementById('fullname').value.toLowerCase();
	var dateSign = document.getElementById('dateSign').value;
	console.log(fullname);
	var listTemp =[];
	if (username != null && username != ''){
		if (fullname != null && fullname != ''){
			if (dateSign != null && dateSign != ''){
			for(var i = 1; i < account.length; i++) 
				if (username == account[i].username && dateSign == account[i].date && fullname == account[i].fullname.toLowerCase())
					listTemp.push(account[i]);
			}
			else 
				for(var i = 1; i < account.length; i++) 
					if (username == account[i].username && fullname == account[i].fullname.toLowerCase())
						listTemp.push(account[i]);
		} 
		else {
			if (dateSign != null && dateSign != ''){
				for(var i = 1; i < account.length; i++) 
					if (username == account[i].username && dateSign == account[i].date)
						listTemp.push(account[i]);
				}
				else 
					for(var i = 1; i < account.length; i++) 
						if (username == account[i].username)
							listTemp.push(account[i]);
		}
	}
	else{
		if (fullname != null && fullname != ''){
			if (dateSign != null && dateSign != ''){
			for(var i = 1; i < account.length; i++) 
				if (dateSign == account[i].date && fullname == account[i].fullname.toLowerCase())
					listTemp.push(account[i]);
			}
			else 
				for(var i = 1; i < account.length; i++) 
				if (fullname == account[i].fullname.toLowerCase())
						listTemp.push(account[i]);
		} 
		else {
			if (dateSign != null && dateSign != ''){
				for(var i = 1; i < account.length; i++) 
					if (dateSign == account[i].date)
						listTemp.push(account[i]);
				}
				else 
					for(var i = 1; i < account.length; i++) 
							listTemp.push(account[i]);
		}
	}
	document.getElementById("printAccount").innerHTML =""; 
	for(var i = 0; i < listTemp.length; i++) { 
		if (listLock.includes(listTemp[i].id) == true){
			var prinfAccount =`<tr style="border:1px solid #ddd;">
								<td>
									<p style="text-transform:capitalize">`+listTemp[i].id+`</p>
								</td>
								<td>
									<p style="text-transform:capitalize">`+listTemp[i].fullname+`</p>
								</td>
								<td>
								<p>`+listTemp[i].username+`</p>
								</td>

								<td class="text-center">
									<p class="mt-2" >`+listTemp[i].date+`</p> 
								</td>
								<td class="d-flex justify-content-center">
								<div  data-bs-toggle="modal" data-bs-target="#deleteAccountModal" onclick="showDeleteProduct(`+listTemp[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 30px;padding-top:5px"></i></div> 
								<div data-bs-toggle="modal" data-bs-target="#unlockAccountModal" onclick="showUnlockAccount(`+listTemp[i].id+`)" > <i class="fa fa-unlock-alt" aria-hidden="true" style="font-size: 30px;padding-top:5px; margin-left:20px"></i> </div>
								</td>
							</tr>`;	
		} else
		var prinfAccount =`<tr style="border:1px solid #ddd;">
		<td>
			<p style="text-transform:capitalize">`+listTemp[i].id+`</p>
		</td>
		<td>
			<p style="text-transform:capitalize">`+listTemp[i].fullname+`</p>
		</td>
		  <td>
		  <p>`+listTemp[i].username+`</p>
		</td>

		  <td class="text-center">
		  	<p class="mt-2" >`+listTemp[i].date+`</p> 
		</td>
		<td class="d-flex justify-content-center">
			<div  data-bs-toggle="modal" data-bs-target="#deleteAccountModal" onclick="showDeleteProduct(`+listTemp[i].id+`)" class="cart_button_delete"><i class="fa fa-trash " aria-hidden="true" style="color: #000;font-size: 30px;padding-top:5px"></i></div> 
			<div data-bs-toggle="modal" data-bs-target="#lockAccountModal" onclick="showLockAccount(`+listTemp[i].id+`)"> <i class="fa fa-lock" aria-hidden="true" style="font-size: 30px;padding-top:5px; margin-left:20px"></i> </div>
		</td>
	</tr>`;
	document.getElementById("printAccount").innerHTML +=prinfAccount;
	}

	if (listTemp.length == 0)
		document.getElementById('statusAccount').innerHTML = "Not available";
	else
		document.getElementById('statusAccount').innerHTML = "";
	
	if ((username == null || username == '') && (fullname == null || fullname == '') && (dateSign == null || dateSign == '')){
		document.getElementById('statusAccount').innerHTML = "";
		printListAccount();
	}

}

function update_Product(id){
	var product = JSON.parse(localStorage.getItem('product'));
	for (var i = 0; i< product.length; i++)
		if (id == product[i].id){
			document.getElementById('idProduct').value = product[i].id;
			document.getElementById('nameProduct').value = product[i].name;
			document.getElementById('brand').value = product[i].brand.toLowerCase();
			document.getElementById('type').value = product[i].type;
			document.getElementById('attributeProduct').value = product[i].attribute;
			document.getElementById('sizeProduct').value = product[i].size;
			document.getElementById('priceProduct').value = product[i].price;	
			document.getElementById('decProduct').value = product[i].dec;
			document.getElementById('detailProduct').value = product[i].details;
			document.getElementById('claimProduct').value = product[i].claims;
			document.getElementById('ingredientProduct').value = product[i].ingredients;
			document.getElementById('usageProduct').value = product[i].usage;
			document.getElementById('imgbefore').src=product[i].image;
			console.log(document.getElementById('imgafter').src);

		}
}
function transformLetter(str){
	var temp = str.charAt(0).toUpperCase() + str.slice(1);
	for (var i = 1; i < str.length; i++){
		if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z' && str.charAt(i-1) == ' '){
			temp = temp.slice(0,i) + str.charAt(i).toUpperCase() + temp.slice(i+1);
		}
	}
	console.log(temp);
	return temp;
}
function saveUpdate_Product(){
	var product = JSON.parse(localStorage.getItem('product'));
	var idProduct = document.getElementById('idProduct').value;

	var brandNew = document.getElementById('brand').value;
	brandNew = transformLetter(brandNew);
	var nameNew = document.getElementById('nameProduct').value;
	var typeNew = document.getElementById('type').value;
	typeNew = transformLetter(typeNew);
	var attributeNew = document.getElementById('attributeProduct').value;
	var sizeNew = document.getElementById('sizeProduct').value;
	var priceNew = document.getElementById('priceProduct').value;
	var decNew = document.getElementById('decProduct').value;
	var detailsNew = document.getElementById('detailProduct').value;
	var claimsNew = document.getElementById('claimProduct').value;
	var ingredientsNew = document.getElementById('ingredientProduct').value;
	var usageNew = document.getElementById('usageProduct').value;
	document.getElementById('statusProduct').innerHTML = '';
	if (idProduct == null || idProduct == ''||brandNew == null || brandNew == '' || nameNew == null || nameNew == '' || typeNew == null || typeNew == '' || attributeNew == null || attributeNew == ''||sizeNew == null || sizeNew == ''|| priceNew ==null || priceNew == ''||decNew == null || decNew == ''||detailsNew == null || detailsNew == '' || claimsNew == null || claimsNew == ''|| ingredientsNew == null || ingredientsNew == ''|| usageNew == null || usageNew == '')
		document.getElementById('statusProduct').innerHTML = "PLEASE FILL OUT THE INFORMATION!";
	else{
		for (var i = 0; i<product.length; i++)
			if (idProduct == product[i].id){
				product[i].id = idProduct;
				product[i].brand = brandNew;
				product[i].name = nameNew;
				product[i].type = typeNew;
				product[i].attribute = attributeNew;
				product[i].size = sizeNew;
				product[i].price = priceNew;
				product[i].dec = decNew;
				product[i].details = detailsNew;
				product[i].claims = claimsNew;
				product[i].ingredients = ingredientsNew;
				product[i].usage =usageNew;
		
				if (document.getElementById('imgafter').src != location.href )
					product[i].image = 	document.getElementById('imgafter').src;
			
				localStorage.setItem("product",JSON.stringify(product));
				document.getElementById('imgafter').src = '';
				showDashBoard();	
				printListProduct();
				openProductManagement();
				var myModal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'));
				console.log(myModal);
				myModal.hide();
			}
	}
}

function changeimg(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgafter').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}

function saveAddProduct(){
	var product = JSON.parse(localStorage.getItem('product'));
	var idProductnew = parseInt(document.getElementById('idProductnew').value);
	console.log(idProductnew);
	var brandNew = document.getElementById('brandnew').value;
	brandNew = transformLetter(brandNew);
	console.log(brandNew);
	var nameNew = document.getElementById('nameProductnew').value;
	console.log(nameNew);
	var typeNew = document.getElementById('typenew').value;
	typeNew = transformLetter(typeNew);
	console.log(typeNew);
	var attributeNew = document.getElementById('attributeProductnew').value;
	var sizeNew = document.getElementById('sizeProductnew').value;
	var priceNew =parseFloat(document.getElementById('priceProductnew').value);
	var decNew = document.getElementById('decProductnew').value;
	var detailsNew = document.getElementById('detailProductnew').value;
	var claimsNew = document.getElementById('claimProductnew').value;
	var ingredientsNew = document.getElementById('ingredientProductnew').value;
	var usageNew = document.getElementById('usageProductnew').value;
	document.getElementById('statusProductAdd').innerHTML = '';
	if (idProductnew == null || idProductnew == ''||brandNew == null || brandNew == '' || nameNew == null || nameNew == '' || typeNew == null || typeNew == '' || attributeNew == null || attributeNew == ''||sizeNew == null || sizeNew == ''|| priceNew ==null || priceNew == ''||decNew == null || decNew == ''||detailsNew == null || detailsNew == '' || claimsNew == null || claimsNew == ''|| ingredientsNew == null || ingredientsNew == ''|| usageNew == null || usageNew == '')
		document.getElementById('statusProductAdd').innerHTML = "PLEASE FILL OUT THE INFORMATION!";
	else{
		var check = true;
		for (var i = 0; i < product.length; i++)
		if (idProductnew == product[i].id){
			document.getElementById('statusProductAdd').innerHTML = "ID duplicated";
			check =false;
		}
		
		if (check == true){
			if (document.getElementById('imgafternew').src != location.href )
				var image = document.getElementById('imgafternew').src;
				var bestSeller = 0;
			var temp = {id:idProductnew,bestSeller:bestSeller,brand : brandNew,name:nameNew,attribute:attributeNew,type:typeNew,size:sizeNew,price:priceNew,dec:decNew,details:detailsNew,claims:claimsNew,ingredients:ingredientsNew,usage:usageNew,image:image};
			console.log(temp);
			product.push(temp);
			console.log(product[product.length-1]);
			console.log(product[product.length-1].id);
			localStorage.setItem("product",JSON.stringify(product));
			document.getElementById('imgafternew').src = '';
			printListProduct();
			showDashBoard();	
			var myModal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
			console.log(myModal);
			myModal.hide();
		}
		
	}

}

function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgafternew').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}

function showDeleteProduct(id){
	var product = JSON.parse(localStorage.getItem('product'));
	console.log(id);
	for (var i = 0; i < product.length; i++)
		if (id == product[i].id){
			document.getElementById('textQuestion').innerHTML = 'Delete '+product[i].brand + ' ' + product[i].name + ' ' + product[i].attribute + '?';
			document.getElementById('textQuestion').value = i;
			console.log(document.getElementById('textQuestion').value);
			break;
		}
}

function deleteProduct(){
	var id = document.getElementById('textQuestion').value;
	console.log(id);
	var product = JSON.parse(localStorage.getItem('product'));
			product.splice(id,1);
			localStorage.setItem('product',JSON.stringify(product));
			printListProduct();
			showDashBoard();
			
}

function showDeleteAccount(id){
	var account = JSON.parse(localStorage.getItem('account'));
	console.log(id);	
	for (var i = 0; i < product.length; i++)
		if (id == product[i].id){
			document.getElementById('textQuestionAccount').innerHTML = 'Delete '+account[i].username+ '?';
			document.getElementById('textQuestionAccount').value = i;
			console.log(document.getElementById('textQuestionAccount').value);
			break;
		}
}

function deleteAccount(){
	var id = document.getElementById('textQuestionAccount').value;
	var account = JSON.parse(localStorage.getItem('account'));
			account.splice(id,1);
			localStorage.setItem('account',JSON.stringify(account));
			showDashBoard();
			printListAccount();
}

function showLockAccount(id){
	var account = JSON.parse(localStorage.getItem('account'));
	for (var i = 1; i < account.length; i++)
		if (id == account[i].id){
			document.getElementById('textLockAccount').innerHTML = 'Lock '+account[i].username+ '?';
			document.getElementById('textLockAccount').value = i;
			console.log(document.getElementById('textLockAccount').value);
			break;
		}
}

function LockAccount(){
	var id = document.getElementById('textLockAccount').value;
	var account = JSON.parse(localStorage.getItem('account'));
	var listLock = JSON.parse(localStorage.getItem('listLock'));	
			listLock.push(account[id].id);
			console.log(listLock);
			localStorage.setItem('listLock',JSON.stringify(listLock));
			showDashBoard();
			printListAccount();
	
}

function showUnlockAccount(id){
	var account = JSON.parse(localStorage.getItem('account'));
	for (var i = 0; i < account.length; i++)
		if (id == account[i].id){
			document.getElementById('textunLockAccount').innerHTML = 'Unlock '+account[i].username+ '?';
			document.getElementById('textunLockAccount').value = i;
			console.log(document.getElementById('textunLockAccount').value);
			break;
		}
}

function unLockAccount(){
	var id = document.getElementById('textunLockAccount').value;
	var listLock = JSON.parse(localStorage.getItem('listLock'));
	var account = JSON.parse(localStorage.getItem('account'));
		console.log(listLock);
		for (var i = 0; i < listLock.length; i++)
			if (listLock[i] == account[id].id){
				listLock.splice(i,1);
				localStorage.setItem('listLock',JSON.stringify(listLock));
				console.log(listLock);
				printListAccount();
				showDashBoard();
				break;
			}
		
}