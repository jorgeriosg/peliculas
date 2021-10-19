
// consulta consumo de api
const api = "https://api.themoviedb.org/3"
export function get(path){
    return fetch( api + path, {
        headers: {
          Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjhkMmYxODJmOWY2YmNlZjBhOTg5NmYyMGU4Zjc4MCIsInN1YiI6IjYxNmRhNzkwM2Q0ZDk2MDA4ZDZmNTU3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujhnEKEN7_Ctzk0F-s84YArUtN9uAzDxFQXZ0fQyB4s",
          "Content-Type":"application/json;charset=utf-8",
        },
      })
       .then((result) => result.json())
}