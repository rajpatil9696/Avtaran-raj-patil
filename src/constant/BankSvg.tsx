
function BankSvg({ width = '42', height = '42' }: { width?: string; height?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_150_2598)">
                <rect x="2" y="0.75" width="38.5" height="38.5" rx="19.25" fill="#0068FF" fillOpacity="0.08" shapeRendering="crispEdges" />
                <path d="M10.25 22.0625V28.9375C10.25 30.0762 11.1738 31 12.3125 31H30.1875C31.3262 31 32.25 30.0762 32.25 28.9375V22.0625C32.25 20.9238 31.3262 20 30.1875 20H12.3125C11.1738 20 10.25 20.9238 10.25 22.0625ZM12.3125 22.0625H14.375C14.375 23.2012 13.4512 24.125 12.3125 24.125V22.0625ZM12.3125 26.875C13.4512 26.875 14.375 27.7988 14.375 28.9375H12.3125V26.875ZM24 25.5C24 27.0168 22.7668 28.25 21.25 28.25C19.7332 28.25 18.5 27.0168 18.5 25.5C18.5 23.9832 19.7332 22.75 21.25 22.75C22.7668 22.75 24 23.9832 24 25.5ZM28.125 22.0625H30.1875V24.125C29.0488 24.125 28.125 23.2012 28.125 22.0625ZM28.125 28.9375C28.125 27.7988 29.0488 26.875 30.1875 26.875V28.9375H28.125Z" fill="#0F6089" />
                <path d="M29.8439 8.3125C30.4154 8.3125 30.8752 8.77227 30.8752 9.34375V13.718C30.8752 14.2895 30.4154 14.7492 29.8439 14.7492C29.2724 14.7492 28.8127 14.2895 28.8127 13.718V11.8316L23.3556 17.2887C22.9732 17.6711 22.3631 17.6926 21.9548 17.3445L17.8127 13.7953L13.6705 17.3445C13.2365 17.7141 12.5877 17.6668 12.2181 17.2328C11.8486 16.7988 11.8959 16.15 12.3298 15.7805L17.1423 11.6555C17.5291 11.3246 18.0963 11.3246 18.483 11.6555L22.5693 15.1574L27.3517 10.375H25.4654C24.8939 10.375 24.4341 9.91523 24.4341 9.34375C24.4341 8.77227 24.8939 8.3125 25.4654 8.3125H29.8439Z" fill="#0F6089" />
            </g>
            <defs>
                <filter id="filter0_d_150_2598" x="0.625" y="0.75" width="41.25" height="41.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.375" />
                    <feGaussianBlur stdDeviation="0.6875" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_150_2598" />
                    <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_150_2598" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default BankSvg