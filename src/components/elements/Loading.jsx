import '../../styles/loading.css';

export const Loading = function () {
    return (
        <div className="container-spinner bg-gray-100 shadow-lg w-full h-screen flex items-center justify-center">
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
};