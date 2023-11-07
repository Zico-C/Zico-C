// Generated by https://quicktype.io

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}
// Generated by https://quicktype.io

export interface Test {
    posts:      Post[];
    locationIP: LocationIP[];
    data:       Data;
}

export interface Data {
    user:        User;
    accessToken: string;
}

export interface User {
    userId:   number;
    username: string;
    email:    string;
    password: string;
}

export interface LocationIP {
    id:         number;
    name:       string;
    updateTime: string;
    latitude:   number;
    longitude:  number;
}

export interface Post {
    id:        number;
    title:     string;
    subtitle:  string;
    author:    string;
    memberNum: number;
}