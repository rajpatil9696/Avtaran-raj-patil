
function FomSvg({ width = '42', height = '42' }: { width?: string; height?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_150_2033)">
                <rect x="2" y="0.75" width="38.5" height="38.5" rx="19.25" fill="#0068FF" fillOpacity="0.08" shapeRendering="crispEdges" />
                <path d="M8.96976 19.8153C9.17601 20.3395 9.68304 20.6876 10.2502 20.6876H10.9377V28.2501C10.9377 29.7669 12.1709 31.0001 13.6877 31.0001H23.3729C23.3342 30.7766 23.3127 30.5446 23.3127 30.3083V26.1833C23.3127 24.9587 23.8455 23.8629 24.6877 23.111V22.0626C24.6877 19.5188 26.4151 17.379 28.7612 16.7516L20.8119 9.36959C20.3178 8.90982 19.5701 8.87974 19.0416 9.28365L18.9385 9.36959L9.31351 18.3071C8.90101 18.6938 8.76351 19.2911 8.96976 19.8153ZM17.1252 24.8126C17.1252 23.6739 18.0491 22.7501 19.1877 22.7501H20.5627C21.1428 22.7501 21.667 22.9907 22.0409 23.3774C21.551 23.8329 21.2502 24.4774 21.2502 25.1864V28.9376H17.1252V24.8126Z" fill="#0F6089" />
                <path d="M28.8125 24.125V22.0668C28.8125 21.3062 29.427 20.6918 30.1875 20.6918C30.948 20.6918 31.5625 21.3062 31.5625 22.0668V24.125H28.8125ZM26.75 24.241C25.9508 24.5246 25.375 25.2894 25.375 26.1875V30.3125C25.375 31.4511 26.2988 32.375 27.4375 32.375H32.9375C34.0762 32.375 35 31.4511 35 30.3125V26.1875C35 25.2894 34.4242 24.5246 33.625 24.241V22.0668C33.625 20.1676 32.0867 18.6293 30.1875 18.6293C28.2883 18.6293 26.75 20.1676 26.75 22.0668V24.241Z" fill="#0F6089" />
            </g>
            <defs>
                <filter id="filter0_d_150_2033" x="0.625" y="0.75" width="41.25" height="41.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.375" />
                    <feGaussianBlur stdDeviation="0.6875" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_150_2033" />
                    <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_150_2033" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default FomSvg