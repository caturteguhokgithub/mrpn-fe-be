import axios, { AxiosError } from "axios";

const baseURL = process.env.BACKEND_URL;

export function instanceApi(token:string){
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config;
  });

  instance.interceptors.response.use(
      response => {
        return response;
      },
      (error: AxiosError) => {
        if (error.status == 401) {
          return {
              "meta": {
                  "code": 401,
                  "status": "error",
                  "message": "Unauthenticated"
              },
              "data":null
            }
        }else{
          return {
            "meta": {
                "code": error.status ? error.status : 500,
                "status": "error",
                "message": "internal server error"
            },
            "data":null
          }
        }
      }
  )
  return instance
}