import  throttle  from 'lodash.throttle';

// const user = {
// 	name: 'Mango',
// 	age: 2
// };
// console.log(JSON.stringify(user));
//  const savedUserData = '{"name":"Mango","age":2}';
//  console.log(JSON.parse(savedUserData));

//  localStorage.setItem('my-data', JSON.stringify({name:'Mango', age: 2}));
//  const saveData = localStorage.getItem('my-data');
//  console.log('saveData',saveData);
 
//  const parsedData =JSON.parse(saveData);
//  console.log('parsedData', parsedData);

 const STORAGE_KEY ='feedbeck-msg'

 const formData={}

 const refs ={
	 form: document.querySelector('.js-feedbeck-form'),
	 textarea: document.querySelector('.js-feedbeck-form textarea'),
 };
 refs.form.addEventListener('submit',onFormSubmit )
 refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000))
 populateTextarea()

 refs.form.addEventListener('input', e =>{
	 formData[e.target.name] = e.target.value
	 console.log(formData);
	 
 })

	function onFormSubmit(evt){
		evt.preventDefault();
		evt.currentTarget.reset()
		console.log(evt);
		localStorage.removeItem(STORAGE_KEY)
	}

function onTextareaInput(evt){
	const message = evt.target.value
	localStorage.setItem(STORAGE_KEY, message)
	console.log(message);
	
}

 function populateTextarea(){
	 const savedMessage = localStorage.getItem(STORAGE_KEY);
	 if (savedMessage) {
		console.log(savedMessage);
		refs.textarea.value = savedMessage
	 }
	 
	 
 }