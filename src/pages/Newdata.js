import React, {useState,useEffect} from 'react'
import axios from 'axios'
function Newdata({cat}) {
    const [news, setnews] = useState([])
    const getNews = () => {
        axios.get(
            cat ?`https://newsapi.org/v2/everything?q=${cat}&apiKey=90049effc20b4f7991a330c12b620a9e`
            :`https://newsapi.org/v2/top-headlines?country=in&apiKey=90049effc20b4f7991a330c12b620a9e`
            )
            .then((res) => {
                setnews(res.data.articles)
            })
    }
    useEffect(() => {
        getNews();
      }, [cat]);
    return (
        <div className='container-fluid'>
            <h1 className='text-center bg-black text-white'>{cat}</h1>
            <div className='row'>
                {
                    news.map((value) => {
                        return (
                            <div className='col-3'>
                                <div class="card" style={{width: "20rem",boxShadow:"2px 2px 10px silver",height:"auto"}}>
                                    <img src={value.urlToImage} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.description}</p>
                                            <a href={value.url} class="btn btn-primary">Read More</a>
                                        </div>
                                </div>
                                <br/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Newdata