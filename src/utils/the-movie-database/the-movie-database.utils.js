export async function discoverMoviesPopular(){
    const url = 'https://api.themoviedb.org/3/movie/popular';
    const options = {
        page: 1,
        language: "pt-BR",
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmIxN2YwODExNmNmODVlYTI5MDM0MWY3MTE5ZDlmZiIsInN1YiI6IjY0ZjhiODkzMzNhMzc2MDBlMTNjZTM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjWrPi62rY7q4OjJnCYNSmvWVbcVjva4cKI6Ep4aW0w'
      }
    };
    try {
        const response = await fetch(url, options);
        options.page = 2
        const response2 = await fetch(url, options)
        const jsonData = await response.json();
        const jsonData2 = await response2.json();

        const margedData = [...jsonData.results, ...jsonData2.results];
        return margedData;

      } catch (error) {
        console.log(error)
        }
}

export async function discoverMoviesQuery(name){
    const url = 'https://api.themoviedb.org/3/search/movie'
    const options = {
        page: 1,
        language: "pt-BR",
        query: name,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmIxN2YwODExNmNmODVlYTI5MDM0MWY3MTE5ZDlmZiIsInN1YiI6IjY0ZjhiODkzMzNhMzc2MDBlMTNjZTM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjWrPi62rY7q4OjJnCYNSmvWVbcVjva4cKI6Ep4aW0w'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const jsonData = await response.json();
        return jsonData;

      } catch (error) {
        console.log(error)
        }
}


const baseUrlImage = "https://image.tmdb.org/t/p/original"
    const urlVideo = 'https://api.themoviedb.org/3/movie/502356/videos?language=en-US&page=1&sort_by=popularity.desc';
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=shark'