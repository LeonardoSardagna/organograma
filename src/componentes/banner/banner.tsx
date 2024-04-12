import { ComponentProps } from 'react'
import './banner.css'

interface BannerProps extends ComponentProps<'img'> { }

export function Banner({ alt, ...props }: BannerProps) {
    return (
        <header
            className="banner">
            <img {...props} alt={alt} />
        </header>
    )
}
