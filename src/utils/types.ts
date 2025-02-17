import { Dispatch, SetStateAction } from 'react'

export interface ScreenplayPosterProps {
    id: string
    title: string
    poster: string
    sizeChance: number
    shapeChance: number
}

export interface WideMenuProps {
    isUpperMenuOpen: boolean
    setUpperMenuOpen: Dispatch<SetStateAction<boolean>>
}

export interface ProductProps {
    id?: string
    description: string
    title: string
    brand?: string
    image?: string
    price: number
    discount?: number
    rating?: {
        productId: string
        ratings: Array<number>
        averageRating: number
    }
    quantity: number
    tags?: Array<string>
    weight?: number,
    height?: number,
    width?: number,
    length?: number
}