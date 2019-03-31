var query = document.querySelector('#query');
	var ans = document.querySelector('#ans');
	document.querySelector('.icon').addEventListener('click',()=>{
		document.querySelector('.container').style.width = '350px'
		document.querySelector('.container').style.height = '500px'
		document.querySelector('.icon').style.display = 'none'
	})
	document.querySelector('#minimize').addEventListener('click',()=>{
		document.querySelector('.container').style.width = '0px'
		document.querySelector('.container').style.height = '0px'
		document.querySelector('.icon').style.display = 'block'
	})
	document.querySelector('#close').addEventListener('click',()=>{
		ans.textContent='';
		query.value = "";
		document.querySelector('.container').style.width = '0px'
		document.querySelector('.container').style.height = '0px'
		document.querySelector('.icon').style.display = 'block'
	})
	document.querySelector('#fullscreen').addEventListener('click',()=>{
		if(document.querySelector('.container').style.width=='100%')
		{
			document.querySelector('.container').style.width = '350px'
			document.querySelector('.container').style.height = '500px'
		}
		else{
			document.querySelector('.container').style.width = '100%'
			document.querySelector('.container').style.height = '830px'
		}
	})
	var queryUpdate = (x)=>{
		ans.style.fontSize = '20px'
		var data = query.value;
		
		if(x=='X'){
			query.value = data.substring(0,data.length-1);
		}else if(x=='AC'){
			query.value = "";
		}
		else{
			query.value += x;
		}
		solveQuery();
	}
	var solveQuery = ()=>{
		try{
			ans.textContent = eval(query.value)
		}
		catch(err){
			ans.textContent = ' '
		}
	}