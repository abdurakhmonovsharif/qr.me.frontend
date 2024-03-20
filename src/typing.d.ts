type User = {
    id?: string;
    email: string;
    name: string;
    password?: string;
    active: boolean;
    block: boolean;
    last_online: string;
    url:string;
}
type PageDinamicSiteResponse={
    theme:Theme,
    links:Link[],
    sections:Section[],
    id?: string;
    qr_code: string;
    view_count: number;
    type: string;
    theme?: string;
    userId?: string;
    end_date: string;
    password_edit: string;
    password_view: string;
    max_view_count: number;
    max_edit_count: number;
    user:User,
    contact:Contact,
}
type Theme = {
    id?: string;
    background_color: string;
    font_family: string;
    color: string;
}
type Options = {
    end_date: string;
    password_edit: string;
    password_view: string;
    max_view_count: number;
    max_edit_count: number;
}
type Page = {
    id?: string;
    qr_code: string;
    view_count: number;
    type: string;
    theme?: string;
    userId?: string;
}

type CreatePageDto = {
    qr_code: string;
    view_count: number;
    password: string;
    type: string;
    sections: Section[];
    links: Link[];
    themeId: string;
    userId: string;
    contact: Contact
}
type SampleSiteProps = {
    sections: Section[];
    contact: Contact;
    links: Links[],
    theme: Theme
}
type Section = {
    id?: string;
    type: string;
    imageURL: string;
    title: string;
    content: string;
    sliders: Slider[];
    index?: number
}
type Slider = {
    imageURL: string;
    title: string;
}
type Contact = {
    fullname: string,
    email: string,
    address: string,
    map: string,
    phoneNumber: string
}
type Link = {
    type: string;
    link: string;
    img?: string
}