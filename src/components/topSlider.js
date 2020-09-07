import React from 'react';
import prev from '../assets/images/prev.svg';
import next from '../assets/images/next.svg';

const TopSlider = () => {
    return (
        <>
            <div className="card prev shadow">
            <img src="https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/laskar-pelangi-2008.jpg" alt="slide"/>
            <div className="circle">
                <img src={prev} alt="slide"/>
            </div>
                <div className="card-body">
                <h6>Laskar pelangi</h6>
                </div>
            </div>
            <div className="card main-content shadow">
                <img src="https://pixelclerks.com/pics/550-2EXfVq1535745486.jpg" alt="slide" />
                <div className="card-body">
                    <h3>Marmut </h3>
                    <p>Raditiya Dika</p>
                </div>
            </div>
            <div className="card next shadow">
            <img src="https://cdn2.tstatic.net/pekanbaru/foto/bank/images/cover-buku-dilan_20180916_124629.jpg" alt="slide" />
            <div className="circle">
            <img src={next } alt="slide"/>
        </div>
                <div className="card-body">
                <h5>Dilan </h5>
                </div>
            </div>
        </>
    );
};
export default TopSlider;