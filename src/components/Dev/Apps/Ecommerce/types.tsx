export interface ProductProps { id: string, quantity: number, title: string, price: number, discount: number, image: string }

export interface BannerProps {
    product: ProductProps
    handleAddProduct: (product: ProductProps) => void
}