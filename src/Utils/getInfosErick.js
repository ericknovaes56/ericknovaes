
const getInfosErick = async () => {


    try {


        if (localStorage.getItem("data")){
            const data = JSON.parse(localStorage.getItem("data"))
            if (data.message){
                localStorage.removeItem("nome")
                localStorage.removeItem("data")

                return
            }
            if (data.remove){
                localStorage.removeItem("data")
                window.location.href=""
            }
            return JSON.parse(localStorage.getItem("data"))
        }

        if (!localStorage.getItem("nome")){
            localStorage.setItem('nome', "ericknovaes56")
        }

        const nome = localStorage.getItem('nome');

        const newFetch = await fetch(`https://api.github.com/users/${nome}`);
        const githubData = await newFetch.json();



        if (githubData) {
            if (!githubData.message){

                if (!githubData.name) githubData.name = githubData.login;
                localStorage.setItem("data" , JSON.stringify(githubData))

            }else{


                const newFetch = await fetch(`https://api.github.com/users/ericknovaes56`);
                const githubData = await newFetch.json();

                if (githubData && githubData.message){
                    localStorage.setItem("nome" , "ericknovaes56")
                    localStorage.setItem("data" , JSON.stringify({name:"Erick Novaes56", bio:"Algo deu errado !" , login: "ericknovaes56", remove:true})) 
                    localStorage.removeItem("repo")
                    return {name:"Erick Novaes56", bio:"Algo deu errado !" , login: "ericknovaes56" , remove:true}
                }

                localStorage.removeItem("nome")
                localStorage.removeItem("data") 
                localStorage.removeItem("repo")
    
                if (!githubData.name) githubData.name = githubData.login;

                localStorage.setItem("data" , JSON.stringify(githubData))
                
                localStorage.setItem("nome" , "ericknovaes56")

                return githubData
                
            }

            return githubData;
        } else {
        
            localStorage.removeItem("nome")
            localStorage.removeItem("data")
            localStorage.removeItem("repo")
            throw 'Data vazia!';
        }

    } catch (error) {
        console.error(error);
    }
}

export default getInfosErick;
