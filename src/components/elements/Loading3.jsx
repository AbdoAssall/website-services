import '../../styles/loading.css';

export const Loading3 = function () {
    return (
        <div className="container-spinne fixed left-0 top-0 w-full h-full z-9999">
            <div className="fixed left-0 top-0 w-full h-full z-999 bg-center bg-no-repeat" style={{ backgroundImage: "url('https://storge.scopehub.net/images/preloader.gif')" }}></div>
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden bg-primary-one"></div>
        </div>
    );
};