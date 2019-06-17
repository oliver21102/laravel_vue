//var urlUsers = 'https://randomuser.me/api/?results=10';
 
		new Vue({
			el: '#crud',

			created:function(){
				this.getkeeps();
			},
			data:{
				keeps:[],
				newKeep:'',
				errors:[],
			},
			methods:{
				getkeeps:function(){
					var urlKeeps='tasks';
					axios.get(urlKeeps).then(response=>{
						this.keeps=response.data
					});
				},
				deleteKeep:function(keep){
					/*alert(keep.id);*/ 

					var url= 'tasks/'+keep.id;
					axios.delete(url).then(response=>{
						this.getkeeps();
						toastr.success('Eliminado correctamente');
					});
				},

				createKeep:function(){
					var url= 'tasks';
			 
					axios.post(url,{
						 keep:this.newKeep
					}).then(response=>{
						 	 this.getkeeps();
						 	this.newKeep='';
						 	this.errors=[];
						 	$('#create').modal('hide') ;
						toastr.success(' nueva tarea creado correctamente');   
					}).catch(error => { 
						/*this.errors = error.response.data */
						this.errors='Corrija los datos para crear con exito';
				   });  
 

				}

			}
		
		});