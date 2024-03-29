interface MarkFavoriteButtonProps {
    isFavorite: boolean,
    onClick: React.MouseEventHandler,
}

export default function MarkFavoriteButton({
    isFavorite,
    onClick,
}: MarkFavoriteButtonProps) {

    const color = '#DAA520';
    const epmtyColor = '#FFFA';

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
    }

    return (
        <button style={{ all: 'unset' }}>
            <svg
                viewBox="0 0 36.09 36.09"
                width={30}
                height={30}
                stroke={color}
                strokeWidth={2}
                fill={isFavorite ? color : epmtyColor}
            >
                <g onClick={handleClick}>
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596 s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055 l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191 c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02 l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957 l2.097z"
                    />
                </g>
            </svg>
        </button>
    );
}