
function SetUpSvg({ width = '42', height = '42' }: { width?: string; height?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_150_2979)">
                <rect x="2" y="0.75" width="38.5" height="38.5" rx="19.25" fill="#0068FF" fillOpacity="0.08" shapeRendering="crispEdges" />
                <path d="M10.25 21.375V26.875C10.25 28.3918 11.4832 29.625 13 29.625H29.5C31.0168 29.625 32.25 28.3918 32.25 26.875V21.375H24V22.75C24 23.5105 23.3855 24.125 22.625 24.125H19.875C19.1145 24.125 18.5 23.5105 18.5 22.75V21.375H10.25Z" fill="#0F6089" />
                <path d="M18.5 11.4062C18.5 11.2172 18.6547 11.0625 18.8438 11.0625H23.6562C23.8453 11.0625 24 11.2172 24 11.4062V13.125H18.5V11.4062ZM16.4375 13.125H13C11.4832 13.125 10.25 14.3582 10.25 15.875V21.375H32.25V15.875C32.25 14.3582 31.0168 13.125 29.5 13.125H26.0625V11.4062C26.0625 10.0785 24.984 9 23.6562 9H18.8438C17.516 9 16.4375 10.0785 16.4375 11.4062V13.125Z" fill="#0F6089" />
            </g>
            <defs>
                <filter id="filter0_d_150_2979" x="0.625" y="0.75" width="41.25" height="41.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.375" />
                    <feGaussianBlur stdDeviation="0.6875" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_150_2979" />
                    <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_150_2979" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default SetUpSvg