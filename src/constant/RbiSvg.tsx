
function RbiSvg({ width = '42', height = '42' }: { width?: string; height?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_147_1096)">
                <rect x="2" y="0.75" width="38.5" height="38.5" rx="19.25" fill="#0068FF" fillOpacity="0.08" shapeRendering="crispEdges" />
                <path d="M10.9375 27.2402C10.9375 29.3156 12.6219 31 14.6973 31H27.807C29.8824 31 31.5668 29.3156 31.5668 27.2402C31.5668 23.5234 29.9168 19.9957 27.0594 17.6152L24.9668 15.8707H17.5418L15.4492 17.6152C12.5875 20 10.9375 23.5234 10.9375 27.2402ZM16.4375 10.1129C16.4375 10.2848 16.4762 10.4566 16.5535 10.6113L18.1562 13.8125H24.3438L25.9465 10.6113C26.0238 10.4566 26.0625 10.2848 26.0625 10.1129C26.0625 9.49844 25.5641 9 24.9496 9H17.5504C16.9359 9 16.4375 9.49844 16.4375 10.1129ZM18.3281 21.9121C18.3281 20.6746 19.325 19.6691 20.5625 19.6562V19.4844C20.5625 19.0117 20.9492 18.625 21.4219 18.625C21.8945 18.625 22.2812 19.0117 22.2812 19.4844V19.6562H22.625C23.0977 19.6562 23.4844 20.043 23.4844 20.5156C23.4844 20.9883 23.0977 21.375 22.625 21.375H20.584C20.2875 21.375 20.0469 21.6156 20.0469 21.9121C20.0469 22.1742 20.2359 22.3977 20.4937 22.4406L22.2855 22.7414C23.3727 22.9219 24.1719 23.8629 24.1719 24.9672C24.1719 26.0887 23.3555 27.0168 22.2812 27.193V27.3949C22.2812 27.8676 21.8945 28.2543 21.4219 28.2543C20.9492 28.2543 20.5625 27.8676 20.5625 27.3949V27.223H19.5312C19.0586 27.223 18.6719 26.8363 18.6719 26.3637C18.6719 25.891 19.0586 25.5043 19.5312 25.5043H21.916C22.2125 25.5043 22.4531 25.2637 22.4531 24.9672C22.4531 24.7051 22.2641 24.4816 22.0063 24.4387L20.2145 24.1379C19.123 23.9531 18.3281 23.0121 18.3281 21.9121Z" fill="#0F6089" />
            </g>
            <defs>
                <filter id="filter0_d_147_1096" x="0.625" y="0.75" width="41.25" height="41.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.375" />
                    <feGaussianBlur stdDeviation="0.6875" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_147_1096" />
                    <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_147_1096" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default RbiSvg