export interface GenericResponse<T=any>{
    status:number;
    message:string;
    data:T;
}