
function AdvisorySvg({ width = '42', height = '42' }: { width?: string; height?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_150_1631)">
                <rect x="2" y="0.75" width="38.5" height="38.5" rx="19.25" fill="#0068FF" fillOpacity="0.08" shapeRendering="crispEdges" />
                <path d="M8.875 10.375V22.75L15.5953 28.3488C16.5836 29.1738 17.8297 29.625 19.1145 29.625H19.7891L19.4883 29.3242C19.0844 28.9203 19.0844 28.2672 19.4883 27.8676C19.8922 27.468 20.5453 27.4637 20.9449 27.8676L22.7066 29.6293H23.0934C23.9141 29.6293 24.7176 29.4445 25.448 29.1008L24.3008 27.9492C23.8969 27.5453 23.8969 26.8922 24.3008 26.4926C24.7047 26.093 25.3578 26.0887 25.7574 26.4926L27.1324 27.8676L27.8844 27.1156C28.2668 26.7332 28.3785 26.1789 28.2109 25.6934L22.2855 19.8152L21.6453 20.4555C19.527 22.5738 16.098 22.5738 13.9797 20.4555C12.9914 19.4672 12.9527 17.8816 13.8852 16.8461L18.4742 11.75H16.7727C15.677 11.75 14.6285 12.184 13.8551 12.9574L13.6875 13.125L8.875 10.375Z" fill="#0F6089" />
                <path d="M15.4189 18.2297L20.4291 12.6609C20.9533 12.0809 21.6966 11.75 22.4744 11.75H25.4994C26.3158 11.75 27.1107 11.9906 27.7896 12.4418L28.8123 13.125L33.6248 10.375V22.75L30.5998 25.1562L23.0115 17.6281C22.6076 17.2285 21.9588 17.2285 21.5548 17.6324L20.1884 18.9988C18.8779 20.3094 16.7509 20.3094 15.4404 18.9988C15.2298 18.7883 15.2213 18.4488 15.4189 18.2297Z" fill="#0F6089" />
            </g>
            <defs>
                <filter id="filter0_d_150_1631" x="0.625" y="0.75" width="41.25" height="41.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.375" />
                    <feGaussianBlur stdDeviation="0.6875" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_150_1631" />
                    <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_150_1631" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default AdvisorySvg