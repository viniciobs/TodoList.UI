import React, { useState } from 'react';
import Template from '../../Pages/Template';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Tasks = () => {
    const [isLoading, setIsloading] = useState(true);

    return (
        <Template title="Tasks">
            {isLoading ? <LoadingSpinner coverAllPage={true}/> : ''}
        </Template>
    )

}

export default Tasks;