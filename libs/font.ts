import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'

export const Grotesk = Space_Grotesk({
    subsets: ['latin']
});

export const Mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});