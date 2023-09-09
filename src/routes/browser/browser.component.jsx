import { useContext, useEffect, useState } from "react"
import { BrowserSelectOption } from "../../components/browser-select-option/browser-select-option.component"
import { discoverMoviesPopular } from "../../utils/the-movie-database/the-movie-database.utils"
import { Carousel } from "../../components/carousel/carousel.component"
import { BrowserHeader } from "../../components/browser-header/browser-header.component"
import { UserContext } from "../../contexts/user.context"
import { BrowserLoading } from "../../components/browser-loading/browser-loading.component"

export function Browser(){
    const usercontext = useContext(UserContext)
    const [chosenProfile, setChosenProfile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [request, setRequest] = useState({
        images: [],
        response: null
    })

    useEffect(()=>{
        if(chosenProfile){
            async function waitMovie(){
                console.log(await discoverMoviesPopular())
                request.response = await discoverMoviesPopular()
                for(let item of request.response){
                    request.images.push(`https://image.tmdb.org/t/p/original${item.poster_path}`)
                }
                setRequest({...request})
            }
            waitMovie()
            
        }
    }, [chosenProfile])
    useEffect(()=>{
        if(chosenProfile){
            setLoading(true)
            const timeoutId = setTimeout(() => {
                setLoading(false);
            }, 1500);

            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [chosenProfile])

    return(
        <>  
            {loading && 
                <BrowserLoading userImage={usercontext.usersImages[chosenProfile.profile.img]}/>
            }
            {!chosenProfile &&
                <BrowserSelectOption setProfile = {setChosenProfile}/>
            }
            
            {chosenProfile && !loading &&
            <>  
                <BrowserHeader chosenProfile={chosenProfile} setProfile={setChosenProfile}></BrowserHeader>
            </>
            }
        </>
    )
}