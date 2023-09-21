import { useContext, useEffect, useState } from "react"
import { BrowserSelectOption } from "../../components/browser-select-option/browser-select-option.component"
import { discoverMoviesPopular } from "../../utils/the-movie-database/the-movie-database.utils"
import { BrowserCarousel } from "../../components/browser-carousel/browser-carousel.component"
import { BrowserHeader } from "../../components/browser-header/browser-header.component"
import { UserContext } from "../../contexts/user.context"
import { BrowserLoading } from "../../components/browser-loading/browser-loading.component"
import { BrowserMainBackgroundDiv, BrowserMovieBackgroundDiv } from "./browser.style"
import { useNavigate } from "react-router-dom"

export function Browser(){
    const usercontext = useContext(UserContext)
    const navigate = useNavigate()
    const [chosenProfile, setChosenProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [backgroundMovie, setBackgroudMovie] =useState({
        imagePoster: null,
        imageBackground: null,
        informations: null,
    })
    const [request, setRequest] = useState({
        imagesBackground: [],
        imagesPoster: [],
        response: null
    })


    useEffect(()=>{
        if(!usercontext.currentUser){
            navigate('/login')
        }
        if(chosenProfile){
            setLoading(true)
            async function waitMovie(){
                console.log(await discoverMoviesPopular())
                request.response = await discoverMoviesPopular()
                request.imagesBackground = []
                request.imagesPoster = []
                for(let item of request.response){
                    request.imagesBackground.push(`https://image.tmdb.org/t/p/original${item.backdrop_path}`)
                    request.imagesPoster.push(`https://image.tmdb.org/t/p/original${item.poster_path}`)
                }
                setRequest({...request})
                console.log(request)
                var randomIndice = Math.floor(Math.random() * 39);
                backgroundMovie.imagePoster = request.imagesPoster[randomIndice]
                backgroundMovie.imageBackground = request.imagesBackground[randomIndice]
                backgroundMovie.informations = request.response[randomIndice]
                backgroundMovie.informations.overview = backgroundMovie.informations.overview.slice(0, backgroundMovie.informations.overview.indexOf('.')) + '.'
                setBackgroudMovie({...backgroundMovie})
             
                const timeoutId = setTimeout(() => {
                    setLoading(false);
                }, 1500);

                return () => {
                    clearTimeout(timeoutId);
                }
            }
            waitMovie()
           
        }
    }, [chosenProfile])
    

    
    return(
        <>  
            {loading && chosenProfile &&
                <BrowserLoading userImage={usercontext.usersImages[chosenProfile.profile.img]}/>
            }
            {!chosenProfile &&
                <BrowserSelectOption setProfile = {setChosenProfile}/>
            }
            
            {!loading && chosenProfile &&
            <>  
                <BrowserMainBackgroundDiv background={backgroundMovie.imageBackground}></BrowserMainBackgroundDiv>
                        <BrowserHeader chosenProfile={chosenProfile} setProfile={setChosenProfile}></BrowserHeader>
                        <BrowserMovieBackgroundDiv>
                            <div style={{width: "40%", marginLeft: "3.5rem", marginTop: "10rem",  height: "70vw", maxHeight: "50vh", zIndex: "1"}}>                    
                                <h1 style={{fontSize: "50px"}}>{backgroundMovie.informations.original_title}</h1>
                                <p style={{fontSize: "20px"}}>{backgroundMovie.informations.overview}</p>
                            </div>
                            <div style={{marginTop: "1rem", marginLeft: "3.5rem", marginRight: "3.5rem"}}>
                                <BrowserCarousel images={request.imagesPoster}></BrowserCarousel>
                            </div>
                            <div style={{marginTop: "5rem", marginLeft: "3.5rem"}}>
                                <BrowserCarousel images={request.imagesPoster}></BrowserCarousel>
                            </div>
                            <div style={{marginTop: "5rem", marginLeft: "3.5rem"}}>
                                <BrowserCarousel images={request.imagesPoster}></BrowserCarousel>
                            </div>
                        </BrowserMovieBackgroundDiv>
            </>
            }
        </>
    )
}