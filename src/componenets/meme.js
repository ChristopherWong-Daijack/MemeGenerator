import react,{useState} from 'react';
import '../css/meme.css';

function Meme(){
    const url = "https://api.imgflip.com/get_memes";
    /*const [imgData,setImgData] = useState(()=>{
        grabData()
    });*///Default state is the function. Which will run so that there is always an img displayed first. 
    //Function is in useState function so it runs once on load.
    
    /*const [nameData,setNameData]= useState(()=>{
        grabData();
    })*/

    const [memeData=[],setMemeData]= useState(()=>{
        grabData();
    })


    async function  grabData(){
        var response= await fetch(url);
        var data = await response.json();
        var arrData = data.data.memes;
        var num = Math.floor(Math.random()*arrData.length);//random number generator for displaying a random object from array in arrData
        // console.log(num);
        // console.log(arrData.length);
        console.log(arrData[num]);
        setMemeData(arrData[num]);
    }
   
   

    return(
        <>
        <div>
            <img src={memeData.url} className="Image"></img>
        </div>
        <p>{memeData.name}</p>
        <button onClick={grabData} className="Button">Click me to change meme</button>
        <p>Contains Dank Memes</p>
        </>
    )
}

export default Meme;