export default function DashboardIcon({ tab, size }) {
    return (
        <svg width={size} height={size} viewBox="-2.4 -2.4 28.80 28.80" id="meteor-icon-kit__solid-dashboard" fill="" transform="matrix(1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.336" />
            <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H7C8.10457 0 9 0.89543 9 2V7C9 8.10457 8.10457 9 7 9H2C0.89543 9 0 8.10457 0 7V2C0 0.89543 0.89543 0 2 0ZM2 11H7C8.10457 11 9 11.8954 9 13V22C9 23.1046 8.10457 24 7 24H2C0.89543 24 0 23.1046 0 22V13C0 11.8954 0.89543 11 2 11ZM13 0H22C23.1046 0 24 0.89543 24 2V13C24 14.1046 23.1046 15 22 15H13C11.8954 15 11 14.1046 11 13V2C11 0.89543 11.8954 0 13 0ZM13 17H22C23.1046 17 24 17.8954 24 19V22C24 23.1046 23.1046 24 22 24H13C11.8954 24 11 23.1046 11 22V19C11 17.8954 11.8954 17 13 17Z"
                    fill={tab === 0 ? '#F29E7D' : '#2B5C64'} />
            </g>
        </svg>
    )
}