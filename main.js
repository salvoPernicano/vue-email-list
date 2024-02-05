const { createApp } = Vue

  createApp({
    data() {
      return {
        emailArray : [],
        isLoaded : false
      }
    },
    methods : {
        getEmail(){
            this.isLoaded = true;
            this.emailArray = [];
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                    this.emailArray.push(result.data.response);
                    if (this.emailArray.length === 10){
                        this.isLoaded = false
                     }
                })
            }
         console.log(this.emailArray);
    
        }
    }
  }).mount('#app')
