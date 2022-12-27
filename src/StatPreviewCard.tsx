import './StatPreviewCard.scss'
import imageProductMobile from './assets/image-header-mobile.jpg'
import imageProductDesktop from './assets/image-header-desktop.jpg'

function StatPreviewCard() {
    return (<article className={'preview-card'} role={'main'}>
        <picture>
            <source srcSet={imageProductDesktop} media="(min-width: 600px)"/>
            <img src={imageProductMobile}
                 alt="preview card of three women sitting and laughing and working on computers"/>
        </picture>

        <div className={'info-wrapper'}>
            <h1>Get <span className={'accent'}>insights</span> that help your business grow.</h1>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
                and overall efficiency</p>

            <div className={'stat-group'}>
                <p>10k+</p>
                <p>Companies</p>
            </div>
            <div className={'stat-group'}>
                <p>314</p>
                <p>Templates</p>
            </div>
            <div className={'stat-group'}>
                <p>12m+</p>
                <p>Queries</p>
            </div>
        </div>
    </article>);
}

export default StatPreviewCard;