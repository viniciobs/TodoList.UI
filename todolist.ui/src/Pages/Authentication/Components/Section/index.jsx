import React from 'react';

const Section = (props) => {
    return (
        <section>
            <div className="row">
                <div className="col-8 offset-2 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default Section;