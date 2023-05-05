import './loading.css'

export default function Loading() {
    return (
        <div className='Loading'>
            <div class="preview">
                <svg viewBox="0 0 50 50" class="spinner">
                    <circle class="ring" cx="25" cy="25" r="22.5" />
                    <circle class="line" cx="25" cy="25" r="22.5" />
                </svg>
            </div>
        </div>
    )
}