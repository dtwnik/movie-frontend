import React, { useEffect, useState } from 'react';
const SlideModal = ({active, setActive, url}) => {
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <iframe width="900" height="600" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    );
}

export default SlideModal;