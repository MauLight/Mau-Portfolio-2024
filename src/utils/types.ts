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