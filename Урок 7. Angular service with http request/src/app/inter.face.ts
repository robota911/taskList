export interface IDblog {
    id:     number,
    author: string,
    title:  string,
    text:   string
}

export interface IDblogRequest {
    author: string,
    title:  string,
    text:   string
}

export interface IDblogResponse extends IDblogRequest {
    id:     number,
}