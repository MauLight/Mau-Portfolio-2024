export interface BannerProps {
    title: string
    price: number
    discount: number
    handleClick: (item: { id: string, title: string, price: number, discount: number, image: string }) => void
}