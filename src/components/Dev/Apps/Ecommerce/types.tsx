export interface ProductProps { id: string, title: string, price: number, discount: number, image: string }

export interface BannerProps {
    product: ProductProps
    handleClick: (product: ProductProps) => void
}