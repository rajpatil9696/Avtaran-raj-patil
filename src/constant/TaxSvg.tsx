

function TaxSvg({ width = '42', height = '42' }: { width?: string; height?: string; }) {
    return (
        <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_147_764)">
                <rect x="2" y="0.772583" width="38.4549" height="38.4549" rx="19.2275" fill="#0068FF" fillOpacity="0.08" shapeRendering="crispEdges" />
                <path d="M14.3606 16.5665C14.3606 17.1373 14.8198 17.5965 15.3906 17.5965H22.4421C22.5451 17.2704 22.6009 16.927 22.6009 16.5665C22.6009 16.206 22.5451 15.8626 22.4421 15.5364H15.3906C14.8198 15.5364 14.3606 15.9957 14.3606 16.5665ZM19.1675 10.3862C20.9958 10.3862 22.6439 11.1802 23.7726 12.4463H27.0645C27.6353 12.4463 28.0945 11.9871 28.0945 11.4163C28.0945 10.8455 27.6353 10.3862 27.0645 10.3862H19.1675ZM25.2619 15.5364C25.3177 15.8712 25.3477 16.2146 25.3477 16.5665C25.3477 16.9184 25.3177 17.2618 25.2619 17.5965H27.0645C27.6353 17.5965 28.0945 17.1373 28.0945 16.5665C28.0945 15.9957 27.6353 15.5364 27.0645 15.5364H25.2619Z" fill="#0F6089" />
                <path d="M14.3607 11.7596C14.3607 11 14.9745 10.3862 15.7341 10.3862H19.1676C22.5796 10.3862 25.3479 13.1545 25.3479 16.5665C25.3479 19.7124 22.9959 22.3133 19.953 22.6995L26.1462 27.1244C26.7642 27.5665 26.9058 28.4249 26.4637 29.0386C26.0217 29.6523 25.1633 29.7982 24.5496 29.3562L14.9358 22.4892C14.4509 22.1459 14.2449 21.5236 14.4251 20.9528C14.6054 20.3819 15.1376 20 15.7341 20H19.1676C21.0646 20 22.6011 18.4635 22.6011 16.5665C22.6011 14.6695 21.0646 13.133 19.1676 13.133H15.7341C14.9745 13.133 14.3607 12.5193 14.3607 11.7596Z" fill="#0F6089" />
            </g>
            <defs>
                <filter id="filter0_d_147_764" x="0.626609" y="0.772583" width="41.2016" height="41.2017" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.37339" />
                    <feGaussianBlur stdDeviation="0.686695" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_147_764" />
                    <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_147_764" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default TaxSvg