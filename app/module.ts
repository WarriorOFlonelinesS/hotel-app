export interface IAccounts {
    email: string | null,
    token: string | null,
    id: string | null;
}

export interface IRooms{
    user:{
        password: string,
        image: string
    } 
}