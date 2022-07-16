export interface IUser {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Datos[];
    support:     Support;
}

export interface Datos {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
