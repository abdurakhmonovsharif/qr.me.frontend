type User = {
    id?: string;
    email: string;
    name: string;
    password?: string;
}
type Theme = {
    id?: string;
    background_color: string;
    font_family: string;
    color: string;
}
type Page = {
    id?: string;
    site_link: string;
    site_name: string;
    logo: string;
    description: string;
    qr_code: string;
    view_count: number;
    password: string;
    type: string;
    theme?: string;
    userId?: string;
}
type CreatePageDto = {
    site_link: string;
    site_name: string;
    logo: string;
    description: string;
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
    site_link: string;
    site_name: string;
    logo: string;
    description: string;
    sections: Section[];
    contact: Contact;
    links: Links[],
    theme:Theme
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